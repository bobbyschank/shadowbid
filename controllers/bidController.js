
var bidObject = [
{
	name: "Kindle E-reader",
	image: "https://images-na.ssl-images-amazon.com/images/I/61%2BtYhgtgwL._SY400_.jpg",
	current_price: 59.99,
	current_bid: 45,
	activation_date: "05_04_2017",
	days: 3,
	count: 1,
	highest_price: 99.99,
	lowest_price: 51.99,
	collection: "electronics",
	status: "open"
},
{
	name: "Apple iPad Air 2",
	image: "https://images-na.ssl-images-amazon.com/images/I/41Yel8ffbaL.jpg",
	current_price: 486.00,
	current_bid: 450.00,
	activation_date: "05_04_2017",
	days: 3,
	count: 1,
	highest_price: 560.00,
	lowest_price: 480.00,
	collection: "electronics",
	status: "open"
},
];

function getBids (req, res) {
	console.log("getBids controller working");
	console.log(bidObject);
	res.json(bidObject);
}



module.exports = {
	getBids: getBids
};