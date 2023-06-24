const PORT = 7777;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello! I'm a endpoint`);
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});