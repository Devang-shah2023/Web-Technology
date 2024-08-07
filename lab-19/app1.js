const express= require('express');
const app= express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/home', function(req, res){
    res.send("This is my home page");
 });

 app.get('/about', function(req, res){
    res.send("I am an enthusiatic web devloper and aspiring engineer in B.Tech CSE");
 });

 app.get('/contact', function(req, res){
    res.send("You can find me on GitHub trying and learning web devlopement projects ");
 });
app.listen(3500);