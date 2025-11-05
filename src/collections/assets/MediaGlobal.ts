import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/collections/shared/MediaDimensions';
import { BaseAssetReadAccess } from '@/collections/shared';

export const MediaGlobal: CollectionConfig = {
    slug: 'mediaGlobal',
    admin: {
        group: 'Assets',
    },
    access: {
        read: (arg) => BaseAssetReadAccess(arg),
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: {
        // staticDir: 'media',
        skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
        disableLocalStorage: true,
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
    },
};
