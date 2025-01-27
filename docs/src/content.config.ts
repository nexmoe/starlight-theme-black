import { docsLoader } from '@astrojs/starlight/loaders'
import { defineCollection } from 'astro:content'
import { docsSchema } from 'starlight-theme-black/schema'

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
}
