import { z } from 'astro/zod'

export const StarlightThemeBlackConfigSchema = z.object({
  navLinks: z.array(z.object({
    text: z.string(),
    slug: z.string(),
  })).optional(),
  footerText: z.string().optional().default('Built & designed by [shadcn](https://twitter.com/shadcn). Ported to Astro Starlight by [Adrián UB](https://github.com/adrian-ub). The source code is available on [GitHub](https://github.com/adrian-ub/starlight-theme-black).'),
})

export type StarlightThemeBlackUserConfig = z.input<typeof StarlightThemeBlackConfigSchema>
export type StarlightThemeBlackConfig = z.output<typeof StarlightThemeBlackConfigSchema>
