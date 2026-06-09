import { Block } from 'payload';

import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockMarquee: Block = {
    slug: 'marquee',
    interfaceName: 'CbMarquee',
    fields: BaseContentBlocksField({
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        type: 'upload',
                        name: 'media',
                        relationTo: 'mediaMarquees',
                        hasMany: true,
                        maxRows: 4,
                    },
                ],
            },
        ],
    }),
};
