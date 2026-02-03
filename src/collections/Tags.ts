import { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'title',
        group: 'Entries',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionTagsEntry',
                    // withStatus: true,
                }),
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'textarea',
                            name: 'badgeTitle',
                            admin: {
                                description: 'This will only shown on badge component',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
