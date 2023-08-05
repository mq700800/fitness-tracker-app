const express = require("express");
const mongoose = require("mongoose");
const Schema = require("./Model");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

// to fetch data from database use in frontend function to display it
app.use(cors());

// body-parser allows you to access req.body from within routes and use that data
app.use(bodyParser.json());

//For defining the port and check the port is connected successfully or not

const PORT = 4500;

app.listen(PORT , ()=>{
    console.log("PORT is connected succesfully")
})

// for building the connection from database(Mongodb)
mongoose.connect("mongodb://localhost:27017/fitness" , {
    useNewUrlParser : true
})
// for checking the database is connected successfully or not
mongoose.connection.once("open",()=>{
    console.log("Database is connected successfully");
})

//Api for creating the data in the database
app.post("/create" ,(req,res)=>{
const schema = Schema(req.body)
schema.save()
.then((used)=>{
    res.send(used)})
.catch((err)=>{
    res.status(500).send(err.message)}) 
})

//Api for showing the data from the database
app.get("/show", (req,res)=>{
    Schema.find()
    .then((showed)=>{
        res.send(showed)
    }).catch((err)=>{
        res.status(200).send(err.message)
    })
})
//Api for deleting the data in the database
app.delete('/delete/:id', (req, res) => {
    Schema.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

//Api for updating the data in the database
  app.put('/update/:id', (req, res) => {
    const data = new Schema({
      _id: req.params.id,
      name: req.body.name,
      description: req.body.description,
      activity: req.body.activity,
      duration: req.body.duration,
      date: req.body.date
    });
    Schema.updateOne({_id: req.params.id}, data).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

