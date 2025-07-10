import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';
import { BaseLink } from '@/collections/shared/BaseLink';

export const ContentBlockCallout: Block = {
    slug: 'callout',
    interfaceName: 'ContentBlockCallout',
    fields: [
        {
            type: 'tabs',
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
                {
                    label: 'Setting',
                    fields: [...ContentBlockSettings],
                },
            ],
        },
    ],
};
