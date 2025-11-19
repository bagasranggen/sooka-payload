import type { CollectionConfig } from 'payload';

import { BaseFlavour, BasePageTab, BasePrice } from '@/collections/shared';
import { revalidatePage } from '@/libs/utils';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
        group: 'Content',
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
    defaultSort: 'slug',
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
                            type: 'textarea',
                            name: 'bannerTitle',
                        },
                        {
                            type: 'richText',
                            name: 'description',
                            required: true,
                        },
                        {
                            type: 'relationship',
                            name: 'category',
                            relationTo: 'categories',
                            required: true,
                        },
                        {
                            type: 'group',
                            name: 'flavour',
                            interfaceName: 'Flavour',
                            fields: [
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
