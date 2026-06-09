import { CollectionConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';

import { BaseEntry } from '@/shared';
import { revalidatePage } from '@/libs/utils';

export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        group: 'Taxonomies',
        useAsTitle: 'title',
    },
    hooks: {
        afterChange: [
            async () => {
                await revalidatePage({ path: '/', layout: 'layout' });
            },
        ],
    },
    fields: BaseEntry({
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.CATEGORY]],
        url: { enabled: false },
        tabs: [
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
    }),
};
