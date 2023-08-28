// WEB-PALVELIN SÄHKÖN HINNAN SEURANTAAN JA ENNUSTAMISEEN
// ======================================================

// KIRJASTOJEN LATAUKSET
// ---------------------

// Ladataan tarvittavat Express kirjastot
const express = require('express');
const {engine} = require('express-handlebars');

// EXPRESS-SOVELLUKSEN ASETUKSET
// -----------------------------

// Luodaan Express-sovellus ja määritellään kuunneltava TCP-portti ympäristömuuttujasta tai 8080
const app = express();
const PORT = process.env.PORT || 8080;

// Määritellään resurssien, kuten css-tiedostojen kansioksi public
app.use(express.static('public'))

// Määritellään mallineiden käyttöasetukset
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Määritellään hakemisto, josta näkymät (sivut) löytyvät
app.set('views', './views');

// REITTIEN MÄÄRITYKSET
// --------------------

// Kotisivun reitti ja dynaaminen data
app.get('/', (req, res) => {

    // Testidataa dynaamisen sivun testaamiseksi
    let data = {
        'price': 32.25,
        'wind': 4,
        'temperature': 21
    }
    res.render('index', data);
});

// Tuntihintasivun reitti ja dynaaminen data
app.get('/hourly', (req, res) => {

    // Testidataa dynaamisen sivun testaamiseksi
    let tableData = {hourlyPrices:[
        {hour: 8, price: 31.22},
        {hour: 9, price: 32.55},
        {hour: 10, price: 31.44}
    ]}

    res.render('hourly', tableData);
});

// PALVELIMEN KÄYNNISTYS
app.listen(PORT);
console.log(`Palvelin kuuntelee porttia ${PORT}`);