const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.sendFile('C:\\Users\\Krina Vipul Shah\\OneDrive\\Desktop\\DOCUMENTS\\IUB\\2ND SEM\\SE\\JavaScript\\index.html')
})

app.get('/summation', (req, res) => {
    const num1 = Number(req.query.number1);
    const num2 = Number(req.query.number2);
    const summation = num1 + num2;
    res.send(`${summation}`);
});

app.listen(port, () => {
     console.log('Server is running on port 3000');
});