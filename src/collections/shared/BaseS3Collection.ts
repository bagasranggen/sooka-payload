import { CollectionConfig, ImageSize } from 'payload';
import { S3StorageOptions } from '@payloadcms/storage-s3';
import { CollectionOptions } from '@payloadcms/plugin-cloud-storage/types';

export type GenerateFileUrlArg = {
    collection: CollectionConfig;
    filename: string;
    prefix?: string;
    size?: ImageSize;
};

export type BaseS3CollectionProps = Required<Pick<CollectionOptions, 'prefix'>>;

export const BaseS3Collection = ({ prefix }: BaseS3CollectionProps): S3StorageOptions['collections'] => {
    return {
        [prefix]: {
            prefix,
            disablePayloadAccessControl: true,
            generateFileURL: (args: GenerateFileUrlArg) => {
                return `${process.env.S3_MEDIA_URI}/${args.prefix}/${args.filename}`;
            },
        },
    };
};
