import { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
    slug: 'footer',
    admin: {
        group: 'Navigation',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General Info',
                    fields: [
                        {
                            type: 'textarea',
                            name: 'address',
                            required: true,
                        },
                        {
                            type: 'text',
                            name: 'businessHours',
                        },
                    ],
                },
                {
                    label: 'Social Media',
                    fields: [
                        {
                            type: 'array',
                            name: 'socialMedia',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'select',
                                            name: 'source',
                                            admin: {
                                                width: '15%',
                                            },
                                            options: [
                                                { label: 'React Icon', value: 'reactIcon' },
                                                { label: 'Custom', value: 'custom' },
                                            ],
                                        },
                                        {
                                            type: 'select',
                                            name: 'reactIcon',
                                            admin: {
                                                condition: (data, siblingData) => siblingData?.source === 'reactIcon',
                                            },
                                            options: [{ label: 'Istagram', value: 'CiInstagram' }],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
