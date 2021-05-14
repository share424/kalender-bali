;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function() {
    const saka = require('./kalender-bali').default;
    return function(d) {
        return new saka(d);
    }
})));