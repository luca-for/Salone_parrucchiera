// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Contenuti del sito')
    .items([
      
      S.listItem()
      .title('Gestione Gallery')
      .id('galleryHome')
      .child(
        S.document()
        .schemaType('gallery') 
        .documentId('galleryHome')
      ),
      S.listItem()
      .title('Banner Promozionale')
      .id('settingsBanner')
      .child(
        S.document()
        .schemaType('settings') 
        .documentId('settings')   
      ),
      S.divider(), 
      ...S.documentTypeListItems().filter(
      
      (listItem) => !['gallery','settings','media.tag'].includes(listItem.getId())
),

    ])
 