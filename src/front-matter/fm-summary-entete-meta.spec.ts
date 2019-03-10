import { FmSummaryEnteteMeta } from './fm-summary-entete-meta';
import 'mocha';
import { expect } from 'chai';

describe('Balise <meta>', () => {
    describe('<description>', () => {
        it('devrait instancier un FmSummaryEnteteMeta avec une propriété "description"', () => {
            const fmSummaryEnteteMeta = new FmSummaryEnteteMeta({ description: 'description de mon article', keywords: '' });
            expect(fmSummaryEnteteMeta.description).to.equal('description de mon article');
        });
    });
    describe('<keywords>', () => {
        it('devrait instancier un FmSummaryEnteteMeta avec une propriété "keywords"', () => {
            const fmSummaryEnteteMeta = new FmSummaryEnteteMeta({ description: '', keywords: 'motclef1, motclef2, motclef3' });
            expect(fmSummaryEnteteMeta.keywords).to.equal('motclef1, motclef2, motclef3');
        });
    });
});
