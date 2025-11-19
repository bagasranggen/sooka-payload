import { Field, BlocksField } from 'payload';
import {
    ContentBlockCallout,
    ContentBlockDualPanel,
    ContentBlockGallery,
    ContentBlockHeading,
    ContentBlockMarquee,
    ContentBlockRelatedProducts,
} from '@/collections/blocks';

export const BaseContentBlocks = (props?: Pick<BlocksField, 'name'>): Field => ({
    type: 'blocks',
    name: props?.name ?? 'contentBlocks',
    blocks: [
        ContentBlockCallout,
        ContentBlockDualPanel,
        ContentBlockGallery,
        ContentBlockHeading,
        ContentBlockMarquee,
        ContentBlockRelatedProducts,
    ],
});
