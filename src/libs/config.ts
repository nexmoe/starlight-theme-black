import { z } from 'astro/zod'

export const StarlightThemeBlackConfigSchema = z.object({
  navLinks: z.array(z.object({
    text: z.string(),
    slug: z.string(),
  })).optional(),
})

export type StarlightThemeBlackUserConfig = z.input<typeof StarlightThemeBlackConfigSchema>
export type StarlightThemeBlackConfig = z.output<typeof StarlightThemeBlackConfigSchema>
