import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'category',
      collapsed: false,
      label: 'Tutorials',
      items: [
        'tutorials/tutorial-defi-tracker', 
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Recipes',
      items: [
        'recipes/get-balance',
        'recipes/get-transactions', 
        'recipes/get-token-balances', 
      ],
    },
  ],
};

export default sidebars;
