import { FmSummaryEntete } from './fm-summary-entete';
import 'mocha';
import { expect } from 'chai';

describe('Balise <entete>', () => {
    const validEntete = {
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
    };

    describe('<rubrique>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "rubrique"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.rubrique).to.equal(24);
        });
    });
    describe('<google-analytics>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "googleAnalytics"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.googleAnalytics).to.equal('CodeGoogleAnalytics');
        });
        it('devrait pouvoir instancier un FmSummaryEntete avec une propriété "googleAnalytics" non valorisée ou absente. String vide par défaut.', () => {
            const validEnteteWithoutGa = {
                rubrique: 24,
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
            };

            const fmSummaryEntete = new FmSummaryEntete(validEnteteWithoutGa);
            expect(fmSummaryEntete.googleAnalytics).to.equal('');
        });
    });
    describe('<licauteur>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "licauteur"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.licauteur).to.equal('Developpez');
        });
    });
    describe('<lictype>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "lictype"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.lictype).to.equal(1);
        });
    });
    describe('<licannee>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "licannee"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.licannee).to.equal('2019');
        });
    });
    describe('<serveur>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "serveur"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.serveur).to.equal('djibril-http');
        });
    });
    describe('<chemin>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "chemin"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.chemin).to.equal('/tutoriel/perl/interface-graphique');
        });
    });
    describe('<urlhttp>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "urlhttp"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.urlhttp).to.equal('https://perl.developpez.com/tutoriel/perl/interface-graphique/');
        });
    });
    describe('<nomfaq>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "nomfaq"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.nomfaq).to.equal('FAQGIT');
        });
    });
    describe('<meta>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "meta"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.getMeta())
                .to.deep.equal({ description: 'description de mon article', keywords: 'motclef1, motclef2, motclef3' });
        });
    });
    describe('<titre>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "titre"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.getTitre())
                .to.deep.equal({ page: 'Titre de ma page', article: 'Titre de mon article' });
        });
    });
    describe('<date>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "rubrique"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.getDate()).to.equal('2018-11-19');
        });
    });
    describe('<miseajour>', () => {
        it('devrait instancier un FmSummaryEntete avec une propriété "rubrique"', () => {
            const fmSummaryEntete = new FmSummaryEntete(validEntete);
            expect(fmSummaryEntete.getMiseajour()).to.equal('2018-11-20');
        });
    });
});
