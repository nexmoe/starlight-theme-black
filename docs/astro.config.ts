import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
  site: 'https://starlight-theme-black.vercel.app/',

  integrations: [
    starlight({
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Starlight Black',
      },
      editLink: {
        baseUrl: 'https://github.com/adrian-ub/starlight-theme-black/edit/main/docs/',
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
        { icon: 'github', label: 'GitHub', href: 'https://github.com/adrian-ub/starlight-theme-black' },
      ],
      title: 'starlight/black',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
