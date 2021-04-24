// --------------------
// Author: Dennis Suarez
// Date: April 17th 2021
// --------------------


// --------------------
// Express Setup
// --------------------
const express = require("express");
const app = express();
app.use(express.json)

// -------------------
// Database
// -------------------
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const mongoURL = "mongodb+srv://sheridan:NewAssignment@dsuarez.no5ih.mongodb.net/A4?retryWrites=true&w=majority"
const connectionOptions = {useNewUrlParser: true, useUnifiedTopology: true}

// connect to the database and check that it worked
mongoose.connect(mongoURL, connectionOptions).then(
    () => {
        console.log("Connected successfully to your database")
    }
).catch(
    (err) => {
        console.log("Error connecting to the database")
        console.log(err)
    }
)

// Item table definition
const ItemSchema  = new Schema({
  item:  String,
  rarity: String,
  description: String,
  goldPerTurn: {
    type: Number,
    default: 0
  }
});

const Item = mongoose.model("items_table", ItemSchema)

//Mass insert items.

/*const i1 = Item({item:"Magpie", rarity:"common", description:"Gives 9 gold every 4 spins", goldPerTurn:-1})
const i2 = Item({item:"King Midas", rarity:"rare", description:"Adds 1 Gold each turn. Adjacent Gold gives 3x more gold", goldPerTurn:2})
const i3 = Item({item:"Bee", rarity:"uncommon", description:"Adjacent Flowers give 2x more gold", goldPerTurn:1})
const i4 = Item({item:"Goose", rarity:"common", description:"Has a 1% chance of adding a Golden egg", goldPerTurn:1})
const i5 = Item({item:"Golden Egg", rarity:"rare", description:"", goldPerTurn:3})
const i6 = Item({item:"Cat", rarity:"common", description:"", goldPerTurn:1})
const i7 = Item({item:"Void Stone", rarity:"uncommon", description:"Adjacent empty squares give 1 coin more. Destroys itelf if adjacent to 0 empty squares. Gives 8 coins when destroyed", goldPerTurn:0})

Item.create([i1, i2, i3, i4, i5, i6, i7]).then(
         () => {
             console.log("Bulk Insert with create was successful")
         }
     ).catch(
         (err) => {
             console.log("Error bulk inserting with create into the table.")
             console.log(err)
         }
     )      

*/

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

module.exports = app
