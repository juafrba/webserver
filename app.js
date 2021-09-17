const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/generic', (req, res) => {
    res.sendFile(`${__dirname}/public/generic.html`);
});

app.get('/elements', (req, res) => {
    res.sendFile(`${__dirname}/public/elements.html`);
});

app.listen(8080, () => console.log('Server running on port 8080'));
