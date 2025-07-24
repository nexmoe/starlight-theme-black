import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import starlightThemeBlack from 'starlight-theme-mint'
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher'

// https://astro.build/config
export default defineConfig({
  site: 'https://starlight-theme-mint.vercel.app/',

  integrations: [
    devServerFileWatcher([
      '../package.json',
      '../src/**/*.ts',
      '../src/**/*.json',
    ]),
    starlight({
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Starlight Black',
      },
      editLink: {
        baseUrl: 'https://github.com/nexmoe/starlight-theme-mint/edit/main/docs/',
      },
      customCss: [
        './src/styles/global.css',
      ],
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Docs',
              link: '/getting-started',
            },
            {
              label: 'Starlight',
              link: 'https://starlight.astro.build',
              badge: 'External',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'getting-started' },
            { slug: 'customization', badge: 'New' },
          ],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/nexmoe/starlight-theme-mint' },
      ],
      title: 'starlight/black',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
