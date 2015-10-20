var Component = require("montage/ui/component").Component,
    Category = require("core/category").Category,
    MovieService = require("core/movie-service").MovieService;

/**
 * @class Main
 * @extends external:Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

    constructor: {
        value: function () {
            this.categories = new MovieService().fetchData(Category.TYPE);
            console.log(this.categories);
        }
    }

});
