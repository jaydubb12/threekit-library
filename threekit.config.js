export default {
  credentials: {
    preview: {
      orgId: '143b72d5-cf11-40c0-ab05-7ae1ccc8110a',
      publicToken: '82fe9290-47b8-4450-a460-053bd8ebaae7',
    },
    'admin-fts': {
      orgId: '143b72d5-cf11-40c0-ab05-7ae1ccc8110a',
      publicToken: '82fe9290-47b8-4450-a460-053bd8ebaae7',
    },
  },

  /* products: {
    preview: {
      customId: '252816',
      configurationId: undefined,
      stageId: undefined,
    },
  */

  products: {
    preview: {
      customId: 'P90', // variantgroup_string
      initialConfiguration: {
        'Product Variant': {
          customId: 252816,
        },
        configurationId: undefined,
        stageId: undefined,
      },
    },

    'admin-fts': {
      customId: '252816',
      configurationId: undefined,
      stageId: undefined,
    },
  },
};
