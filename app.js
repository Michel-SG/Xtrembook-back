const express = require('express');
const app = express();
require('dotenv').config();




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json());




app.all('/*', (req, res) => {
    res
        .status(404)
        .send('Not Found');
});
app.listen(process.env.PORT || 3000, () => console.log('Adresse du serveur : http://localhost:3000')
);