import { CollectionSlug, Field } from 'payload';

export const BaseAsset = ({ mobileRelation }: { mobileRelation: CollectionSlug }): Field[] => [
    {
        name: 'mobileAssets',
        type: 'upload',
        relationTo: mobileRelation,
    },
    {
        name: 'alt',
        type: 'text',
        required: true,
    },
];
