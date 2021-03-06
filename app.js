const express = require('express');
const app = express();
require('dotenv').config();

const userRoute = require('./routes/user.route');
const articleRoute = require('./routes/article.route');
const auteurRoute = require('./routes/auteur.route');
const editeurRoute = require('./routes/editeur.route');
const livreRoute = require('./routes/livre.route');
const commandeRoute = require('./routes/commande.route');
const consultationRoute = require('./routes/consultation.route');
const commandeValideeRoute = require('./routes/commande-validee.route');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(express.json());


app.use('/api/user', userRoute);
app.use('/api/commande', commandeRoute);
app.use('/api/consultation', consultationRoute);
app.use('/article',articleRoute);
app.use('/auteur',auteurRoute);
app.use('/editeur',editeurRoute);
app.use('/livre',livreRoute);
app.use('/commande-validee',commandeValideeRoute);
app.all('/*', (req, res) => {
    res
        .status(404)
        .send('Not Found');
});
app.listen(process.env.PORT || 3000, () => console.log('Adresse du serveur : http://localhost:3000')
);