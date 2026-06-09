import { Block } from 'payload';

import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockRelatedProducts: Block = {
    slug: 'relatedProducts',
    interfaceName: 'CbRelatedProducts',
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
                        type: 'relationship',
                        name: 'products',
                        relationTo: 'products',
                        hasMany: true,
                    },
                ],
            },
        ],
    }),
};
