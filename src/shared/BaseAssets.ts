import { CollectionConfig, CollectionSlug, UploadConfig } from 'payload';

import { BaseAssetsAccess } from '@/shared/BaseAssetsAccess';

export type BaseAssetsProps = {
    mobileAssets?: CollectionSlug;
    fields?: CollectionConfig['fields'];
} & (Pick<CollectionConfig, 'slug'> & Pick<UploadConfig, 'imageSizes'>);

export const BaseAssets = ({
    slug,
    imageSizes,
    mobileAssets,
    fields: fieldsProps,
}: BaseAssetsProps): CollectionConfig => {
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

    if (fieldsProps && fieldsProps.length > 0) fields.push(...fieldsProps);

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
