import { AdminClient, Field, Condition, CheckboxField } from 'payload';

export type BaseTargetProps = {
    condition?: Condition;
} & (Pick<AdminClient, 'width' | 'style'> & Partial<Pick<CheckboxField, 'name'>>);

export const BaseTarget = ({ name = 'target', ...props }: BaseTargetProps): Field => ({
    type: 'checkbox',
    name: name,
    label: 'Open in new tab',
    admin: {
        ...props,
    },
});
