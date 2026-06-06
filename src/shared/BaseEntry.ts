import { Field, Tab } from 'payload';

import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

import { BaseEntrySidebar, BaseEntrySidebarProps } from '@/shared/BaseEntrySidebar';
import { BaseEntryGeneral, BaseEntryGeneralProps } from '@/shared/BaseEntryGeneral';
import { BaseEntrySEO } from '@/shared/BaseEntrySEO';

export type BaseEntryProps = {
    tabs?: Tab[];
    url?: Omit<BaseEntryGeneralProps, 'fields'>;
    hasSeo?: boolean;
} & (Pick<BaseEntrySidebarProps, 'typeHandle'> & Pick<BaseEntryGeneralProps, 'fields'>);

export const BaseEntry = ({ typeHandle, tabs: tabsProps, url = {}, fields = [], hasSeo }: BaseEntryProps): Field[] => {
    const tabs: Tab[] = [];
    tabs.push(BaseEntryGeneral({ ...url, fields }));
    if (tabsProps && tabsProps.length > 0) tabs.push(...tabsProps);
    if (hasSeo) tabs.push(BaseEntrySEO());

    return [
        BaseEntrySidebar({ typeHandle }),
        {
            type: 'tabs',
            tabs,
        },
    ];
};
