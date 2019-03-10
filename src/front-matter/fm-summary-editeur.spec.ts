import { FmSummaryEditeur } from './fm-summary-editeur';
import 'mocha';
import { expect } from 'chai';

describe('Balise <editeur>', () => {
    describe('<edversion>', () => {
        it('devrait instancier un FmSummaryEditeur avec une propriété "edversion"', () => {
            const fmSummaryEditeur = new FmSummaryEditeur({ edversion: 'Version 2.45', edtypexml: '' });
            expect(fmSummaryEditeur.edversion).to.equal('Version 2.45');
        });
    });
    describe('<edtypexml>', () => {
        it('devrait instancier un FmSummaryEditeur avec une propriété "edtypexml"', () => {
            const fmSummaryEditeur = new FmSummaryEditeur({ edversion: '', edtypexml: '0' });
            expect(fmSummaryEditeur.edtypexml).to.equal('0');
        });
    });
});
