import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/libs/constants';

import { BaseAssets } from '@/shared';

export const MediaProducts: CollectionConfig = BaseAssets({
    slug: 'mediaProducts',
    fields: [
        {
            name: 'portraitAssets',
            type: 'upload',
            relationTo: 'mediaProducts',
        },
    ],
    imageSizes: [
        MEDIA_DIMENSIONS.BANNER_DESKTOP,
        MEDIA_DIMENSIONS.BANNER_TABLET,
        MEDIA_DIMENSIONS.BANNER_MOBILE,
        {
            name: 'productDetailBanner',
            width: 1200,
            height: 900,
        },
        {
            name: 'productDetailSticky',
            width: 800,
            height: 1067,
        },
        {
            name: 'productDetailMobile',
            width: 600,
            height: 449,
        },
        {
            name: 'productMarquee',
            width: 550,
            height: 413,
        },
        {
            name: 'productMarqueeMobile',
            width: 250,
            height: 187,
        },
        {
            name: 'productListingThumbnail',
            width: 400,
            height: 619,
        },
        {
            name: 'productListingThumbnailMobile',
            width: 600,
            height: 600,
        },
    ],
});
