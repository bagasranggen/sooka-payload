import { CollectionConfig } from 'payload';

import { BaseEntry, BasePrice } from '@/shared';

export const AddOns: CollectionConfig = {
    slug: 'addons',
    admin: {
        group: 'Taxonomies',
        useAsTitle: 'title',
    },
    fields: BaseEntry({
        typeHandle: [],
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        type: 'upload',
                        name: 'thumbnail',
                        relationTo: 'mediaAddons',
                        required: true,
                    },
                    {
                        type: 'checkbox',
                        name: 'hasNote',
                        defaultValue: false,
                    },
                    {
                        type: 'text',
                        name: 'note',
                        admin: {
                            condition: (data, siblingData) => siblingData?.hasNote,
                        },
                    },
                    {
                        type: 'array',
                        name: 'prices',
                        fields: BasePrice({
                            additionalNote: {
                                hidden: true,
                            },
                        }),
                        required: true,
                        maxRows: 1,
                    },
                ],
            },
        ],
    }),
};
