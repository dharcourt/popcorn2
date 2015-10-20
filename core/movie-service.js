/**
 * @module core/movie-service
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class MovieService
 * @extends Montage
 */
exports.MovieService = Montage.specialize(/** @lends MovieService# */ {
    constructor: {
        value: function MovieService() {
            this.super();
        }
    }
});
