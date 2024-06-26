const express = require('express');
const router = express.Router();

const { getAllHoraires, getHorairesByDay, getHorairesOuvertureByDay, getHorairesFermetureByDay, setHoraireFermeture, setHoraireOuverture } = require('./horairesFunctions');

router.get('/get', (req, res) => {
    getAllHoraires(req, res);
});

router.get('/get/:jour', (req, res) => {
    getHorairesByDay(req, res);
});

router.get('/ouverture/get/:jour', (req, res) => {
    getHorairesOuvertureByDay(req, res);
});

router.get('/fermeture/get/:jour', (req, res) => {
    getHorairesFermetureByDay(req, res);
});

router.post('/ouverture/set/', (req, res) => {
    setHoraireOuverture(req, res);
});

router.post('/fermeture/set/', (req, res) => {
    setHoraireFermeture(req, res);
});



module.exports = router;