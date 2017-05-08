console.log("app.js is working");

var app = {};

app.init = function () {
	$.ajax({
		method: "GET",
		url: "/myaccount/item"
	}).done(function(data) {
		console.log(data);
		data.forEach(function(index) {
			app.renderItem(index);
		});

	});
};

app.renderItem = function(index) {
	 // $('.testData').append(
	 // 	'<div class="row item">' + index.name);
};


$(app.init);