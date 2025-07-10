import { CollectionConfig } from 'payload';
import { BasePageTab, BasePrice } from '@/collections/shared';

export const AddOns: CollectionConfig = {
    slug: 'addons',
    labels: { plural: 'Add-ons', singular: 'Add-on' },
    admin: {
        useAsTitle: 'title',
        group: 'Entries',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionAddonsEntry',
                    withStatus: true,
                }),
                {
                    label: 'Media',
                    fields: [
                        {
                            type: 'upload',
                            name: 'thumbnail',
                            relationTo: 'media',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'array',
                            name: 'prices',
                            fields: BasePrice,
                        },
                    ],
                },
            ],
        },
    ],
};
