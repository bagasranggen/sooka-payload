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
import { Media } from '@/collections/Media';
import { Pages } from '@/collections/Pages';
import { Products } from '@/collections/Products';
import { Tags } from '@/collections/Tags';
import { Testimonials } from '@/collections/Testimonials';
import { Tokens } from '@/collections/Tokens';
import { Users } from '@/collections/Users';

import { Navigation } from '@/globals/Navigation';
import { Homepage } from '@/globals/Homepage';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [AddOns, Categories, Media, Pages, Products, Tags, Testimonials, Tokens, Users],
    globals: [Navigation, Homepage],
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
                media: {
                    prefix: 'media',
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
            uploadsCollection: 'media',
            generateTitle: ({ doc }) => `${doc.title} - Sooka Baked Goods`,
            generateDescription: ({ doc }) => doc.excerpt,
        }),
    ],
});
