import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';

export const ContentBlockDualPanel: Block = {
    slug: 'dualPanel',
    interfaceName: 'ContentBlockDualPanel',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'array',
                            name: 'contents',
                            label: 'Dual Panel Content',
                            maxRows: 2,
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            type: 'select',
                                            name: 'type',
                                            defaultValue: 'text',
                                            required: true,
                                            options: [
                                                { label: 'Text', value: 'text' },
                                                { label: 'Media', value: 'media' },
                                            ],
                                            admin: { width: '33.333%' },
                                        },
                                    ],
                                },
                                {
                                    type: 'group',
                                    fields: [
                                        {
                                            type: 'richText',
                                            name: 'description',
                                        },
                                    ],
                                    admin: {
                                        condition: (data, siblingData) => siblingData?.type === 'text',
                                    },
                                },
                                {
                                    type: 'group',
                                    fields: [
                                        {
                                            type: 'upload',
                                            name: 'media',
                                            relationTo: 'mediaGallery',
                                        },
                                    ],
                                    admin: {
                                        condition: (data, siblingData) => siblingData?.type === 'media',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Setting',
                    fields: [
                        {
                            type: 'select',
                            name: 'layout',
                            defaultValue: '_2_3',
                            options: [
                                { label: '2:3', value: '_2_3' },
                                { label: '3:2', value: '_3_2' },
                                { label: '1:1', value: '_1_1' },
                            ],
                            admin: { width: '33.333%' },
                        },
                        ...ContentBlockSettings,
                    ],
                },
            ],
        },
    ],
};
