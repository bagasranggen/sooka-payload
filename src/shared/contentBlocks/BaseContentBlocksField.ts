import { Block, Tab, TabsField } from 'payload';

import { ContentBlocksSettings, ContentBlocksSettingsProps } from './ContentBlocksSettings';

export type BaseContentBlocksFieldProps = {
    settings?: ContentBlocksSettingsProps['fields'];
} & Pick<TabsField, 'tabs'>;

export const BaseContentBlocksField = (props?: BaseContentBlocksFieldProps): Block['fields'] => {
    const tabs: Tab[] = [];

    if (props?.tabs && props.tabs.length > 0) tabs.push(...props.tabs);
    tabs.push(ContentBlocksSettings({ fields: props?.settings ?? [] }));

    return [
        {
            type: 'tabs',
            tabs,
        },
    ];
};
