import { CollectionConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';

import { BaseEntry, ContentBlocks } from '@/shared';
import { revalidatePage } from '@/libs/utils';

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
        groupBy: true,
    },
    hooks: {
        afterChange: [
            async ({ doc }) => {
                await revalidatePage({ path: '/', layout: 'layout' });
                await revalidatePage({ path: `/${doc.uri}` });
            },
        ],
    },
    fields: BaseEntry({
        hasSeo: true,
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.STATIC_PAGE], ENTRY_TYPE_HANDLES[ENTRY_HANDLES.PRODUCT_LISTING]],
        url: {
            additionalPath: async ({ siblingData }) => {
                const url = [];

                if (siblingData?.typeHandle === ENTRY_TYPE_HANDLES[ENTRY_HANDLES.PRODUCT_LISTING]) {
                    if (siblingData?.category) {
                        url.push('products');
                    }
                }

                return url;
            },
        },
        tabs: [
            {
                label: 'Content',
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.STATIC_PAGE;
                    },
                },
                fields: [ContentBlocks()],
            },
            {
                label: 'Header',
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.PRODUCT_LISTING;
                    },
                },
                fields: [
                    {
                        type: 'text',
                        name: 'headerTitle',
                        label: 'Title',
                    },
                    {
                        type: 'richText',
                        name: 'headerDescription',
                        label: 'Description',
                    },
                    {
                        type: 'upload',
                        name: 'headerBackground',
                        label: 'Background Image',
                        relationTo: 'mediaProducts',
                    },
                ],
            },
            {
                label: 'Content',
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.PRODUCT_LISTING;
                    },
                },
                fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'relationship',
                                name: 'category',
                                relationTo: 'categories',
                                admin: {
                                    width: '50%',
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    }),
};
