var express = require('express');
var app = express();
// app.get('/', function (req, res) {
//     res.send('Hello World');
// }

app.get('/dodaj/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    result= a+b;
    res.send(`Wynik dodawania ${result}`);
});

app.get('/usun/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    result= a-b;
    res.send(`Wynik odejmowania ${result}`);
});

app.get('/podziel/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    result= a/b;
    res.send(`Wynik dzielenia ${result}`);
});

app.get('/pomnoz/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    result= a*b;
    res.send(`Wynik mnozenie ${result}`);
});

app.listen(3000);