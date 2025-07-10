import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        group: 'Assets',
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
        adminThumbnail: 'assets400x400',
        imageSizes: [
            {
                name: 'bannerDesktop',
                width: 1600,
                height: 900,
            },
            {
                name: 'bannerTablet',
                width: 800,
                height: 840,
            },
            {
                name: 'bannerMobile',
                width: 600,
                height: 1072,
            },
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
                name: 'assets400x400',
                width: 400,
                height: 400,
            },
            {
                name: 'productMarquee',
                width: 550,
                height: 413,
            },
            {
                name: 'productMarqueeMobile',
                width: 250,
                height: 333,
            },
            {
                name: 'productListingThumbnail',
                width: 400,
                height: 619,
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
