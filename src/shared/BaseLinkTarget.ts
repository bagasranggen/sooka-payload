import { AdminClient, Field, Condition, CheckboxField } from 'payload';

export type BaseLinkTargetProps = {
    condition?: Condition;
} & (Pick<AdminClient, 'width' | 'style'> & Partial<Pick<CheckboxField, 'name'>>);

export const BaseLinkTarget = ({ name = 'target', ...props }: BaseLinkTargetProps): Field => ({
    type: 'checkbox',
    name: name,
    label: 'Open in new tab',
    admin: {
        ...props,
    },
});
