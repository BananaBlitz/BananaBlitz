module.exports = function(app, passport, db, path) {


	// app.get("/", (req,res) => {
	// 	res.sendFile(__dirname +"/signUpTest.html");
	// });

	// app.get("/login", (req, res) => {
	// 	res.sendFile(__dirname + "/loginTest.html");
	// }); 

	// app.get("/users", (req,res) => {
	// 	db.User.find().then(user => {
	// 		res.json(user);
	// 	}).catch(err => {
	// 		console.log(err);
	// 	});
	// });

	// app.post("/signup", passport.authenticate('signup', {
	// 	successRedirect:'/home',
	// 	failureRedirect: '/',
	// 	successFlash: 'Welcome', 
	// 	failureFlash: true
	// }));

	// app.post("/login", passport.authenticate('login', {
	// 	successRedirect: '/home',
	// 	failureRedirect: '/login',
	// 	failureFlash: true
	// }));

	// //After user authenticated they can access home route
	// app.get("/home", isLoggedIn, (req, res) => {
	// 	res.sendFile(__dirname + "/test.html");
	// });

	app.get("*", (req, res) => {
		res.sendFile( path.resolve(__dirname, '..', 'banana_spell/public', 'index.html'));
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated()) return next();

		res.redirect("/");
	}
}


