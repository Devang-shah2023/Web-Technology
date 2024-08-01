const http= require('http');

const server= http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<button><a href="./E:\college\Extra\Web projects\rock,paper,scissors game\game.html" target="_blank">About</a></button>&nbsp;<button><a>Contact Me</a></button>&nbsp; ');
});

server.listen(3000, ()=>{
    console.log('Server running at http://127.0.0.1:3000/');
});

