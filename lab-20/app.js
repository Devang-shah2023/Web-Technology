const express= require('express');
const app= express();
const bodyParser= require('body-parser')

a=[
    {
        id:1,
        name:'Deep',

    },
    {
        id:2,
        name:'Pratham',
        
    },
    {
        id:3,
        name:'AP',
        
    }
]

app.get('/students',(req, res)=>{
    res.json(a)

})

app.use(bodyParser, express.urlencoded({extends:false}))
app.post('/students', (req, res)=>{
    const object={
        id:a.length+1,
        name:req.body.name
    }
    a.push(object)
    res.json(a)

})


app.delete('/students/:id', (req,res)=>{
    const id=parseInt(req.params.id);
    a= a.filter(student=> student.id !== id);
    res.json(a)
})

app.listen(3000,()=>{
    console.log("server running at 3000")
} )