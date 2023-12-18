import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
  schema: () => z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    cover: z.string()
  })
});

export const collections = {
  'blog': blogCollection
};