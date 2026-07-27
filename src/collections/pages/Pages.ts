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
        tabs: [
            {
                label: 'Content',
                fields: [ContentBlocks()],
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.STATIC_PAGE;
                    },
                },
            },
            {
                label: 'Content',
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
                    {
                        type: 'richText',
                        name: 'description',
                    },
                ],
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.PRODUCT_LISTING;
                    },
                },
            },
        ],
    }),
};
