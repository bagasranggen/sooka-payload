import type { CollectionConfig } from 'payload';
import { BaseAsset, BaseAssetReadAccess } from '@/collections/shared';

export const MediaAddon: CollectionConfig = {
    slug: 'mediaAddon',
    admin: {
        group: 'Assets',
    },
    access: {
        read: (arg) => BaseAssetReadAccess(arg),
    },
    fields: BaseAsset({ mobileRelation: 'mediaAddon' }),
    upload: {
        // staticDir: 'media',
        skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
        disableLocalStorage: true,
        imageSizes: [
            {
                name: 'assets400x400',
                width: 400,
                height: 400,
            },
        ],
    },
};
