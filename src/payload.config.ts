// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { seoPlugin } from '@payloadcms/plugin-seo';

import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { AddOns } from '@/collections/AddOns';
import { Categories } from '@/collections/Categories';
import { Pages } from '@/collections/Pages';
import { Products } from '@/collections/Products';
import { Tags } from '@/collections/Tags';
import { Testimonials } from '@/collections/Testimonials';
import { Tokens } from '@/collections/Tokens';
import { Users } from '@/collections/Users';

import { MediaAddon } from '@/collections/MediaAddon';
import { MediaGallery } from '@/collections/MediaGallery';
import { MediaGlobal } from '@/collections/MediaGlobal';
import { MediaProduct } from '@/collections/MediaProduct';

import { Navigation } from '@/globals/Navigation';
import { Homepage } from '@/globals/Homepage';
import { Footer } from '@/globals/Footer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        AddOns,
        Categories,
        MediaAddon,
        MediaGallery,
        MediaGlobal,
        MediaProduct,
        Pages,
        Products,
        Tags,
        Testimonials,
        Tokens,
        Users,
    ],
    globals: [Navigation, Homepage, Footer],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        payloadCloudPlugin(),
        // storage-adapter-placeholder
        s3Storage({
            collections: {
                mediaAddon: {
                    prefix: 'mediaAddon',
                    disablePayloadAccessControl: true,
                    generateFileURL: (args) => {
                        return `${process.env.S3_MEDIA_URI}/${args.prefix}/${args.filename}`;
                    },
                },
                mediaGlobal: {
                    prefix: 'mediaGlobal',
                    disablePayloadAccessControl: true,
                    generateFileURL: (args) => {
                        return `${process.env.S3_MEDIA_URI}/${args.prefix}/${args.filename}`;
                    },
                },
                mediaGallery: {
                    prefix: 'mediaGallery',
                    disablePayloadAccessControl: true,
                    generateFileURL: (args) => {
                        return `${process.env.S3_MEDIA_URI}/${args.prefix}/${args.filename}`;
                    },
                },
                mediaProduct: {
                    prefix: 'mediaProduct',
                    disablePayloadAccessControl: true,
                    generateFileURL: (args) => {
                        return `${process.env.S3_MEDIA_URI}/${args.prefix}/${args.filename}`;
                    },
                },
            },
            bucket: process.env.S3_BUCKET || '',
            config: {
                forcePathStyle: true,
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
                },
                region: process.env.S3_REGION,
                endpoint: process.env.S3_ENDPOINT,
            },
        }),
        seoPlugin({
            tabbedUI: true,
            interfaceName: 'Meta',
            collections: ['products', 'categories'],
            globals: ['homepage'],
            uploadsCollection: ['mediaAddon', 'mediaGlobal', 'mediaProduct', 'mediaGallery'],
            generateTitle: ({ doc }) => `${doc.title} - Sooka Baked Goods`,
            generateDescription: ({ doc }) => doc.excerpt,
        }),
    ],
});
