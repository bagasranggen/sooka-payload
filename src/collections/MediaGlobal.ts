import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/collections/shared/MediaDimensions';

export const MediaGlobal: CollectionConfig = {
    slug: 'mediaGlobal',
    admin: {
        group: 'Assets',
    },
    access: {
        read: ({ req: { headers } }) => {
            const hostnames = [process.env.WEB_HOSTNAME, process.env.CMS_HOSTNAME].filter((item) => Boolean(item));
            const forwardedHostname = headers?.get('x-forwarded-host')?.split(':').shift();
            return hostnames.includes(forwardedHostname);
        },
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
                name: 'assets400x400',
                width: 400,
                height: 400,
            },
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
