var express = require("express");
var router  = express.Router();
var Campground	= require("../models/campground");
var middleware	=	require("../middleware");


router.get("/campgrounds",function(req,res){
	Campground.find({},function(err,allcamps){
		if(err){
			console.log(err);
		}
		else{
			 res.render("campgrounds/index",{camp:allcamps});
		}
	});
	
// CREATE - add new campgrounds to database
});
router.post("/campgrounds",middleware.isLoggedIn,function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var price=req.body.price;
	var description = req.body.description;
	var author= {
		id: req.user._id,
		username: req.user.username
	};
	var newcamp = {name:name ,image:image,description:description,author:author,price:price}
	//create a new campground and save to database
	Campground.create(newcamp,function(err,newlycamp){
		if(err){
			console.log(err);
		}
		else
			{
				res.redirect("/campgrounds");
			}
	})	
});

// NEW - show new form to add database
router.get("/campgrounds/new",middleware.isLoggedIn,function(req,res){
	res.render("campgrounds/new")
})

router.get("/campgrounds/:id",function(req,res){
	//find campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundcamp){
		if(err){
			console.log(err);
		}
		else
			{
				res.render("campgrounds/show",{camp:foundcamp});
			}
	});	
});

// EDIT ROUTE

router.get("/campgrounds/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
		Campground.findById(req.params.id,function(err,campground){
	res.render("campgrounds/edit",{campground: campground});
			
		});
	
});

// UPDATE ROUTE

router.put("/campgrounds/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndUpdate(req.params.id,req.body.newcamp,function(err,updated){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	});
});

// DELETE ROUTE
router.delete("/campgrounds/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds");
		}
	});
});



module.exports	=	router;