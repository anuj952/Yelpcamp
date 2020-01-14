var mongoose 	= 	require("mongoose");
var Campground	=	require("./models/campground.js");
var Comment 	=	require("./models/comment.js");

var data = [
	{name : "cloud",
	 image : "https://cdn.vox-cdn.com/thumbor/tyz6flsYzG7cBdB5-19DvR2Wem8=/0x0:1004x753/1200x800/filters:focal(422x296:582x456)/cdn.vox-cdn.com/uploads/chorus_image/image/63710251/20150428-cloud-computing.0.1489222360.0.jpg",
	 description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{name : "batman",
	 image : "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/12/Dc-Rebirth-Batman-Header-Image.jpg",
	 description : "batman is awesome"
	},
	{name : "tony stark",
	 image : "https://cdn.pinkvilla.com/files/styles/contentpreview/public/Tony%20Stark%20main.jpg?itok=-U-S-K7A",
	 description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
];

function seedDB(){
	// remove all campgrounds
	Campground.remove({},function(err){
	// if(err){
	// 	console.log(err);
	// }
	// console.log("removed campgrounds !");
	// 		data.forEach(function(seed){
	// 		Campground.create(seed, function(err,data){
	// 			if(err){
	// 				console.log(err);
	// 			}
	// 			else
	// 				{
	// 					console.log("added a campground");
	// 				Comment.create({
	// 					text : "my first comment",
	// 					author : "anuj"
	// 				},function(err,comment){
	// 					if(err){
	// 						console.log(err);
	// 					}
	// 					else
	// 						{
	// 							data.comments.push(comment);
	// 							data.save();
	// 						}
	// 				})	
						
						
	// 				}
	// 		});
	// 	});
});
	
}

module.exports = seedDB;