import { FmSummary } from './fm-summary';
import 'mocha';
import { expect } from 'chai';

describe('Balise <document> pour le fichier SUMMARY.md des FAQ', () => {
    const validDocument = {
        edito: 'FAQ Git en français pour developpez.com',
        licence: 'CC-BY-SA-4.0',
        auteurs: [
            { name: 'marco46', fullname: 'Marc Loupias', url: 'https://www.developpez.net/forums/u70899/marco46/', role: 'auteur' },
            { name: 'littlewhite', fullname: 'Little White', url: 'https://www.developpez.net/forums/u240267/littlewhite/', role: 'correcteur' }
        ],
        editeur: { edversion: 'Version 2.45', edtypexml: '' },
        entete: {
            rubrique: 24,
            googleAnalytics: 'CodeGoogleAnalytics',
            licauteur: 'Developpez',
            lictype: 1,
            licannee: '2019',
            serveur: 'djibril-http',
            chemin: '/tutoriel/perl/interface-graphique',
            urlhttp: 'https://perl.developpez.com/tutoriel/perl/interface-graphique/',
            nomfaq: 'FAQGIT',
            meta: { description: 'description de mon article', keywords: 'motclef1, motclef2, motclef3' },
            titre: { page: 'Titre de ma page', article: 'Titre de mon article' },
            date: new Date('2018-11-19'),
            miseajour: new Date('2018-11-20')
        }
    };

    describe('<edito>', () => {
        it('devrait instancier un FmSummary avec une propriété "edito"', () => {
            const fmSummary = new FmSummary(validDocument);
            expect(fmSummary.edito).to.equal('FAQ Git en français pour developpez.com');
        });
    });

    describe('<licence>', () => {
        it('devrait instancier un FmSummary avec une propriété "licence"', () => {
            const fmSummary = new FmSummary(validDocument);
            expect(fmSummary.licence).to.equal('CC-BY-SA-4.0');
        });
    });

    describe('<auteurs>', () => {
        it('devrait instancier un FmSummary avec une propriété "auteurs"', () => {
            const fmSummary = new FmSummary(validDocument);
            expect(fmSummary.getAuteurs()).to.deep.equal([
                { name: 'marco46', fullname: 'Marc Loupias', url: 'https://www.developpez.net/forums/u70899/marco46/', role: 'auteur' },
                { name: 'littlewhite', fullname: 'Little White', url: 'https://www.developpez.net/forums/u240267/littlewhite/', role: 'correcteur' }
            ]);
        });
    });

    describe('<editeur>', () => {
        it('devrait instancier un FmSummary avec une propriété "editeur"', () => {
            const fmSummary = new FmSummary(validDocument);
            expect(fmSummary.getEditeur()).to.deep.equal({ edversion: 'Version 2.45', edtypexml: '' });
        });
    });

    describe('<entete>', () => {
        it('devrait instancier un FmSummary avec une propriété "entete"', () => {
            const fmSummary = new FmSummary(validDocument);
            expect(fmSummary.getEntete()).to.deep.equal({
                rubrique: 24,
                googleAnalytics: 'CodeGoogleAnalytics',
                licauteur: 'Developpez',
                lictype: 1,
                licannee: '2019',
                serveur: 'djibril-http',
                chemin: '/tutoriel/perl/interface-graphique',
                urlhttp: 'https://perl.developpez.com/tutoriel/perl/interface-graphique/',
                nomfaq: 'FAQGIT',
                meta: { description: 'description de mon article', keywords: 'motclef1, motclef2, motclef3' },
                titre: { page: 'Titre de ma page', article: 'Titre de mon article' },
                date: '2018-11-19',
                miseajour: '2018-11-20'
            });
        });
    });
});
