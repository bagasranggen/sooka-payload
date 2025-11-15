import type { CollectionConfig } from 'payload';
import { BaseAsset, BaseAssetReadAccess } from '@/collections/shared';

export const MediaMarquee: CollectionConfig = {
    slug: 'mediaMarquee',
    admin: {
        group: 'Assets',
    },
    access: {
        read: (arg) => BaseAssetReadAccess(arg),
    },
    fields: BaseAsset({ mobileRelation: 'mediaMarquee' }),
    upload: {
        // staticDir: 'media',
        skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
        disableLocalStorage: true,
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
    },
};
