import { GlobalConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';
import { revalidatePage } from '@/libs/utils/revalidatePage';
import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

import { BaseLink } from '@/shared/BaseLink';
import { BaseEntry, BaseEntryStatus, BaseLinkTarget } from '@/shared';

export const Homepage: GlobalConfig = {
    slug: 'homepage',
    admin: {
        group: 'Pages',
    },
    hooks: {
        afterChange: [
            async () => {
                await revalidatePage({ path: '/' });
            },
        ],
    },
    fields: BaseEntry({
        hasSeo: true,
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.HOMEPAGE]],
        tabs: [
            {
                label: 'Banner',
                fields: [
                    {
                        type: 'array',
                        name: 'bannerMedia',
                        label: 'Media',
                        labels: {
                            singular: 'Media',
                            plural: 'Media',
                        },
                        fields: [
                            {
                                type: 'row',
                                fields: [
                                    {
                                        type: 'select',
                                        name: 'source',
                                        options: [
                                            { value: 'products', label: 'Products' },
                                            { value: 'custom', label: 'Custom' },
                                        ],
                                    },
                                    BaseEntryStatus({
                                        admin: { width: '30%' },
                                    }),
                                ],
                            },
                            {
                                type: 'row',
                                fields: [
                                    {
                                        type: 'relationship',
                                        name: 'tag',
                                        relationTo: 'tags',
                                        admin: { width: '40%' },
                                    },
                                    {
                                        type: 'select',
                                        name: 'textAlign',
                                        defaultValue: 'left',
                                        options: [
                                            { value: 'left', label: 'Left' },
                                            { value: 'right', label: 'Right' },
                                        ],
                                        admin: { width: '40%' },
                                    },
                                    {
                                        type: 'select',
                                        name: 'bannerOverlay',
                                        label: 'Overlay',
                                        defaultValue: '3',
                                        options: createArrayFromNumber(6).map((item) => {
                                            const value = item.toString();

                                            let label = 'none';
                                            if (item > 0) label = (item * 10).toString();

                                            return {
                                                value,
                                                label,
                                            };
                                        }),
                                        admin: { width: '20%' },
                                    },
                                ],
                            },
                            {
                                type: 'group',
                                label: 'Custom Content',
                                admin: {
                                    condition: (data, siblingData) => siblingData?.source === 'custom',
                                },
                                fields: [
                                    {
                                        type: 'upload',
                                        name: 'media',
                                        relationTo: 'mediaGlobals',
                                    },
                                    {
                                        type: 'text',
                                        name: 'title',
                                    },
                                    {
                                        type: 'richText',
                                        name: 'description',
                                    },
                                    BaseLink(),
                                ],
                            },
                            {
                                type: 'group',
                                label: 'Product',
                                admin: {
                                    condition: (data, siblingData) => siblingData?.source === 'products',
                                },
                                fields: [
                                    {
                                        type: 'row',
                                        fields: [
                                            {
                                                type: 'relationship',
                                                name: 'product',
                                                label: false,
                                                relationTo: 'products',
                                            },
                                            BaseLinkTarget({
                                                name: 'productTarget',
                                                width: '20%',
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                },
                                            }),
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Highlight',
                fields: [
                    {
                        type: 'array',
                        name: 'highlights',
                        maxRows: 2,
                        fields: [
                            {
                                type: 'relationship',
                                name: 'tag',
                                label: 'Title',
                                relationTo: 'tags',
                                required: true,
                            },
                            {
                                type: 'relationship',
                                name: 'products',
                                relationTo: 'products',
                                hasMany: true,
                                required: true,
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Story',
                fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'upload',
                                name: 'storyMediaMain',
                                relationTo: 'mediaGlobals',
                            },
                            {
                                type: 'upload',
                                name: 'storyMediaSecondary',
                                relationTo: 'mediaGlobals',
                            },
                        ],
                    },
                    {
                        type: 'richText',
                        name: 'storyDescription',
                    },
                ],
            },
            {
                label: 'Testimonials',
                fields: [
                    {
                        type: 'relationship',
                        name: 'testimonials',
                        relationTo: 'testimonials',
                        hasMany: true,
                    },
                ],
            },
            {
                label: 'Image Divider',
                fields: [
                    {
                        type: 'upload',
                        name: 'imageDividerMedia',
                        relationTo: 'mediaGlobals',
                    },
                ],
            },
            {
                label: 'Order Steps',
                fields: [
                    {
                        type: 'richText',
                        name: 'orderDescription',
                    },
                    {
                        type: 'array',
                        name: 'orderSteps',
                        fields: [
                            {
                                type: 'textarea',
                                name: 'title',
                            },
                            {
                                type: 'richText',
                                name: 'description',
                            },
                        ],
                    },
                ],
            },
        ],
    }),
};
