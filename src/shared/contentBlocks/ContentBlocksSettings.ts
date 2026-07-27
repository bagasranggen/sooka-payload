import { Field, GroupField, Tab } from 'payload';

import { createArrayFromNumber } from '@/libs/factory';

export type ContentBlocksSettingsProps = Pick<GroupField, 'fields'>;

export const ContentBlocksSettings = (props?: ContentBlocksSettingsProps): Tab => {
    const fields: Field[] = [];

    if (props?.fields && props.fields.length > 0) {
        fields.push(...props.fields);
    }

    fields.push({
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
                        admin: { width: '50%' },
                    },
                    {
                        type: 'select',
                        name: 'marginBottom',
                        options: createArrayFromNumber(10).map((item) => ({
                            value: `${item + 1}`,
                            label: `${item + 1}`,
                        })),
                        admin: { width: '50%' },
                    },
                ],
            },
        ],
    });

    return {
        label: 'Settings',
        fields,
    };
};
