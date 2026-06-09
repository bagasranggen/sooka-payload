import { Option } from 'payload';

export const ENTRY_HANDLES = {
    // ENTRIES
    TESTIMONIAL: 'sectionTestimonial',

    // PAGES
    STATIC_PAGE: 'sectionStaticPage',
    PRODUCT: 'typeSectionProductIndex',

    // TAXONOMIES
    CATEGORY: 'sectionTaxonomiesCategory',
    TAG: 'sectionTaxonomiesTag',

    // GLOBAL
    HOMEPAGE: 'sectionHomepage',
};

export const ENTRY_TYPE_HANDLES: Record<string, Exclude<Option, string>> = {
    // ENTRIES
    [ENTRY_HANDLES.TESTIMONIAL]: {
        value: ENTRY_HANDLES.TESTIMONIAL,
        label: 'Testimonial',
    },

    // PAGES
    [ENTRY_HANDLES.STATIC_PAGE]: {
        value: ENTRY_HANDLES.STATIC_PAGE,
        label: 'Static Page Index',
    },
    [ENTRY_HANDLES.PRODUCT]: {
        value: ENTRY_HANDLES.PRODUCT,
        label: 'Product Index',
    },

    // TAXONOMIES
    [ENTRY_HANDLES.CATEGORY]: {
        value: ENTRY_HANDLES.CATEGORY,
        label: 'Category',
    },
    [ENTRY_HANDLES.TAG]: {
        value: ENTRY_HANDLES.TAG,
        label: 'Tag',
    },

    // GLOBAL
    [ENTRY_HANDLES.HOMEPAGE]: {
        value: ENTRY_HANDLES.HOMEPAGE,
        label: 'Homepage Index',
    },
} as const;
