import { Field } from 'payload';
import { createArrayFromNumber } from '@/libs/factory/createArrayFromNumber';

export const ContentBlockSettings: Field[] = [
    {
        type: 'group',
        label: 'Spacing',
        name: 'cbSpacing',
        interfaceName: 'CbSpacing',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'select',
                        name: 'marginTop',
                        options: createArrayFromNumber(10).map((item) => ({
                            value: `${item + 1}`,
                            label: `${item + 1}`,
                        })),
                    },
                    {
                        type: 'select',
                        name: 'marginBottom',
                        options: createArrayFromNumber(10).map((item) => ({
                            value: `${item + 1}`,
                            label: `${item + 1}`,
                        })),
                    },
                ],
            },
        ],
    },
];
