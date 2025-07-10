import { Field, ArrayField } from 'payload';

import { BaseTarget } from '@/collections/shared/BaseTarget';

export type BaseLinkProps = Pick<ArrayField, 'name' | 'maxRows'>;

export const BaseLink = (props?: BaseLinkProps): Field => {
    return {
        type: 'group',
        name: props?.name ?? 'link',
        interfaceName: 'Link',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'select',
                        name: 'source',
                        label: false,
                        admin: {
                            placeholder: 'Select link source',
                            width: '25%',
                        },
                        options: [
                            { value: 'products', label: 'Products' },
                            { value: 'categories', label: 'Categories' },
                            { value: 'pages', label: 'Pages' },
                            { value: 'custom', label: 'Custom' },
                        ],
                    },
                    {
                        type: 'relationship',
                        name: 'product',
                        label: false,
                        relationTo: 'products',
                        required: true,
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'products',
                        },
                    },
                    {
                        type: 'relationship',
                        name: 'page',
                        label: false,
                        relationTo: 'pages',
                        required: true,
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'pages',
                        },
                    },
                    {
                        type: 'relationship',
                        name: 'category',
                        label: false,
                        relationTo: 'categories',
                        required: true,
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'categories',
                        },
                    },
                    {
                        type: 'text',
                        name: 'custom',
                        label: false,
                        required: true,
                        admin: {
                            condition: (data, siblingData) => siblingData?.source === 'custom',
                            placeholder: 'Type your custom URL (ex. https://www.sookabakedgoods.com/)',
                        },
                    },
                    BaseTarget({
                        condition: (data, siblingData) => siblingData?.source,
                        width: '15%',
                        style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
                    }),
                ],
            },
            {
                type: 'text',
                name: 'label',
                admin: {
                    condition: (data, siblingData) => siblingData?.source,
                },
            },
        ],
    };
};
