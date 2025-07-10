import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';

export const ContentBlockGallery: Block = {
    slug: 'gallery',
    interfaceName: 'ContentBlockGallery',
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
                            relationTo: 'media',
                            hasMany: true,
                            maxRows: 6,
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
