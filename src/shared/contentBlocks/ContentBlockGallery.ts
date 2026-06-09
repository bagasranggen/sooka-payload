import { Block } from 'payload';

import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockGallery: Block = {
    slug: 'gallery',
    interfaceName: 'ContentBlockGallery',
    fields: BaseContentBlocksField({
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        type: 'upload',
                        name: 'media',
                        relationTo: 'mediaGalleries',
                        hasMany: true,
                        maxRows: 9,
                    },
                ],
            },
        ],
    }),
};
