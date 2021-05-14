const KalenderBali = require('../dist/kalender-bali').default;
// const saptawara = require('../dist/wewaran/saptawara');

// console.log((new saptawara.SaptaWara(100)).value);

const date = new KalenderBali('2025-04-22')

console.log(date.ekawara);