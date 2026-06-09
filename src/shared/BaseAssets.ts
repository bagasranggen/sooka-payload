import { CollectionConfig, CollectionSlug, UploadConfig } from 'payload';

import { BaseAssetsAccess } from '@/shared/BaseAssetsAccess';

export type BaseAssetsProps = {
    mobileAssets?: CollectionSlug;
} & Pick<CollectionConfig, 'slug'> &
    Pick<UploadConfig, 'imageSizes'>;

export const BaseAssets = ({ slug, imageSizes, mobileAssets }: BaseAssetsProps): CollectionConfig => {
    const fields: CollectionConfig['fields'] = [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ];

    if (mobileAssets) {
        fields.push({
            name: 'mobileAssets',
            type: 'upload',
            relationTo: mobileAssets,
        });
    }

    return {
        slug,
        admin: {
            group: 'Assets',
        },
        access: BaseAssetsAccess(),
        fields,
        upload: {
            skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
            disableLocalStorage: true,
            imageSizes,
        },
    };
};
