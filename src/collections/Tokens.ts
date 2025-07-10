import { CollectionConfig } from 'payload';

export const Tokens: CollectionConfig = {
    slug: 'tokens',
    admin: {
        useAsTitle: 'title',
        group: 'User',
    },
    auth: {
        useAPIKey: true,
        disableLocalStrategy: true,
    },
    fields: [
        {
            type: 'text',
            name: 'title',
            required: true,
        },
    ],
};
