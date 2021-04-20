// --------------------
// Author: Dennis Suarez
// Date: Arpil 17th 2021
// --------------------


// --------------------
// Express Setup
// --------------------
const express = require("express");
const { Mongoose } = require("mongoose");
const app = express();
app.use(express.json)
const HTTP_PORT = process.env.PORT || 8080;

// -------------------
// Database
// -------------------
const db_url = "mongodb+srv://sheridan:NewAssignment@dsuarez.no5ih.mongodb.net/A4?retryWrites=true&w=majority"
const connectToDb = () => {
    return mongoose.connect(db_url, {userNewUrlParser:true,useUnifiedTopology:true})
}

var mongoose = require("mongoose");
const {Schema} = mongoose;

var itemSchema = new Schema({
  "item":  String,
  "rarity": String,
  "description": String,
  "goldPerTurn": {
    "type": Number,
    "default": 0
  }
});

var Company = mongoose.model("a4_items", itemSchema);



// --------------------
// URL Endpoints
// --------------------
app.get("/api/items", (req, res) => {
    res.send("Hello Wolrd!");
})

app.get("/", (req, res) => {
    res.send("Hello Wolrd!");
})

app.get("/api/items/:item_name", (req, res) => {
    let item = req.params.name;

    return res.send("Hello Wolrd!");

    res.status(404).send({msg:'Not found'})
})

app.put("/api/items/:item_id", (req, res) => {
    res.send("Hello Wolrd!");
})

app.delete("/api/items/item_name", (req, res) => {
    res.send("Hello Wolrd!");
})
app.post("/api/items/", (req, res) => {
    res.send("Hello Wolrd!");
})

const onHttpStart = () => {
    console.log('Server has started and is listening on port:' + HTTP_PORT)
}

connectToDb().then(()=> {
    console.log("Connected to DB.")
    console.log("Starting Server")
    app.listen(HTTP_PORT, onHttpStart)
}).catch ((error)=> {
    console.log("Error from Database")
    console.log(error)
})