const testRoutes = require('./routes/myTestRoutes');
const express = require('express');
const app = express();
const app1 = express();
const port = 3000;
const port1 =3001;  

app.get('/', (req, res) => {
    res.send ("Hellow World!");
});

app1.get ("/", (req, res) => {
    res.send ("Hello from the other side...");
});

app.get('/mytest', (req,res) => {
    res.send ("This is a test");
});

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`);
});

app1.listen(port1, () => {
    console.log(`app1 started`);
});

