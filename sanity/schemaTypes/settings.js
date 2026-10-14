import { defineField, defineType } from 'sanity'
export default {
  name: 'settings',
  title: 'Banner promozionale',
  type: 'document',
 __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    defineField({
    
      name: 'promoBanner',
      title: 'Testo Banner Promozionale',
      type: 'string',
      description: 'Scrivi qui la promozione, se cancelli tutto il banner sparisce dal sito',
      validation: Rule => Rule.max(60).warning('Testo troppo lungo'),
    }),
    // link
    defineField({
      name: 'promoLink',
      title: 'Link del Banner (Opzionale)',
      type: 'url',
      description: 'Incolla qui il link (es. https://...) per rendere cliccabile la striscia',
    }),
  ],
}