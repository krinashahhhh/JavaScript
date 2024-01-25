"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.send(`
        <form onsubmit="event.preventDefault(); getSum()">
            <input type="Number" id="num1">
            <span>+</span>
            <input type="Number" id="num2">
            <button type="submit">=</button>
            <input type="text" id="result" readonly>
        </form>
        <script>
            function getSum() {
                const num1 = document.getElementById('num1').value;
                const num2 = document.getElementById('num2').value;
                fetch('/sum?num1=' + num1 + '&num2=' + num2)
                    .then(response => response.text())
                    .then(result => {
                        document.getElementById('result').value = result;
                    });
            }
        </script>
    `);
});

app.get('/sum', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const sum = num1 + num2;
    res.send(`${sum}`);
});


app.listen(port, () => {
    console.log('Server is running on port 3000');
});