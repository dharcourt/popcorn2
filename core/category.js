var Enumeration = require("montage-data/logic/model/enumeration").Enumeration,
    ObjectDescriptor = require("montage-data/logic/model/object-descriptor").ObjectDescriptor;

/**
 * @class Category
 * @extends external:Enumeration
 */
exports.Category = Enumeration.specialize("id", "name", "key", /** @lends Category.prototype */ {

    /** @type {Array.<Movie>} */
    movies: {
        get: function () {
            if (!this._movies) {
                this._movies = [];
            }
            return this._movies;
        }
    }

}, /** @lends Category */ {

    /** @type {external:ObjectDescriptor} */
    TYPE: {
        get: ObjectDescriptor.getterFor(exports, "Category")
    }

}, /** @lends Category */ {

    /** @type {Category} */
    BOX_OFFICE: ["boxOffice", "Box Office", "now_playing"],

    /** @type {Category} */
    POPULAR: ["popular", "Popular", "popular"],

    /** @type {Category} */
    TOP_RATED: ["topRated", "Top Rated", "top_rated"],

    /** @type {Category} */
    UPCOMING: ["upcoming", "Upcoming", "upcoming"]

});
