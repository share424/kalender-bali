import KalenderBali from './kalender-bali';

export const saka = (date: string|Date|undefined) => {
    return new KalenderBali(date);
}