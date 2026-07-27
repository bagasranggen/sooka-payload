import { Block } from 'payload';

import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockHeading: Block = {
    slug: 'heading',
    interfaceName: 'CbHeading',
    fields: BaseContentBlocksField({
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        type: 'text',
                        name: 'title',
                    },
                    {
                        type: 'richText',
                        name: 'description',
                    },
                ],
            },
        ],
    }),
};
