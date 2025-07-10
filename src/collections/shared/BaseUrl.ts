import { Field, FieldHook, FieldHookArgs, TypeWithID } from 'payload';

import { ArrayStringTypes } from '@/libs/types';
// import { joinArrayString } from '@/libs/utils';
import { joinArrayString } from '../../libs/utils/joinArrayString';

export type BaseUrlProps = {
    withUrl?: boolean;
    beforeChange?: FieldHook;
    updateUrl?: (props: { url: string[] } & FieldHookArgs<TypeWithID, any, any>) => void;
};

export const BaseUrl = (props?: BaseUrlProps): Field => {
    return {
        type: 'row',
        admin: {
            hidden: !props?.withUrl,
        },
        fields: [
            {
                type: 'text',
                name: 'url',
                label: 'URL',
                admin: {
                    width: '50%',
                    readOnly: true,
                },
                hooks: {
                    beforeChange: [
                        async (p) => {
                            let url: ArrayStringTypes = [];
                            if (process.env.BASE_URI) url.push(process.env.BASE_URI);
                            if (props?.updateUrl) await props.updateUrl({ url, ...p });
                            url = joinArrayString(url, '/');

                            return url;
                        },
                    ],
                },
            },
            {
                type: 'text',
                name: 'uri',
                label: 'URI',
                admin: {
                    width: '50%',
                    readOnly: true,
                },
                hooks: {
                    beforeChange: [
                        async (p) => {
                            let uri: ArrayStringTypes = [];
                            if (props?.updateUrl) await props.updateUrl({ url: uri, ...p });
                            uri = joinArrayString(uri, '/');

                            return uri;
                        },
                    ],
                },
            },
        ],
    };
};
