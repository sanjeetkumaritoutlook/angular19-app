import { fluid } from '@lmig/fluid-core';

export const environment = {
  production: true,
  fluid: {
    ...fluid.environments.prod,
    docs: 'https://fluid-components.lmig.com/fluid/assets/api-docs/api-docs.json',
    tests:
      'https://fluid-components.lmig.com/fluid/assets/api-docs/test-results.json',
  },
};
