import { ImageSize } from 'payload';

export const MEDIA_DIMENSIONS: Record<string, ImageSize> = {
    BANNER_DESKTOP: {
        name: 'bannerDesktop',
        width: 1600,
        height: 900,
    },
    BANNER_TABLET: {
        name: 'bannerTablet',
        width: 800,
        height: 840,
    },
    BANNER_MOBILE: {
        name: 'bannerMobile',
        width: 600,
        height: 1072,
    },
    MARQUEE: {
        name: 'marquee',
        width: 550,
        height: 413,
    },
    MARQUEE_MOBILE: {
        name: 'marqueeMobile',
        width: 250,
        height: 187,
    },
} as const;
