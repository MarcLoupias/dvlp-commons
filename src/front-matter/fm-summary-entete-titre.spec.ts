import { FmSummaryEnteteTitre } from './fm-summary-entete-titre';
import 'mocha';
import { expect } from 'chai';

describe('Balise <titre>', () => {
    describe('<page>', () => {
        it('devrait instancier un FmSummaryEnteteTitre avec une propriété "page"', () => {
            const fmSummaryEnteteTitre = new FmSummaryEnteteTitre({ page: 'Titre de ma page', article: '' });
            expect(fmSummaryEnteteTitre.page).to.equal('Titre de ma page');
        });
    });
    describe('<article>', () => {
        it('devrait instancier un FmSummaryEnteteTitre avec une propriété "article"', () => {
            const fmSummaryEnteteTitre = new FmSummaryEnteteTitre({ page: '', article: 'Titre de mon article' });
            expect(fmSummaryEnteteTitre.article).to.equal('Titre de mon article');
        });
    });
});
