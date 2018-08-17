var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
mongoose.connect('mongodb://localhost/pets');

var PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must enter a name!"], minlength: [3, "Names must be at least 3 characters long!"], unique: [true, "Name already taken!"]},
    type: {type: String, required: [true, "You must enter a type!"], minlength: [3, "Types must be at least 3 characters long!"]},
    description: {type: String, required: [true, "You must enter a description!"], minlength: [3, "Descriptions must be at least 3 characters long!"]},
    skills: {type: Array, default: []},
    likes: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})
var Pet = mongoose.model('Pet', PetSchema)

app.get('/pets', (req, res) => {
    var pets = Pet.find({}, function(err, pets){
        //console.log(pets);
        if (err){
            console.log("Couldn't find all pets!");
        }
        else{
            console.log("Found all pets!");
            res.json({message: "Success", data: pets});
        }
    })
})

app.post('/pets', (req, res) => {
    var pet = new Pet({name: req.body.name, type: req.body.type, description: req.body.description, skills: req.body.skills})
    pet.save(function(err, pet){
        if (err){
            res.json({error: err});
        }
        else{
            //console.log("Pet creation successful! This is the pet:", pet);
            res.json(pet);
        }
    })
})

app.get('/pets/:id', (req, res) => {
    //console.log(req.params.id);
    var pet = Pet.find({_id: req.params.id}, function(err, pet){
        //console.log(pet);
        if (err){
            //console.log("Couldn't find this pet!");
        }
        else{
            //console.log("Found the pet!");
            res.json({message: "Success", data: pet});
        }
    })
})

app.delete('/pets/:id', (req, res) => {
    //console.log(req.params.id);
    Pet.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("Pet deletion failed!");
        }
        else{
            console.log("Pet deletion successful!");
            res.json({message: "Pet deleted!"})
        }
    })
})

app.put('/pets', function(req, res){
    Pet.findOne({_id: req.body._id}, function(err, pet){
        console.log(pet);
        pet.name = req.body.name;
        pet.type = req.body.type;
        pet.description = req.body.description;
        pet.skills = req.body.skills;
        pet.updatedAt = Date.now();
        pet.save(function(err){
            if (err){
                res.json({error: err});
            }
            else {
                console.log("Success");
                res.json({message: "Success!"})
            }
        })
    })
})

app.get('/pets/like/:id', (req, res) => {
    //console.log(req.params.id);
    Pet.update({_id: req.params.id}, {$inc: {likes: 1 }}, function(err){
        if (err){
            console.log("Could not like the pet!")
            res.json({error: err})
        }
        else{
            console.log("Pet was liked!")
            var pet = Pet.findOne({_id: req.params.id}, function(err, pet){
                if(err){
                    res.json({message: "Error", error: err});
                }
                else {
                    res.json({message: "Success", data: pet});
                }
            })
        }
    })
})

/* app.put('/pets', function(req, res){
    console.log("In server put! Req.body is", req.body)
    Pet.update({_id: req.body._id}, {name: req.body.name, type: req.body.type, description: req.body.description, skills: req.body.skills, updatedAt: Date.now()}, function(err){
        if (err){
            console.log("Could not update the pet!")
            res.json({error: err})
        }
        else{
            console.log("Pet was updated!")
            var pets = Pet.find({}, function(err, pets){
                if(err){
                    //console.log("Returned error", err);
                    res.json({message: "Error", error: err});
                }
                else {
                    res.json({message: "Success", data: pets});
                }
            })
        }
    })
}) */

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})