import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../packages/**/!(/lib)/*.stories.@(mdx,js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: 'storybook-addon-swc',
      options: {
        swcLoaderOptions: {
          module: {
            type: 'es6',
            noInterop: true,
          },
          jsc: {
            experimental: {
              plugins: [['@swc/plugin-styled-components', {}]],
            },
          },
        },
      },
    },
  ],
  typescript: {
    reactDocgenTypescriptOptions: {
      tsconfigPath: 'tsconfig.test.json',
    },
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['./public'],
}

export default config
