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
            this.categories = [{name: "one"}, {name: "two"}, {name: "three"}]; //new MovieService().fetchData(Category.TYPE);
            console.log(this.categories);
            console.log(new MovieService().fetchData(Category.TYPE).data);
        }
    }

});
