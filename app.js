const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const game = require("./gameScript");

const app = express();

app.use(express.static("."));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect("mongodb+srv://ajayda24:yaja110125@cluster0.l53kc.mongodb.net/gameDB", {useNewUrlParser: true,  useUnifiedTopology: true});

const gameSchema = new mongoose.Schema({
    name: String,
    score: Number
});



const gameUser = new mongoose.model("gameUser", gameSchema);

const gameUsers = [];

var Name;
var Score;

app.get("/",function(req,res){

    var mysort = {score: -1}
    gameUser.find({},function(err,foundItem){
        res.render("game", {name: foundItem, score: foundItem});
    }).sort(mysort);
    // res.render("game");


});

app.post("/", function(req,res){
    
    Name = req.body.Name;
    Score = req.body.Score;

    const markList = new gameUser({
        name: Name,
        score: Score
    });
    
    gameUsers.push(markList);

    markList.save();
      
      
    res.redirect("/result");

})


app.get("/result", function(req, res){

    var mysort = {score: -1}
    gameUser.find({},function(err,foundItem){
        res.render("score", {name: foundItem, score: foundItem});
    }).sort(mysort);
  
})


app.get("/highscore", function(req, res){
    var mysort = {score: -1}
    gameUser.find({},function(err,foundItem){
        res.render("highscore", {name: foundItem, score: foundItem});
    }).sort(mysort);
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server has started successfully");
});