import { Block } from 'payload';

import { BaseLink } from '@/shared/BaseLink';
import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockDualPanel: Block = {
    slug: 'dualPanel',
    interfaceName: 'CbDualPanel',
    fields: BaseContentBlocksField({
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
                                        relationTo: 'mediaDualPanels',
                                    },
                                ],
                                admin: {
                                    condition: (data, siblingData) => siblingData?.type === 'media',
                                },
                            },
                        ],
                    },
                    BaseLink(),
                ],
            },
        ],
    }),
};
