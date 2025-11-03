import { GlobalConfig } from 'payload';
import { BaseLink, BasePageTab, BaseStatus, BaseTarget } from '@/collections/shared';

import { revalidatePage } from '@/libs/utils/revalidatePage';
import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

export const Homepage: GlobalConfig = {
    slug: 'homepage',
    admin: {
        group: 'Content',
    },
    hooks: {
        afterChange: [
            async () => {
                await revalidatePage({ path: '/' });
            },
        ],
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionHomepageIndex',
                    withUrl: true,
                    updateUrl: async ({ url }) => {
                        await new Promise((resolve) => {
                            setTimeout(() => {
                                url.push('__home__');
                                resolve(true);
                            }, 30);
                        });
                    },
                }),
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
                                        BaseStatus({
                                            withStatus: true,
                                            width: '10%',
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
                                            relationTo: 'mediaGlobal',
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
                                                BaseTarget({
                                                    name: 'productTarget',
                                                    width: '15%',
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
                                    relationTo: 'mediaGlobal',
                                },
                                {
                                    type: 'upload',
                                    name: 'storyMediaSecondary',
                                    relationTo: 'mediaGlobal',
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
                            relationTo: 'mediaGlobal',
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
        },
    ],
};
