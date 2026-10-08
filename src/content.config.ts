import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const units = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/units" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        unit_order: z.number(),
        unit_level: z.string(),
        estimated_time: z.string(),
        //pubDate: z.coerce.date(),
    }),
});

export const collections = { units }; 
