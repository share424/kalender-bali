const KalenderBali = require('../dist/kalender-bali').default;

test('wuku on 2021-05-01 should be langkir', () => {
    const date = new KalenderBali('2021-05-01')
    expect(date.wuku.name).toBe('langkir');
}) 

test('wuku on 1599-12-26 should be 18', () => {
    const date = new KalenderBali('1599-12-26')
    expect(date.wuku.value).toBe(18);
}) 

test('wuku on 1599-12-25 should be throw date out of range exception', () => {
    expect(() => new KalenderBali('1599-12-25')).toThrow('the given date is out of range');
}) 

test('eka wara on 2021-05-29 should be luang', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.ekawara.name).toBe('luang');
});

test('eka wara on 1600-04-22 should be undefined', () => {
    const date = new KalenderBali('1600-04-22')
    expect(date.ekawara.name).toBe('undefined');
});

test('dwi wara on 2021-05-29 should be pepet', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.dwiwara.name).toBe('pepet');
});

test('dwi wara on 1600-04-22 should be menga', () => {
    const date = new KalenderBali('1600-04-22')
    expect(date.dwiwara.name).toBe('menga');
});

test('tri wara on 2021-05-11 should be beteng', () => {
    const date = new KalenderBali('2021-05-11')
    expect(date.triwara.name).toBe('beteng');
});

test('tri wara on 1600-01-03 should be kajeng', () => {
    const date = new KalenderBali('1600-01-03')
    expect(date.triwara.name).toBe('kajeng');
});

test('catur wara on 1600-01-04 should be laba', () => {
    const date = new KalenderBali('1600-01-04')
    expect(date.caturwara.name).toBe('laba');
});

test('catur wara on 2025-04-20 should be jaya', () => {
    const date = new KalenderBali('2025-04-20')
    expect(date.caturwara.name).toBe('jaya');
});

test('catur wara on 2025-04-21 should be jaya', () => {
    const date = new KalenderBali('2025-04-21')
    expect(date.caturwara.name).toBe('jaya');
});

test('catur wara on 2025-04-22 should be jaya', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.caturwara.name).toBe('jaya');
});

test('catur wara on 2025-04-23 should be mandala', () => {
    const date = new KalenderBali('2025-04-23')
    expect(date.caturwara.name).toBe('mandala');
});

test('catur wara on 2021-05-29 should be sri', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.caturwara.name).toBe('sri');
});

test('panca wara on 2021-05-29 should be kliwon', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.pancawara.name).toBe('kliwon');
});

test('panca wara on 2021-05-11 should be paing', () => {
    const date = new KalenderBali('2021-05-11')
    expect(date.pancawara.name).toBe('paing');
});

test('panca wara on 1600-01-04 should be paing', () => {
    const date = new KalenderBali('1600-01-04')
    expect(date.pancawara.name).toBe('paing');
});

test('sad wara on 2021-05-29 should be was', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.sadwara.name).toBe('was');
});

test('sad wara on 2025-04-22 should be tungleh', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.sadwara.name).toBe('tungleh');
});

test('sad wara on 1600-01-04 should be paniron', () => {
    const date = new KalenderBali('1600-01-04')
    expect(date.sadwara.name).toBe('paniron');
});

test('sapta wara on 2025-04-22 should be anggara', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.saptawara.name).toBe('anggara');
});

test('sapta wara on 1600-04-22 should be saniscara', () => {
    const date = new KalenderBali('1600-04-22')
    expect(date.saptawara.name).toBe('saniscara');
});

test('sapta wara on 2021-05-14 should be sukra', () => {
    const date = new KalenderBali('2021-05-14')
    expect(date.saptawara.name).toBe('sukra');
});

test('asta wara on 1600-01-04 should be brahma', () => {
    const date = new KalenderBali('1600-01-04')
    expect(date.astawara.name).toBe('brahma');
});

test('asta wara on 2025-04-20 should be kala', () => {
    const date = new KalenderBali('2025-04-20')
    expect(date.astawara.name).toBe('kala');
});

test('asta wara on 2025-04-21 should be kala', () => {
    const date = new KalenderBali('2025-04-21')
    expect(date.astawara.name).toBe('kala');
});

test('asta wara on 2025-04-22 should be kala', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.astawara.name).toBe('kala');
});

test('asta wara on 2025-04-23 should be uma', () => {
    const date = new KalenderBali('2025-04-23')
    expect(date.astawara.name).toBe('uma');
});

test('asta wara on 2021-05-29 should be ludra', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.astawara.name).toBe('ludra');
});

test('sanga wara on 2025-04-22 should be urungan', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.sangawara.name).toBe('urungan');
});

test('sanga wara on 1600-04-22 should be ogan', () => {
    const date = new KalenderBali('1600-04-22')
    expect(date.sangawara.name).toBe('ogan');
});

test('sanga wara on 2021-05-29 should be tulus', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.sangawara.name).toBe('tulus');
});

test('dasa wara on 2025-04-22 should be raja', () => {
    const date = new KalenderBali('2025-04-22')
    expect(date.dasawara.name).toBe('raja');
});

test('dasa wara on 1600-04-22 should be sri', () => {
    const date = new KalenderBali('1600-04-22')
    expect(date.dasawara.name).toBe('sri');
});

test('dasa wara on 2021-05-29 should be raja', () => {
    const date = new KalenderBali('2021-05-29')
    expect(date.dasawara.name).toBe('raja');
});