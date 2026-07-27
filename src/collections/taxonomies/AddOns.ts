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
                    // {
                    //     type: 'upload',
                    //     name: 'thumbnail',
                    //     relationTo: 'mediaAddon',
                    //     required: true,
                    // },
                    {
                        type: 'array',
                        name: 'prices',
                        fields: BasePrice(),
                        required: true,
                        maxRows: 1,
                    },
                ],
            },
        ],
    }),
};
