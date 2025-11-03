import type { CollectionConfig } from 'payload';

import { MEDIA_DIMENSIONS } from '@/collections/shared/MediaDimensions';

export const MediaGallery: CollectionConfig = {
    slug: 'mediaGallery',
    admin: {
        group: 'Assets',
    },
    access: {
        read: ({ req: { headers } }) => {
            const hostnames = [process.env.WEB_HOSTNAME, process.env.CMS_HOSTNAME].filter((item) => Boolean(item));
            const forwardedHostname = headers?.get('x-forwarded-host')?.split(':').shift();
            return hostnames.includes(forwardedHostname);
        },
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
    upload: {
        // staticDir: 'media',
        skipSafeFetch: [{ hostname: process.env.CMS_HOSTNAME || '' }],
        disableLocalStorage: true,
        imageSizes: [
            MEDIA_DIMENSIONS.MARQUEE,
            MEDIA_DIMENSIONS.MARQUEE_MOBILE,
            {
                name: 'collage1x1',
                width: 600,
                height: 600,
            },
            {
                name: 'collage4x3',
                width: 600,
                height: 450,
            },
            {
                name: 'collage3x4',
                width: 600,
                height: 800,
            },
            {
                name: 'collage3x2',
                width: 600,
                height: 400,
            },
            {
                name: 'collage2x3',
                width: 600,
                height: 900,
            },
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
