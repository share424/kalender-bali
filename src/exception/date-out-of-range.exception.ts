export default class DateOutOfRangeException extends Error {

    constructor() {
        super(`the given date is out of range`);
    }

}