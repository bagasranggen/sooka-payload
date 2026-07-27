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

import { BaseS3Collection } from '@/shared';

import { Testimonials } from '@/collections/entries';
import { Pages, Products } from '@/collections/pages';
import { AddOns, Categories, Tags } from '@/collections/taxonomies';
import { Tokens, Users } from '@/collections/users';

import { Footer, Homepage, Navigation } from '@/globals';

import {
    MediaAddons,
    MediaDualPanels,
    MediaGalleries,
    MediaGlobals,
    MediaMarquees,
    MediaProducts,
} from '@/collections/assets';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    cors: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [],
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        MediaAddons,
        MediaDualPanels,
        MediaGalleries,
        MediaGlobals,
        MediaMarquees,
        MediaProducts,
        Testimonials,
        AddOns,
        Categories,
        Tags,
        Pages,
        Products,
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
                ...BaseS3Collection({ prefix: 'mediaAddons' }),
                ...BaseS3Collection({ prefix: 'mediaDualPanels' }),
                ...BaseS3Collection({ prefix: 'mediaGalleries' }),
                ...BaseS3Collection({ prefix: 'mediaGlobals' }),
                ...BaseS3Collection({ prefix: 'mediaMarquees' }),
                ...BaseS3Collection({ prefix: 'mediaProducts' }),
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
            generateTitle: ({ doc }) => `${doc.title} - Sooka Baked Goods`,
            generateDescription: ({ doc }) => doc.excerpt,
        }),
    ],
});
