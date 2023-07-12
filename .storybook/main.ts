import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../packages/*/src/**/*.stories.@(mdx,js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  typescript: {
    reactDocgenTypescriptOptions: {
      tsconfigPath: 'tsconfig.test.json',
    },
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: 'tsconfig.test.json',
        }),
      ]
    }

    return config
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['./public'],
}
export default config
