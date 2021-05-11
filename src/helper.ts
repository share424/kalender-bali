export const differenceInDays = (dt1: Date, dt2: Date): number => {
    const time = (dt2.getTime() - dt1.getTime());
    const days = time / (1000 * 3600 * 24);

    return days;
}

export const differenceInWeeks = (dt1: Date, dt2: Date): number => {
    const numDays = dt1.getDay();
    dt1.setDate(dt1.getDate() - numDays);
    const days = differenceInDays(dt1, dt2);
    return Math.floor(days / 7);
}