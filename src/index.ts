import type { StarlightPlugin } from '@astrojs/starlight/types'

import { overrideComponents } from './libs/starlight'

export default function starlightThemeBlack(): StarlightPlugin {
  return {
    name: 'starlight-theme-black-plugin',
    hooks: {
      setup({ config, logger, updateConfig }) {
        updateConfig({
          components: overrideComponents(
            config,
            [
              'ThemeSelect',
            ],
            logger,
          ),
          customCss: [
            ...(config.customCss ?? []),
            '@fontsource/geist-mono/100.css',
            '@fontsource/geist-mono/200.css',
            '@fontsource/geist-mono/300.css',
            '@fontsource/geist-mono/400.css',
            '@fontsource/geist-mono/500.css',
            '@fontsource/geist-mono/600.css',
            '@fontsource/geist-mono/700.css',
            '@fontsource/geist-mono/800.css',
            '@fontsource/geist-mono/900.css',
            '@fontsource/geist-sans/100.css',
            '@fontsource/geist-sans/200.css',
            '@fontsource/geist-sans/300.css',
            '@fontsource/geist-sans/400.css',
            '@fontsource/geist-sans/500.css',
            '@fontsource/geist-sans/600.css',
            '@fontsource/geist-sans/700.css',
            '@fontsource/geist-sans/800.css',
            '@fontsource/geist-sans/900.css',
            'starlight-theme-black/styles',
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ['github-dark-default', 'github-light-default'],
                  ...(typeof config.expressiveCode === 'object' ? config.expressiveCode : {}),
                },
        })
      },
    },
  }
}
