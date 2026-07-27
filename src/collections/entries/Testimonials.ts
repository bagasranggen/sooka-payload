import { CollectionConfig } from 'payload';
import { BaseEntry } from '@/shared';

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        group: 'Entries',
        useAsTitle: 'title',
    },
    fields: BaseEntry({
        typeHandle: [],
        tabs: [
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
    }),
};
