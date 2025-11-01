import { Block } from 'payload';
import { ContentBlockSettings } from '@/collections/blocks/ContentBlockSettings';
import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

export const ContentBlockHeading: Block = {
    slug: 'heading',
    interfaceName: 'ContentBlockHeading',
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
                            type: 'textarea',
                            name: 'description',
                        },
                    ],
                },
                {
                    label: 'Setting',
                    fields: [
                        {
                            type: 'select',
                            name: 'headingLevel',
                            defaultValue: '1',
                            options: createArrayFromNumber(5).map((item) => ({
                                value: (item + 1).toString(),
                                label: `${item + 1}`,
                            })),
                        },
                        ...ContentBlockSettings,
                    ],
                },
            ],
        },
    ],
};
