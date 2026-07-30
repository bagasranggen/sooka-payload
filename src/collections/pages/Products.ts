import { CollectionConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';
import { revalidatePage } from '@/libs/utils';

import { BaseEntry, BaseFlavour, BasePrice } from '@/shared';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
        groupBy: true,
    },
    defaultSort: 'category',
    orderable: true,
    hooks: {
        afterChange: [
            async ({ doc }) => {
                await revalidatePage({ path: '/', layout: 'layout' });
                await revalidatePage({ path: '/' });
                await revalidatePage({ path: `/${doc.uri}` });
            },
        ],
    },
    fields: BaseEntry({
        hasSeo: true,
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.PRODUCT]],
        url: {
            additionalPath: async ({ siblingData, req: { payload } }) => {
                const url = [];

                url.push('products');

                if (siblingData?.category) {
                    try {
                        const category = await payload.find({
                            collection: 'categories',
                            where: {
                                id: { equals: siblingData.category },
                            },
                        });

                        if (category?.docs?.[0]?.slug) url.push(category.docs[0].slug);
                    } catch {}
                }

                return url;
            },
        },
        sideBarFields: [
            {
                type: 'select',
                name: 'availability',
                defaultValue: 'available',
                required: true,
                options: [
                    {
                        label: 'Available',
                        value: 'available',
                    },
                    {
                        label: 'Unavailable',
                        value: 'unavailable',
                    },
                ],
            },
            {
                type: 'relationship',
                name: 'unavailableLabel',
                relationTo: 'tags',
                admin: {
                    placeholder: 'Select a label',
                    condition: (data, siblingData) => {
                        return siblingData?.availability === 'unavailable';
                    },
                },
            },
        ],
        tabs: [
            {
                label: 'Media',
                fields: [
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'upload',
                                name: 'thumbnail',
                                relationTo: 'mediaProducts',
                                admin: { width: '50%' },
                            },
                            {
                                type: 'upload',
                                name: 'thumbnailHover',
                                relationTo: 'mediaProducts',
                                admin: { width: '50%' },
                            },
                        ],
                    },
                    {
                        type: 'upload',
                        name: 'marquee',
                        relationTo: 'mediaProducts',
                        hasMany: true,
                    },
                ],
            },
            {
                label: 'Content',
                fields: [
                    {
                        type: 'textarea',
                        name: 'bannerTitle',
                    },
                    {
                        type: 'richText',
                        name: 'description',
                        required: true,
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'relationship',
                                name: 'category',
                                relationTo: 'categories',
                                required: true,
                                admin: {
                                    width: '42.5%',
                                },
                            },
                            {
                                type: 'relationship',
                                name: 'badge',
                                relationTo: 'tags',
                                admin: {
                                    width: '42.5%',
                                    description: 'Badge will only shown on product listing page',
                                },
                            },
                            {
                                type: 'number',
                                name: 'quantity',
                                admin: {
                                    width: '15%',
                                },
                            },
                        ],
                    },
                    {
                        type: 'group',
                        name: 'flavour',
                        interfaceName: 'Flavour',
                        fields: [
                            {
                                type: 'checkbox',
                                name: 'showFlavour',
                                defaultValue: true,
                            },
                            {
                                type: 'row',
                                fields: [
                                    BaseFlavour({
                                        name: 'freshCreamy',
                                        label: 'Fresh - Creamy',
                                        admin: {
                                            width: '25%',
                                            condition: (data, siblingData) => siblingData?.showFlavour,
                                        },
                                    }),
                                    BaseFlavour({
                                        name: 'custardySpongy',
                                        label: 'Custardy - Spongy',
                                        admin: {
                                            width: '25%',
                                            condition: (data, siblingData) => siblingData?.showFlavour,
                                        },
                                    }),
                                    BaseFlavour({
                                        name: 'tangySweet',
                                        label: 'Tangy - Sweet',
                                        admin: {
                                            width: '25%',
                                            condition: (data, siblingData) => siblingData?.showFlavour,
                                        },
                                    }),
                                    BaseFlavour({
                                        name: 'fruityNutty',
                                        label: 'Fruity - Nutty',
                                        admin: {
                                            width: '25%',
                                            condition: (data, siblingData) => siblingData?.showFlavour,
                                        },
                                    }),
                                ],
                                admin: {
                                    condition: (data, siblingData) => siblingData?.showFlavour,
                                },
                            },
                        ],
                    },
                    {
                        type: 'array',
                        name: 'prices',
                        fields: BasePrice(),
                        required: true,
                    },
                    {
                        type: 'relationship',
                        name: 'addons',
                        label: 'Add-on(s)',
                        hasMany: true,
                        relationTo: 'addons',
                    },
                ],
            },
        ],
    }),
};
