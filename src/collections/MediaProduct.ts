import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/collections/shared/MediaDimensions';

export const MediaProduct: CollectionConfig = {
    slug: 'mediaProduct',
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
    },
};
