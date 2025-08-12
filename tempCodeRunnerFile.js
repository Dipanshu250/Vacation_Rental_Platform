const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");
app.use(express.static(path.join(__dirname, "/public")));
const wrapAsync =require("./utils/wrapAsync.js");
const ExpressError =require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/review.js");
const listings=require("./routes/listing.js");




const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connect to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.get("/",(req,res)=>{
    res.send("hi,i am root");
}
);




const validateReview=(req,res,next)=>{
    let{error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=> el.messgae).join(",");
        throw new ExpressError(400,errMsg);

    }else{
        next();
    }
};


app.use("/listings",listings);
 
app.post("/listings/:id/reviews",validateReview ,wrapAsync(async (req,res)=> {
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);

    listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();
   res.redirect(`/listings/${listing._id}`);
   

}));

app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async (req,res)=>{
    let{id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}))









app.use((err,req,res,next)=>{
   
    res.send("something went wrong!");
});        

// Catch-all route for 404
// Handle 404 Not Found - should be after all other routes




 app.listen(8000,()=>{
 console.log("server is listening to port 8000");
      });