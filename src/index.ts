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
          customCss: [...(config.customCss ?? []), 'starlight-theme-black/styles'],
        })
      },
    },
  }
}
