/**
 * @module core/movie
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class Movie
 * @extends Montage
 */
exports.Movie = Montage.specialize(/** @lends Movie# */ {
    constructor: {
        value: function Movie() {
            this.super();
        }
    }
});
