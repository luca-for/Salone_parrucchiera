export default{
    name:'listino',
    title: 'Listino prezzi',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Titolo Categoria',
            type:'string',
        },
        {
            name:'order',
            title:'Numero Ordine (1 = Sinistra, 2 = Destra, ecc.)',
            type:'number',
        },
        {
            name:'services',
            title:'Elenco Servizi',
            type:'array',
            of:[
                {
                    type:'object',
                    fields:[
                        {
                            name:'name', type: 'string', title: 'Nome Servizio',
                        },
                        {
                            name:'price', type: 'string', title: 'Prezzo (es 20€)',
                        },
                        {name:'description', type: 'text', title: 'Descrizione Servizio', Rows: 2, description:'Inserisci una descrizione del prodotto in caso di necessità'
                            
                        },
                    ]
                        

                }
            ]
        }
    ]
}