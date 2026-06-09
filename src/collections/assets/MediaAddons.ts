import type { CollectionConfig } from 'payload';

import { BaseAssets } from '@/shared';

export const MediaAddons: CollectionConfig = BaseAssets({
    slug: 'mediaAddons',
    mobileAssets: 'mediaAddons',
    imageSizes: [
        {
            name: 'assets400x400',
            width: 400,
            height: 400,
        },
    ],
});
