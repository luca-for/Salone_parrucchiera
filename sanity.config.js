'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { media } from 'sanity-plugin-media'

export default defineConfig({
  basePath: '/studio',
  title: 'Management',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: { //Tolto il "+" per aggiungere un documento su sanity 
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return [];
      }
      return prev;
    },
  },

  plugins: [
    structureTool({ structure }),
    media(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    //visionTool({defaultApiVersion: apiVersion}),
  ],
})
