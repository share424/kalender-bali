export default class KalenderBali {
    private date;
    constructor(date: string | Date | undefined);
    getWuku(inString?: boolean): string | number | null;
    getWukuUntil(dt: Date, inString?: boolean): string[] | number[] | null | undefined;
    getTriWara(inString?: boolean): string | number | null;
    getCaturWara(inString?: boolean): string | number | null;
    getPancaWara(inString?: boolean): string | number | null;
    getSadWara(inString?: boolean): string | number | null;
    getDayOfWeek(pattern: string | undefined): string | number;
}
//# sourceMappingURL=kalender-bali.d.ts.map