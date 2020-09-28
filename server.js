const express = require('express');
const app = express();
const hbs = require('hbs')
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Tomas',
    });
})
app.get('/about', (req, res) => {

    res.render('about', {});
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})