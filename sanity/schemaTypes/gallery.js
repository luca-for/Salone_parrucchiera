import { defineField, defineType } from 'sanity'

export default defineType({

    name: 'gallery',
    title: 'Galleria  (griglia 3x3)',
    type: 'document',
    __experimental_actions: ['create', 'update', 'publish'],
    fields:[
        defineField({
            name:'title',
            title: 'Titolo (opzionale)',
            type: 'string',
            initialValue:'I nostri Lavori',
        }),
        defineField({
            name: 'images',
            title: 'Immagini (max 9)',
            description:'Carica 9 foto per la griglia',
            type: 'array',
            of: [{type: 'image', option:{hotspot: true,}}],
            validation: Rule => Rule.max(9).error("Puoi caricare massimo 9 foto rimuovine una per caricarne una nuova")
        }),
    ],
})