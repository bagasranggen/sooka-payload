import type { CollectionConfig } from 'payload';
import { BasePageTab, BaseContentBlocks } from '@/collections/shared';
import { revalidatePage } from '@/libs/utils';

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        group: 'Content',
    },
    hooks: {
        afterChange: [
            async ({ doc }) => {
                await revalidatePage({ path: '/', layout: 'layout' });
                await revalidatePage({ path: `/${doc.uri}` });
            },
        ],
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionPagesIndex',
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
                    fields: [BaseContentBlocks()],
                },
            ],
        },
    ],
};
