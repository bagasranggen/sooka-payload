import { Tab } from 'payload';
import { BaseTitle } from '@/collections/shared/BaseTitle';
import { BaseUrl, BaseUrlProps } from '@/collections/shared/BaseUrl';
import { BaseStatus, BaseStatusProps } from '@/collections/shared/BaseStatus';

export type BasePageTabProps = {
    typeHandle: string;
} & (Pick<BaseUrlProps, 'updateUrl' | 'withUrl'> & Pick<BaseStatusProps, 'withStatus'>);

export const BasePageTab = (props?: BasePageTabProps): Tab => {
    return {
        label: 'Page',
        fields: [
            {
                type: 'row',
                fields: [
                    {
                        type: 'text',
                        name: 'typeHandle',
                        label: 'Type',
                        defaultValue: props?.typeHandle ?? '',
                        hooks: {
                            beforeChange: [() => props?.typeHandle ?? ''],
                        },
                        admin: {
                            width: props?.withStatus ? '90%' : '100%',
                            readOnly: true,
                        },
                    },
                    BaseStatus({
                        withStatus: props?.withStatus,
                        width: '10%',
                    }),
                ],
            },
            {
                type: 'row',
                fields: [...BaseTitle],
            },
            BaseUrl({
                withUrl: props?.withUrl,
                updateUrl: async (p) => {
                    if (props?.updateUrl) await props.updateUrl(p);
                },
            }),
        ],
    };
};
