export default async function sitemap() {
    const baseUrl = "https://salone.lucaforcelladev.it/"; //Inserire il dominio 


    //pagine statiche principali

    const staticPages = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/servizi`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,

        },
        {
            url: `${baseUrl}/chi_sono`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,

        },
        {
            url: `${baseUrl}/Aura_Effect`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,

        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,

        },
        {
            url: `${baseUrl}/contatti`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,

        },
    ];
    return staticPages;

}