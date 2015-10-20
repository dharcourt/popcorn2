var DataStream = require("montage-data/logic/service/data-stream").DataStream;

/**
 * @class DataStream
 * @extends external:DataStream
 */
exports.DataStream = DataStream.specialize(/** @lends DataStream.prototype */ {

    templateDidLoad: {
        value: function () {
            console.log("DataStream.templateDidLoad()!");
        }
    }

});
