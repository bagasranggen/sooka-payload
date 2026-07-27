import { CollectionConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';

import { BaseEntry } from '@/shared';

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        group: 'Taxonomies',
        useAsTitle: 'title',
    },
    fields: BaseEntry({
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.TAG]],
        url: { enabled: false },
        tabs: [
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
    }),
};
