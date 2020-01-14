var express      	=	require('express');
var app          	=	express();
var bodyParser   	=	require('body-parser');
var mongoose     	=	require("mongoose");
var flash			=	require("connect-flash");
var passport	 	=	require("passport");
var LocalStrategy	=	require("passport-local");
var methodOverride	=	require("method-override");
var Campground   	=	require("./models/campground.js");
var Comment		 	= 	require("./models/comment.js");
var User			=	require("./models/user.js");
var seedDB 		 	= 	require("./seeds.js");


var commentRoutes		=	require("./routes/comments"),
	campgroundRoutes	=	require("./routes/campgrounds"),
	indexRoutes			=	require("./routes/index");



// mongoose.connect("mongodb://localhost/yelp_camp");

mongoose.connect("mongodb+srv://anuj:anuj12345@cluster0-b0u1b.mongodb.net/test?retryWrites=true&w=majority",{
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log("connected to db");
}).catch(err => {
	console.log("ERROR:",err.message);
});








app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

// seedDB();

// PASSPORT CONGIGURATION

app.use(require("express-session")({
	secret : "this is the secret",
	resave : false,
	saveUninitialized : false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Passing current user in every route
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error	=	req.flash("error");
	res.locals.success	=	req.flash("success");
	next();
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function(){
	console.log("sever is running");
});