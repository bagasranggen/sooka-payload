import { Field, TextFieldClient } from 'payload';

export const BasePrice = (props?: { additionalNote?: TextFieldClient['admin'] }): Field[] => {
    return [
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
                                width: '45%',
                            },
                        },
                        {
                            type: 'number',
                            name: 'salePrice',
                            admin: {
                                width: '45%',
                            },
                        },
                        {
                            type: 'checkbox',
                            name: 'isFree',
                            label: 'Free',
                            admin: {
                                width: '10%',
                                style: {
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: '40px',
                                    marginTop: 'auto',
                                },
                            },
                        },
                    ],
                },
                {
                    type: 'text',
                    name: 'note',
                },
                {
                    type: 'text',
                    name: 'additionalInfo',
                    admin: props?.additionalNote,
                },
            ],
        },
    ];
};
