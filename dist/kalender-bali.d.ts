import { AstaWara, CaturWara, DasaWara, DwiWara, EkaWara, PancaWara, SadWara, SangaWara, SaptaWara, TriWara } from "./wewaran";
import Wuku from "./wuku";
export default class KalenderBali {
    private date;
    wuku: Wuku;
    pawukon: number;
    private dayOfWeeks;
    ekawara: EkaWara;
    dwiwara: DwiWara;
    triwara: TriWara;
    caturwara: CaturWara;
    pancawara: PancaWara;
    sadwara: SadWara;
    saptawara: SaptaWara;
    astawara: AstaWara;
    sangawara: SangaWara;
    dasawara: DasaWara;
    constructor(date: string | Date | undefined);
}
//# sourceMappingURL=kalender-bali.d.ts.map