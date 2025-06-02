const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Endpoint Works');
})

app.listen(PORT, '0.0.0.0', () => {`Listening on port ${PORT}.`})
