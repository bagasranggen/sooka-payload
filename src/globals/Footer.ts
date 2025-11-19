import { GlobalConfig } from 'payload';
import { BaseLink } from '@/collections/shared';

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
                            interfaceName: 'SocialMedia',
                            fields: [
                                {
                                    type: 'group',
                                    name: 'icon',
                                    interfaceName: 'Icon',
                                    fields: [
                                        {
                                            type: 'row',
                                            fields: [
                                                {
                                                    type: 'select',
                                                    name: 'source',
                                                    label: false,
                                                    admin: {
                                                        width: '15%',
                                                        placeholder: 'Select icon source',
                                                    },
                                                    options: [
                                                        { label: 'React Icon', value: 'reactIcon' },
                                                        // { label: 'Custom', value: 'custom' },
                                                    ],
                                                },
                                                {
                                                    type: 'select',
                                                    name: 'reactIcon',
                                                    label: false,
                                                    admin: {
                                                        width: '35%',
                                                        condition: (data, siblingData) =>
                                                            siblingData?.source === 'reactIcon',
                                                    },
                                                    options: [
                                                        { label: 'Instagram', value: 'CiInstagram' },
                                                        { label: 'Mail', value: 'CiMail' },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                BaseLink(),
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
