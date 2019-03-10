import { FmQa } from './fm-qa';
import 'mocha';
import { expect } from 'chai';

describe('Balise <QA> ', () => {
    it('devrait instancier un FmQa avec toutes les valeurs ("createDate", "lastUpdateDate", "author" et "keywords")', () => {
        const fmQa = new FmQa({ createDate: new Date('2018-11-19'), lastUpdateDate: new Date('2018-11-20'), author: 'marco46', keywords: 'lnk, raccourci, fichier' });
        expect(fmQa).to.deep.equal({ createDate: '2018-11-19', lastUpdateDate: '2018-11-20', author: 'marco46', keywords: 'lnk, raccourci, fichier' });
    });
    it('devrait convertir la date donnée entrée de "createDate" en string au format AAAA-MM-JJ', () => {
        const fmQa = new FmQa({ createDate: new Date('2018-11-19'), lastUpdateDate: new Date('2018-11-20'), author: 'marco46', keywords: 'lnk, raccourci, fichier' });
        expect(fmQa.getCreateDate()).to.equal('2018-11-19');
    });
    it('devrait convertir la date donnée entrée de "lastUpdateDate" en string au format AAAA-MM-JJ', () => {
        const fmQa = new FmQa({ createDate: new Date('2018-11-19'), lastUpdateDate: new Date('2018-11-20'), author: 'marco46', keywords: 'lnk, raccourci, fichier' });
        expect(fmQa.getLastUpdateDate()).to.equal('2018-11-20');
    });
});
