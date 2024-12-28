import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
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
      plugins: [starlightThemeBlack()],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'getting-started' },
            { slug: 'test-toc', badge: 'New' },
          ],
        },
      ],
      social: {
        github: 'https://github.com/adrian-ub/starlight-theme-black',
      },
      title: 'starlight/black',
    }),
  ],
})
