import type { CollectionConfig } from 'payload';
import { BaseAsset, BaseAssetReadAccess } from '@/collections/shared';

export const MediaDualPanel: CollectionConfig = {
    slug: 'mediaDualPanel',
    admin: {
        group: 'Assets',
    },
    access: {
        read: (arg) => BaseAssetReadAccess(arg),
    },
    fields: BaseAsset({ mobileRelation: 'mediaDualPanel' }),
    upload: {
        // staticDir: 'media',
        skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
        disableLocalStorage: true,
        imageSizes: [
            {
                name: 'media950x594',
                width: 950,
                height: 594,
            },
            {
                name: 'media950x975',
                width: 950,
                height: 975,
            },
            {
                name: 'mediaSquare',
                width: 750,
                height: 750,
            },
            {
                name: 'media4x3',
                width: 600,
                height: 450,
            },
        ],
    },
};
