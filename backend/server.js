const express = require('express');
const cors = require('cors');
const app = express();

const incidentRoutes = require('./src/database/incidents/incident');
const stockEnergieRoutes = require('./src/database/stocks/stockEnergie');
const stockProduitsRoutes = require('./src/database/stocks/stockProduits');
const transactionRoutes = require('./src/database/transactions/transaction');
const loginRoutes = require('./src/database/login/login');
const horairesRoutes = require('./src/database/misc/horaires');
const pompesRoutes = require('./src/database/pompes/pompes');
const cartesEnergieRoutes = require('./src/database/cartes/carteEnergie');
const cartesMembreRoutes = require('./src/database/cartes/carteMembre');
const clientRoutes = require('./src/database/misc/client');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/incidents', incidentRoutes);
app.use('/stockEnergie', stockEnergieRoutes);
app.use('/stockProduits', stockProduitsRoutes);
app.use('/transaction', transactionRoutes);
app.use('/login', loginRoutes);
app.use('/horaires', horairesRoutes);
app.use('/pompes', pompesRoutes);
app.use('/cartesEnergie', cartesEnergieRoutes);
app.use('/cartesMembre', cartesMembreRoutes);
app.use('/client', clientRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;