import { GlobalConfig } from 'payload';

import { BaseLink } from '@/shared/BaseLink';
import { BaseEntryStatus } from '@/shared';
import { revalidatePage } from '@/libs/utils';

export const Navigation: GlobalConfig = {
    slug: 'navigation',
    label: 'Header',
    admin: {
        group: 'Navigation',
    },
    hooks: {
        afterChange: [
            async () => {
                await revalidatePage({ path: '/', layout: 'layout' });
            },
        ],
    },
    fields: [
        {
            type: 'array',
            name: 'navigations',
            fields: [
                {
                    type: 'row',
                    fields: [BaseEntryStatus({ admin: { width: '15%' } })],
                },
                BaseLink(),
                {
                    type: 'array',
                    name: 'children',
                    label: 'Sub Menu',
                    fields: [
                        {
                            type: 'row',
                            fields: [BaseEntryStatus({ admin: { width: '15%' } })],
                        },
                        BaseLink(),
                    ],
                },
            ],
        },
    ],
};
