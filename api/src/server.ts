import express from 'express';

const app = express();

app.get('/users', (req, res)=>{
    console.log("Server working at http://localhost:3333/users");

    res.json([
        'Vitor',
        'Diego', 
        'Zizi',
    ]);
});

app.listen(3333);