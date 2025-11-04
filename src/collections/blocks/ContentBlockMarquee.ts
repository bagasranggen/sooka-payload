import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';

export const ContentBlockMarquee: Block = {
    slug: 'marquee',
    interfaceName: 'ContentBlockMarquee',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'upload',
                            name: 'media',
                            relationTo: 'mediaMarquee',
                            hasMany: true,
                            maxRows: 4,
                        },
                    ],
                },
                {
                    label: 'Setting',
                    fields: [...ContentBlockSettings],
                },
            ],
        },
    ],
};
