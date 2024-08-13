const mongoose= require('mongoose');
const express= require('express');
const bodyParser= require('body-parser');
const Faculty= require('./Faculty.js');
const app= express();

//Connect to MongoDB Database

mongoose.connect('mongodb+srv://Devang12320:Devang111@cluster0.80fj5.mongodb.net/', {
    useNewUrlParser:true
}).then(()=>{
    const app= express();
    app.use(bodyParser.urlencoded({ extended: false}))
})

//get all faculties
app.get('/faculties', async(req,res)=>{
    faculties= await Faculty.find();
    res.send(faculties);
});
//get faculties by id
app.get('/faculties/:id', async(req,res)=>{
    faculties= await Faculty.findOne({FacultyID:req.params.id});
    res.send(faculties);
});

// add/insert new faculty
app.post('/faculties', async(req, res)=>{
    const faculty= new Faculty({
        FacultyID: req.body.FacultyID,
        FacultyName: req.body.FacultyName,
        FacultyInitial: req.body.FacultyInitial
    })
    await faculty.save();
    res.send(faculty);
});

//updaate faculty by id

app.patch('/faculties/:id', async(req,res)=>{
    try{
        const faculty= await Faculty.findOne({FacultyID:req.params.id})
        faculty.FacultyID= req.body.FacultyID;
        faculty.FacultyName= req.body.FacultyName;
        faculty.FacultyInitial= req.body.FacultyInitial;

        await faculty.save()
        res.send(faculty)
    }
    catch{
        res.status(404)
        res.send({error: "Faculty doesn't exist ! "})
    }
});
//delete faculty by id

app.delete('/faculties/:id', async(req,res)=>{
    try{
        const faculty= await Faculty.findOne({FacultyID:req.params.id})
        await faculty.delete();
        res.send(faculty)
    }
    catch{
        res.status(404);
        res.send({error: "Faculty doesn't exist !"})
    }
})

app.listen(3000, ()=>{
    console.log("server started at @3000")

})