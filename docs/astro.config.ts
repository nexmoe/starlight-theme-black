import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/adrian-ub/starlight-theme-black/edit/main/docs/',
      },
      plugins: [starlightThemeBlack()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/adrian-ub/starlight-theme-black',
      },
      title: 'Starlight Black',
    }),
  ],
})
