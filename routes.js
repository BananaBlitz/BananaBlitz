module.exports = function(app, passport, db) {
	app.get("/", (req,res) => {
		res.sendFile(__dirname +"/signUpTest.html");
	});

	app.get("/users", (req,res) => {
		db.User.find().then(user => {
			res.json(user);
		}).catch(err => {
			console.log(err);
		});
	});

	app.post("/signup", passport.authenticate('local', {
		successRedirect:'/home',
		failureRedirect: '/',
		successFlash: 'Welcome', 
		failureFlash: true
	}));

	app.get("/home", isLoggedIn, (req, res) => {
		res.sendFile(__dirname + "/test.html");
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated()) return next();

		res.redirect("/");
	}
}


