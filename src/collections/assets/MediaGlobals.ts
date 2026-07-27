import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/libs/constants';

import { BaseAssets } from '@/shared';

export const MediaGlobals: CollectionConfig = BaseAssets({
    slug: 'mediaGlobals',
    mobileAssets: 'mediaGlobals',
    imageSizes: [
        MEDIA_DIMENSIONS.BANNER_DESKTOP,
        MEDIA_DIMENSIONS.BANNER_TABLET,
        MEDIA_DIMENSIONS.BANNER_MOBILE,
        {
            name: 'storyMediaDesktop',
            width: 550,
            height: 733,
        },
        {
            name: 'storyMediaMobile',
            width: 600,
            height: 400,
        },
        {
            name: 'mediaDividerTablet',
            width: 1000,
            height: 600,
        },
        {
            name: 'mediaDividerMobile',
            width: 600,
            height: 600,
        },
    ],
});
