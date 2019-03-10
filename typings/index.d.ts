// Type definitions for dvlp-commons 0.1.0
// Project: https://github.com/MarcLoupias/dvlp-commons
// Definitions by: Marc Loupias <https://github.com/MarcLoupias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class FmQa {
    constructor({ createDate, lastUpdateDate, author, keywords }: any);
    author: string;
    keywords: string;
    setCreateDate(createDate: Date): void;
    getCreateDate(): string;
    setLastUpdateDate(lastUpdateDate: Date): void;
    getLastUpdateDate(): string;
}

declare class FmSummaryEnteteTitre {
    constructor({ page, article }: any);
    page: string;
    article: string;
}

declare class FmSummaryEnteteMeta {
    constructor({ description, keywords }: any);
    description: string;
    keywords: string;
}

declare class FmSummaryEntete {
    constructor({ rubrique, meta, titre, date, miseajour, googleAnalytics, licauteur, lictype, licannee, serveur, chemin, urlhttp, nomfaq }: any);
    rubrique: number;
    googleAnalytics?: string;
    licauteur: string;
    lictype: number;
    licannee: string;
    serveur: string;
    chemin: string;
    urlhttp: string;
    nomfaq: string;
    setMeta(meta: any): void;
    getMeta(): FmSummaryEnteteMeta;
    setTitre(titre: any): void;
    getTitre(): FmSummaryEnteteTitre;
    setDate(date: Date): void;
    getDate(): string;
    setMiseajour(miseajour: Date): void;
    getMiseajour(): string;
}

declare class FmSummaryEditeur {
    constructor({ edversion, edtypexml }: any);
    edversion: string;
    edtypexml: number;
}

declare class FmSummaryAuteur {
    constructor({ name, fullname, url, role }: any);
    name: string;
    fullname: string;
    url: string;
    role: string;
}

declare class FmSummary {
    constructor({ auteurs, editeur, entete, edito, licence }: any);
    edito: string;
    licence: string;
    setAuteurs(auteurs: any): void;
    getAuteurs(): FmSummaryAuteur[];
    setEditeur(editeur: any): void;
    getEditeur(): FmSummaryEditeur;
    setEntete(entete: any): void;
    getEntete(): FmSummaryEntete;
}
