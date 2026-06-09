import type { CollectionConfig } from 'payload';

import { BaseAssets } from '@/shared';

export const MediaGalleries: CollectionConfig = BaseAssets({
    slug: 'mediaGalleries',
    mobileAssets: 'mediaGalleries',
    imageSizes: [
        {
            name: 'collage1x1',
            width: 600,
            height: 600,
        },
        {
            name: 'collage4x3',
            width: 600,
            height: 450,
        },
        {
            name: 'collage3x4',
            width: 600,
            height: 800,
        },
        {
            name: 'collage3x2',
            width: 600,
            height: 400,
        },
        {
            name: 'collage2x3',
            width: 600,
            height: 900,
        },
    ],
});
