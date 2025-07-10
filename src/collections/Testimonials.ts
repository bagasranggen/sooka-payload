import { CollectionConfig } from 'payload';
import { BasePageTab } from '@/collections/shared';

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'title',
        group: 'Entries',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                BasePageTab({
                    typeHandle: 'typeSectionTestimonialsEntry',
                    withStatus: true,
                }),
                {
                    label: 'Content',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    type: 'text',
                                    name: 'author',
                                    required: true,
                                    admin: { width: '50%' },
                                },
                            ],
                        },
                        {
                            type: 'richText',
                            name: 'testimonial',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};
