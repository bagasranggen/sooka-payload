import { GlobalConfig } from 'payload';
import { BaseLink, BaseStatus } from '@/collections/shared';

export const Navigation: GlobalConfig = {
    slug: 'navigation',
    label: 'Header',
    admin: {
        group: 'Navigation',
    },
    fields: [
        {
            type: 'array',
            name: 'navigations',
            fields: [
                {
                    type: 'row',
                    fields: [BaseStatus({ withStatus: true, width: '15%' })],
                },
                BaseLink(),
            ],
        },
    ],
};
