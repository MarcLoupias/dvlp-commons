'use strict';

import { FmSummaryEnteteMeta } from './fm-summary-entete-meta';
import { FmSummaryEnteteTitre } from './fm-summary-entete-titre';

export class FmSummaryEntete {
    public rubrique: number;
    public googleAnalytics?: string;
    public licauteur: string;
    public lictype: number;
    public licannee: string;
    public serveur: string;
    public chemin: string;
    public urlhttp: string;
    public nomfaq: string;
    protected meta: FmSummaryEnteteMeta;
    protected titre: FmSummaryEnteteTitre;
    protected date: string;
    protected miseajour: string;

    public constructor({ rubrique, meta, titre, date, miseajour, googleAnalytics = '', licauteur, lictype, licannee, serveur, chemin, urlhttp, nomfaq }: any) {
        this.rubrique = rubrique;
        this.setMeta(meta);
        this.setTitre(titre);
        this.setDate(date);
        this.setMiseajour(miseajour);
        this.googleAnalytics = googleAnalytics;
        this.licauteur = licauteur;
        this.lictype = lictype;
        this.licannee = licannee;
        this.serveur = serveur;
        this.chemin = chemin;
        this.urlhttp = urlhttp;
        this.nomfaq = nomfaq;
    }

    public setMeta(meta: any): void {
        this.meta = new FmSummaryEnteteMeta(meta);
    }

    public getMeta(): FmSummaryEnteteMeta {
        return this.meta;
    }

    public setTitre(titre: any): void {
        this.titre = new FmSummaryEnteteTitre(titre);
    }

    public getTitre(): FmSummaryEnteteTitre {
        return this.titre;
    }

    public setDate(date: Date): void {
        this.date = date.toISOString().slice(0, 10);
    }

    public getDate(): string {
        return this.date;
    }

    public setMiseajour(miseajour: Date): void {
        this.miseajour = miseajour.toISOString().slice(0, 10);
    }

    public getMiseajour(): string {
        return this.miseajour;
    }
}
