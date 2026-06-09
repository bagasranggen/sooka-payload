import { Field, SelectField } from 'payload';

import { createArrayFromNumber } from '@/libs/factory';

export type BaseFlavourProps = Pick<SelectField, 'name' | 'label' | 'admin' | 'required'>;

export const BaseFlavour = ({ name, label, admin, required }: BaseFlavourProps): Field => {
    return {
        type: 'select',
        name,
        label,
        required,
        options: createArrayFromNumber(11).map((_, i) => {
            const value = i * 10;

            return { label: value.toString(), value: `_${value}` };
        }),
        admin,
    };
};
