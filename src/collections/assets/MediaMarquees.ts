import type { CollectionConfig } from 'payload';

import { BaseAssets } from '@/shared';

export const MediaMarquees: CollectionConfig = BaseAssets({
    slug: 'mediaMarquees',
    imageSizes: [
        {
            name: 'marquee',
            width: 550,
            height: 413,
        },
        {
            name: 'marqueeMobile',
            width: 250,
            height: 187,
        },
    ],
});
