import type { BaseSchema, DocsSchemaOpts, ExtendedSchema } from '@astrojs/starlight/schema'
import type { SchemaContext } from 'astro:content'
import { StarlightFrontmatterSchema } from '@astrojs/starlight/schema'
import { z } from 'astro/zod'

const LinksDocsSchema = z.object({
  links: z.object({
    doc: z.string().optional(),
    api: z.string().optional(),
  }).optional(),
})

export function docsSchema<T extends BaseSchema | never = never>(
  ...args: [DocsSchemaOpts<T>?]
): (context: SchemaContext) => ExtendedSchema<T> {
  const [options = {}] = args
  const { extend } = options

  return (context: SchemaContext) => {
    const UserSchema = typeof extend === 'function' ? extend(context) : extend

    return (
      UserSchema
        ? StarlightFrontmatterSchema(context).and(LinksDocsSchema).and(UserSchema)
        : StarlightFrontmatterSchema(context).and(LinksDocsSchema)
    ) as ExtendedSchema<T>
  }
}
