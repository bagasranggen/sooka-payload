import { Block } from 'payload';

import { BaseLink } from '@/shared/BaseLink';
import { BaseContentBlocksField } from '@/shared/contentBlocks/BaseContentBlocksField';

export const ContentBlockCallout: Block = {
    slug: 'callout',
    interfaceName: 'CbCallout',
    fields: BaseContentBlocksField({
        tabs: [
            {
                label: 'Content',
                fields: [
                    {
                        type: 'textarea',
                        name: 'title',
                    },
                    BaseLink(),
                ],
            },
        ],
    }),
};
