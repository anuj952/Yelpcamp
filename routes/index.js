var express 	= 	require("express");
var router  	= 	express.Router();
var passport	=	require("passport");
var User 		=	require("../models/user")




router.get("/",function(req,res){
	res.render("home");
})
// AUTH ROUTES

router.get("/register",function(req,res){
	res.render("register");
});
// handle Sign up logic
router.post("/register",function(req,res){
	var newUser = new User({username: req.body.username})
	User.register(newUser, req.body.password,function(err,user){
		if(err){
    console.log(err);
    return res.render("register", {error: err.message});

		}
		passport.authenticate("local")(req,res,function(){
			req.flash("success","Signed up Successfully ! Welcome "+req.body.username);
			res.redirect("/campgrounds");
		});
	});
});

// LOGIN FORM
router.get("/login",function(req,res){
	res.render("login");
});
// Handle Login logic

router.post("/login",passport.authenticate("local", 
	{
	successRedirect: "/campgrounds",
	faluireRedirect: "/login"
    }), function(req,res){
});

// LOGOUT LOGIC
router.get("/logout",function(req,res){
	req.logout();
	req.flash("success","Successfully logged out" );
	res.redirect("/campgrounds");
});


module.exports = router;