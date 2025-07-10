import { Field } from 'payload';

export const BasePrice: Field[] = [
    {
        type: 'row',
        fields: [
            {
                type: 'number',
                name: 'price',
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
];
