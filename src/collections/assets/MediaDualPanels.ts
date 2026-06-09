import type { CollectionConfig } from 'payload';

import { BaseAssets } from '@/shared';

export const MediaDualPanels: CollectionConfig = BaseAssets({
    slug: 'mediaDualPanels',
    mobileAssets: 'mediaDualPanels',
    imageSizes: [
        {
            name: 'media950x594',
            width: 950,
            height: 594,
        },
        {
            name: 'media950x975',
            width: 950,
            height: 975,
        },
        {
            name: 'mediaSquare',
            width: 750,
            height: 750,
        },
        {
            name: 'media4x3',
            width: 600,
            height: 450,
        },
    ],
});
