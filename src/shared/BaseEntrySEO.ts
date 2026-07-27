import { Tab } from 'payload';

import {
    MetaTitleField,
    MetaDescriptionField,
    // MetaImageField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

export const BaseEntrySEO = (): Tab => {
    return {
        label: 'SEO',
        fields: [
            {
                type: 'group',
                interfaceName: 'Meta',
                name: 'meta',
                label: '',
                fields: [
                    // MetaImageField({
                    //     // if the `generateDescription` function is configured
                    //     hasGenerateFn: true,
                    // }),
                    MetaTitleField({
                        // if the `generateTitle` function is configured
                        hasGenerateFn: true,
                    }),
                    MetaDescriptionField({
                        // if the `generateDescription` function is configured
                        hasGenerateFn: true,
                    }),
                    PreviewField({
                        // if the `generateUrl` function is configured
                        hasGenerateFn: true,

                        // field paths to match the target field for data
                        titlePath: 'meta.title',
                        descriptionPath: 'meta.description',
                    }),
                    // OverviewField({
                    //     // field paths to match the target field for data
                    //     titlePath: 'meta.title',
                    //     descriptionPath: 'meta.description',
                    //     // imagePath: 'meta.image',
                    // }),
                ],
            },
        ],
    };
};
