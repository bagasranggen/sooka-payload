import { CollectionConfig } from 'payload';

import { ENTRY_HANDLES, ENTRY_TYPE_HANDLES } from '@/libs/constants';

import { BaseEntry, ContentBlocks } from '@/shared';
import { revalidatePage } from '@/libs/utils';

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        group: 'Pages',
        useAsTitle: 'title',
        groupBy: true,
    },
    hooks: {
        afterChange: [
            async ({ doc }) => {
                await revalidatePage({ path: '/', layout: 'layout' });
                await revalidatePage({ path: `/${doc.uri}` });
            },
        ],
    },
    fields: BaseEntry({
        hasSeo: true,
        typeHandle: [ENTRY_TYPE_HANDLES[ENTRY_HANDLES.STATIC_PAGE]],
        tabs: [
            {
                label: 'Content',
                fields: [ContentBlocks()],
                admin: {
                    condition: (data, siblingData) => {
                        return siblingData?.typeHandle === ENTRY_HANDLES.STATIC_PAGE;
                    },
                },
            },
        ],
    }),
};
