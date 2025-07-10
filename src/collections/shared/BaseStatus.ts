import { Field } from 'payload';

export type BaseStatusProps = {
    withStatus?: boolean;
    width?: string;
};

export const BaseStatus = (props?: BaseStatusProps): Field => {
    return {
        type: 'select',
        name: 'entryStatus',
        label: 'Status',
        defaultValue: 'live',
        options: [
            {
                value: 'disabled',
                label: 'Disabled',
            },
            {
                value: 'live',
                label: 'Live',
            },
        ],
        admin: {
            hidden: !props?.withStatus,
            ...(props?.width ? { width: props.width } : {}),
        },
    };
};
