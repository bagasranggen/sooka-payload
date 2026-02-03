import type { CollectionConfig } from 'payload';

import { BaseFlavour, BasePageTab, BasePrice } from '@/collections/shared';
import { revalidatePage } from '@/libs/utils';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
        group: 'Content',
        groupBy: true,
    },
    hooks: {
        afterChange: [
            async ({ req: { payload }, doc }) => {
                const category = await payload.findByID({
                    collection: 'categories',
                    id: doc?.category,
                });

                await revalidatePage({ path: '/', layout: 'layout' });
                await revalidatePage({ path: '/' });
                if (category?.uri) await revalidatePage({ path: `/${category.uri}` });
                await revalidatePage({ path: `/${doc.uri}` });
            },
        ],
    },
    defaultSort: 'category',
    orderable: true,
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionProductsIndex',
                    withStatus: true,
                    withUrl: true,
                    updateUrl: async ({ url, siblingData, req: { payload } }) => {
                        // Get Category Slug
                        try {
                            const category = await payload.findByID({
                                collection: 'categories',
                                id: siblingData.category,
                            } as any);

                            if ('uri' in category && category?.uri) url.push(category.uri);
                        } catch {}

                        if (siblingData?.slug) url.push(siblingData.slug);
                    },
                }),
                {
                    label: 'Media',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    type: 'upload',
                                    name: 'thumbnail',
                                    relationTo: 'mediaProduct',
                                    admin: { width: '50%' },
                                },
                                {
                                    type: 'upload',
                                    name: 'thumbnailHover',
                                    relationTo: 'mediaProduct',
                                    admin: { width: '50%' },
                                },
                            ],
                        },
                        {
                            type: 'upload',
                            name: 'marquee',
                            relationTo: 'mediaProduct',
                            hasMany: true,
                        },
                    ],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'group',
                            label: 'Availability',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'select',
                                            name: 'availability',
                                            label: false,
                                            defaultValue: 'available',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Available',
                                                    value: 'available',
                                                },
                                                {
                                                    label: 'Unavailable',
                                                    value: 'unavailable',
                                                },
                                            ],
                                            admin: {
                                                width: '20%',
                                            },
                                        },
                                        {
                                            type: 'relationship',
                                            name: 'unavailableLabel',
                                            label: false,
                                            relationTo: 'tags',
                                            admin: {
                                                placeholder: 'Select a label',
                                                condition: (data, siblingData) => {
                                                    return siblingData?.availability === 'unavailable';
                                                },
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'text',
                                    name: 'unavailableCustomLabel',
                                    label: 'Custom Label',
                                    defaultValue: 'Currently Unavailable',
                                    admin: {
                                        condition: (data, siblingData) => {
                                            return siblingData?.availability === 'unavailable';
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            type: 'textarea',
                            name: 'bannerTitle',
                        },
                        {
                            type: 'richText',
                            name: 'description',
                            required: true,
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    type: 'relationship',
                                    name: 'category',
                                    relationTo: 'categories',
                                    required: true,
                                    admin: {
                                        width: '50%',
                                    },
                                },
                                {
                                    type: 'relationship',
                                    name: 'badge',
                                    relationTo: 'tags',
                                    admin: {
                                        width: '50%',
                                        description: 'Badge will only shown on product listing page',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'group',
                            name: 'flavour',
                            interfaceName: 'Flavour',
                            fields: [
                                {
                                    type: 'checkbox',
                                    name: 'showFlavour',
                                    defaultValue: true,
                                },
                                {
                                    type: 'row',
                                    fields: [
                                        BaseFlavour({
                                            name: 'freshCreamy',
                                            label: 'Fresh - Creamy',
                                            required: true,
                                            admin: { width: '33%' },
                                        }),
                                        BaseFlavour({
                                            name: 'custardySpongy',
                                            label: 'Custardy - Spongy',
                                            required: true,
                                            admin: { width: '33%' },
                                        }),
                                        BaseFlavour({
                                            name: 'tangySweet',
                                            label: 'Tangy - Sweet',
                                            required: true,
                                            admin: { width: '33%' },
                                        }),
                                    ],
                                    admin: {
                                        condition: (data, siblingData) => siblingData?.showFlavour,
                                    },
                                },
                            ],
                        },
                        {
                            type: 'array',
                            name: 'prices',
                            fields: BasePrice,
                            required: true,
                        },
                        {
                            type: 'relationship',
                            name: 'addons',
                            label: 'Add-on(s)',
                            hasMany: true,
                            relationTo: 'addons',
                        },
                    ],
                },
            ],
        },
    ],
};
