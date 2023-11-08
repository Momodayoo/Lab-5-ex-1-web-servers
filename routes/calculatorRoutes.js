
const express = require('express');

const calculatorController =
require ('.../controllers/calculatorController')

const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req.query)
    
    })

// functional add route performing addition on request parameters
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
});

// functional minus route performing addition on request parameters
router.get('/minus', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
});

// functional multiply route performing addition on request parameters
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 * number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
});

// functional divide route performing addition on request parameters
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 / number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
});

module.exports = router;

