var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends external:Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        new MovieService().fetchData().then(function (
    }
});
