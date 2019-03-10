import { FmSummaryAuteur } from './fm-summary-auteur';
import 'mocha';
import { expect } from 'chai';

describe('Balise <authorDescription>', () => {
    describe('<authorDescription name="">', () => {
        it('devrait instancier un FmSummaryAuteur avec une propriété "name"', () => {
            const fmSummaryEditeur = new FmSummaryAuteur({ name: 'marco46', fullname: '', url: '', role: '' });
            expect(fmSummaryEditeur.name).to.equal('marco46');
        });
    });
    describe('<authorDescription role="">', () => {
        it('devrait instancier un FmSummaryAuteur avec une propriété "role"', () => {
            const fmSummaryEditeur = new FmSummaryAuteur({ name: '', fullname: '', url: '', role: 'auteur' });
            expect(fmSummaryEditeur.role).to.equal('auteur');
        });
    });
    describe('<fullname>', () => {
        it('devrait instancier un FmSummaryAuteur avec une propriété "fullname"', () => {
            const fmSummaryEditeur = new FmSummaryAuteur({ name: '', fullname: 'Marc Loupias', url: '', role: '' });
            expect(fmSummaryEditeur.fullname).to.equal('Marc Loupias');
        });
    });
    describe('<url>', () => {
        it('devrait instancier un FmSummaryAuteur avec une propriété "url"', () => {
            const fmSummaryEditeur = new FmSummaryAuteur({ name: '', fullname: '', url: 'https://www.developpez.net/forums/u70899/marco46/', role: '' });
            expect(fmSummaryEditeur.url).to.equal('https://www.developpez.net/forums/u70899/marco46/');
        });
    });
});
