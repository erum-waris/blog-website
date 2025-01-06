import { defineField, defineType } from "sanity";

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title', // Matches the 'heading' field
        maxLength: 70,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required().min(10).max(2000), // Adjusted to use appropriate validation
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
