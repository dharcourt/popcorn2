var Montage = require("montage/core/core").Montage,
    ObjectDescriptor = require("montage-data/logic/model/object-descriptor").ObjectDescriptor;

/**
 * @class Movie
 * @extends external:Montage
 */
exports.Movie = Montage.specialize(/** @lends Movie.prototype */ {

    /** @type {string} */
    title: {
        value: undefined
    },

    /** @type {string} */
    description: {
        value: undefined
    },

    /** @type {string} */
    backdrop: {
        value: undefined
    },

    /** @type {string} */
    poster: {
        value: undefined
    },

    /** @type {string} */
    releaseData: {
        value: undefined
    },

    /** @type {number} */
    popularity: {
        value: undefined
    },

    /** @type {number} */
    score: {
        value: undefined
    }

}, /** @lends Movie */ {

    /** @type {external:ObjectDescriptor} */
    TYPE: {
        get: ObjectDescriptor.getterFor(exports, "Movie")
    }

});
