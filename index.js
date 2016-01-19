(function() {
	var express = import("express");

	var count = 0;

	var app = express();

	app.get('/get', function(req, res) {
		res.send({
			"count" : count
		});
	});

	app.get('/poke', function(req, res) {
		count = count + 1;
		res.send({
			"count" : count
		});
	})

	app.listen(3000, function() {
		console.log("server running on port 1000");
	})
})();
