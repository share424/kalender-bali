const kalenderbali = require('../dist');

test('wuku on 2021-05-01 should be langkir', () => {
    const date = new kalenderbali.KalenderBali('2021-05-01')
    expect(date.getWuku(true)).toBe('langkir');
}) 

test('wuku on 1599-12-26 should be 18', () => {
    const date = new kalenderbali.KalenderBali('1599-12-26')
    expect(date.getWuku()).toBe(18);
}) 

test('wuku on 1599-12-25 should be null', () => {
    const date = new kalenderbali.KalenderBali('1599-12-25')
    expect(date.getWuku()).toBe(null);
}) 

test("wuku on 2021-05-01 until 2021-05-31 should be [ 'langkir', 'medangsia', 'pujut', 'pahang', 'kerulut', 'merakih' ]", () => {
    const date = new kalenderbali.KalenderBali('2021-05-01')
    expect(date.getWukuUntil(new Date(Date.parse('2021-05-31')), true)).toStrictEqual([ 'langkir', 'medangsia', 'pujut', 'pahang', 'kerulut', 'merakih' ]);
}) 

test('tri wara on 2021-05-11 should be beteng', () => {
    const date = new kalenderbali.KalenderBali('2021-05-11')
    expect(date.getTriWara(true)).toBe('beteng');
});

test('tri wara on 1600-01-03 should be kajeng', () => {
    const date = new kalenderbali.KalenderBali('1600-01-03')
    expect(date.getTriWara(true)).toBe('kajeng');
});

test('catur wara on 1600-01-04 should be laba', () => {
    const date = new kalenderbali.KalenderBali('1600-01-04')
    expect(date.getCaturWara(true)).toBe('laba');
});

test('catur wara on 2025-04-20 should be jaya', () => {
    const date = new kalenderbali.KalenderBali('2025-04-20')
    expect(date.getCaturWara(true)).toBe('jaya');
});

test('catur wara on 2025-04-21 should be jaya', () => {
    const date = new kalenderbali.KalenderBali('2025-04-21')
    expect(date.getCaturWara(true)).toBe('jaya');
});

test('catur wara on 2025-04-22 should be jaya', () => {
    const date = new kalenderbali.KalenderBali('2025-04-22')
    expect(date.getCaturWara(true)).toBe('jaya');
});

test('catur wara on 2025-04-23 should be jaya', () => {
    const date = new kalenderbali.KalenderBali('2025-04-23')
    expect(date.getCaturWara(true)).toBe('mandala');
});

test('catur wara on 2021-05-29 should be sri', () => {
    const date = new kalenderbali.KalenderBali('2021-05-29')
    expect(date.getCaturWara(true)).toBe('sri');
});

test('panca wara on 2021-05-29 should be keliwon', () => {
    const date = new kalenderbali.KalenderBali('2021-05-29')
    expect(date.getPancaWara(true)).toBe('keliwon');
});

test('panca wara on 2021-05-11 should be pahing', () => {
    const date = new kalenderbali.KalenderBali('2021-05-11')
    expect(date.getPancaWara(true)).toBe('pahing');
});

test('panca wara on 1600-01-04 should be pahing', () => {
    const date = new kalenderbali.KalenderBali('1600-01-04')
    expect(date.getPancaWara(true)).toBe('pahing');
});

test('sad wara on 2021-05-29 should be was', () => {
    const date = new kalenderbali.KalenderBali('2021-05-29')
    expect(date.getSadWara(true)).toBe('was');
});

test('sad wara on 2025-04-22 should be tungleh', () => {
    const date = new kalenderbali.KalenderBali('2025-04-22')
    expect(date.getSadWara(true)).toBe('tungleh');
});

test('sad wara on 1600-01-04 should be paniron', () => {
    const date = new kalenderbali.KalenderBali('1600-01-04')
    expect(date.getSadWara(true)).toBe('paniron');
});