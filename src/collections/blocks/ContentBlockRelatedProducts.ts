import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';

export const ContentBlockRelatedProducts: Block = {
    slug: 'relatedProducts',
    interfaceName: 'ContentBlockRelatedProducts',
    fields: [
        {
            type: 'tabs',
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
                {
                    label: 'Setting',
                    fields: [...ContentBlockSettings],
                },
            ],
        },
    ],
};
