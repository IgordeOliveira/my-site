import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    code: z.string(),
    status: z.string(),
    title: z.string(),
    order: z.number(),
    tags: z.array(
      z.object({
        color: z.string(),
        label: z.string(),
      })
    ),
  }),
});

export const collections = { projects };
