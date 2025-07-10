import type { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'title',
        group: 'Content',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionCategoriesIndex',
                    withStatus: true,
                    withUrl: true,
                    updateUrl: async ({ url, siblingData }) => {
                        await new Promise((resolve) => {
                            setTimeout(() => {
                                if (siblingData.slug) url.push(siblingData.slug);
                                resolve(true);
                            }, 30);
                        });
                    },
                }),
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'richText',
                            name: 'description',
                        },
                    ],
                },
            ],
        },
    ],
};
