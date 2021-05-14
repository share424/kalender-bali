import { AstaWara, CaturWara, DasaWara, DwiWara, EkaWara, PancaWara, SadWara, SangaWara, SaptaWara, TriWara } from "./wewaran";
import Wuku from "./wuku";

export default class KalenderBali {

    private date: Date = new Date();
    public wuku: Wuku
    public pawukon: number;
    private dayOfWeeks: number;

    public ekawara: EkaWara;
    public dwiwara: DwiWara;
    public triwara: TriWara;
    public caturwara: CaturWara;
    public pancawara: PancaWara;
    public sadwara: SadWara;
    public saptawara: SaptaWara;
    public astawara: AstaWara;
    public sangawara: SangaWara;
    public dasawara: DasaWara;

    constructor(date: string|Date|undefined) {
        if(typeof date == 'string') {
            this.date = new Date(Date.parse(date));
        } else if(date instanceof Date) {
            this.date = date;
        }

        // calculate wuku
        this.wuku = new Wuku(this.date);

        // calculate day of weeks
        this.dayOfWeeks = this.date.getDay();

        // calculate pawukon
        this.pawukon = this.wuku.value * 7 + this.dayOfWeeks + 1;

        // calculate wewaran
        this.ekawara = new EkaWara(this.pawukon);
        this.dwiwara = new DwiWara(this.pawukon);
        this.triwara = new TriWara(this.pawukon);
        this.caturwara = new CaturWara(this.pawukon);
        this.pancawara = new PancaWara(this.pawukon);
        this.sadwara = new SadWara(this.pawukon);
        this.saptawara = new SaptaWara(this.pawukon);
        this.astawara = new AstaWara(this.pawukon);
        this.sangawara = new SangaWara(this.pawukon);
        this.dasawara = new DasaWara(this.pawukon);
        
    }

}