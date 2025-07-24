import type { StarlightPlugin } from '@astrojs/starlight/types'

import { createInlineSvgUrl } from '@astrojs/starlight/expressive-code'

import { StarlightThemeBlackConfigSchema, type StarlightThemeBlackUserConfig } from './libs/config'
import { overrideComponents } from './libs/starlight'
import { vitePluginStarlightThemeBlack } from './libs/vite'
import translations from './translations'

export default function starlightThemeBlack(userConfig: StarlightThemeBlackUserConfig): StarlightPlugin {
  const parsedConfig = StarlightThemeBlackConfigSchema.safeParse(userConfig)

  if (!parsedConfig.success) {
    throw new Error(`The provided plugin configuration is invalid.\n${parsedConfig.error.issues.map(issue => issue.message).join('\n')}`)
  }

  const config = parsedConfig.data

  return {
    name: 'starlight-theme-black-plugin',
    hooks: {
      'config:setup': function ({ config: starlightConfig, logger, updateConfig, addIntegration }) {
        const userExpressiveCodeConfig
          = starlightConfig.expressiveCode === false || starlightConfig.expressiveCode === true ? {} : starlightConfig.expressiveCode

        updateConfig({
          components: overrideComponents(
            starlightConfig,
            [
              'ThemeSelect',
              'PageFrame',
              'Header',
              'SiteTitle',
              'Sidebar',
              'TwoColumnContent',
              'ContentPanel',
              'PageTitle',
              'MarkdownContent',
              'Hero',
              'Footer',
              'SocialIcons',
              'Pagination',
              'Search',
              'TableOfContents',
              'PageSidebar',
            ],
            logger,
          ),
          customCss: [
            ...(starlightConfig.customCss ?? []),
            'starlight-theme-mint/styles/layers',
            'starlight-theme-mint/styles/theme',
            'starlight-theme-mint/styles/base',
          ],
          expressiveCode:
            starlightConfig.expressiveCode === false
              ? false
              : {
                  themes: ['github-dark-default', 'github-light-default'],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    codeBackground: 'var(--code-background)',
                    borderWidth: '0px',
                    borderRadius: 'calc(var(--radius) + 4px)',
                    gutterBorderWidth: '0px',
                    ...userExpressiveCodeConfig?.styleOverrides,
                    frames: {
                      editorBackground: 'var(--code-background)',
                      terminalBackground: 'var(--code-background)',
                      copyIcon: createInlineSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>`),
                      ...userExpressiveCodeConfig?.styleOverrides?.frames,
                    },
                    textMarkers: {
                      markBackground: 'var(--mark-background)',
                      markBorderColor: 'var(--border)',
                      ...userExpressiveCodeConfig?.styleOverrides?.textMarkers,
                    },
                  },
                },
        })

        addIntegration({
          name: 'starlight-theme-black-integration',
          hooks: {
            'astro:config:setup': ({ updateConfig }) => {
              updateConfig({ vite: { plugins: [vitePluginStarlightThemeBlack(config)] } })
            },
          },
        })
      },
      'i18n:setup': function ({ injectTranslations }) {
        injectTranslations(translations)
      },
    },
  }
}
