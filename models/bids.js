var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BidsSchema = new Schema({
	watchlist: [ String ] ,
	openBids: [ String ],
	wonBids: [ String ],
	closedBids: [ String ]
});

var Bids = mongoose.model('Bids', BidsSchema);

module.exports = Bids;