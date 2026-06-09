import { BlocksField, Field } from 'payload';

import { ContentBlockCallout } from '@/shared/contentBlocks/ContentBlockCallout';
import { ContentBlockDualPanel } from '@/shared/contentBlocks/ContentBlockDualPanel';
import { ContentBlockGallery } from '@/shared/contentBlocks/ContentBlockGallery';
import { ContentBlockHeading } from '@/shared/contentBlocks/ContentBlockHeading';
import { ContentBlockMarquee } from '@/shared/contentBlocks/ContentBlockMarquee';
import { ContentBlockRelatedProducts } from '@/shared/contentBlocks/ContentBlockRelatedProducts';

export type ContentBlocksProps = Pick<BlocksField, 'name'>;

export const ContentBlocks = (props?: ContentBlocksProps): Field => {
    return {
        type: 'group',
        label: '',
        name: props?.name ?? 'contentBlocks',
        interfaceName: 'ContentBlocks',
        fields: [
            {
                type: 'blocks',
                name: 'blocks',
                blocks: [
                    ContentBlockCallout,
                    ContentBlockDualPanel,
                    ContentBlockGallery,
                    ContentBlockHeading,
                    ContentBlockMarquee,
                    ContentBlockRelatedProducts,
                ],
            },
        ],
    };
};
