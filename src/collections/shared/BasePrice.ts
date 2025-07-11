import { Field } from 'payload';

export const BasePrice: Field[] = [
    {
        type: 'group',
        name: 'price',
        interfaceName: 'Price',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'number',
                        name: 'normalPrice',
                        label: 'Price',
                        required: true,
                        admin: {
                            width: '50%',
                        },
                    },
                    {
                        type: 'number',
                        name: 'salePrice',
                        admin: {
                            width: '50%',
                        },
                    },
                ],
            },
            {
                type: 'text',
                name: 'note',
            },
        ],
    },
];
