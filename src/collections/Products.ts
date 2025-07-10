import type { CollectionConfig } from 'payload';
import { BasePageTab, BasePrice } from '@/collections/shared';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
        group: 'Content',
    },
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
                                    relationTo: 'media',
                                    admin: { width: '50%' },
                                },
                                {
                                    type: 'upload',
                                    name: 'thumbnailHover',
                                    relationTo: 'media',
                                    admin: { width: '50%' },
                                },
                            ],
                        },
                        {
                            type: 'upload',
                            name: 'marquee',
                            relationTo: 'media',
                            hasMany: true,
                        },
                    ],
                },
                {
                    label: 'Content',
                    fields: [
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
