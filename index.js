const express = require('express');

const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/myTestRoutes');
const userRoutes = require ('./routes/userRoutes')
const app = express();
// const app1 = express();
const port = 3000;
// const port1 =3001;  

app.use(express.json());

app.use ('/', express.static('public'));

app.use('/test', testRoutes);

app.use('/calculator', calculatorRoutes);

app.use('/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send ("Hellow World!");
// });

// app1.get ("/", (req, res) => {
//     res.send ("Hello from the other side...");
// });

// app.get('/mytest', (req,res) => {
//     res.send ("This is a test");
// });

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`);
});

// app1.listen(port1, () => {
//     console.log(`app1 started`);
// });

