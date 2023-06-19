const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware para permitir las solicitudes CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/character-info/:id', (req, res) => {


    const characterId = req.params.id;

    // Realizar una solicitud GET a la API de Rick and Morty
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            const character = response.data;
            res.json(character);
        })
        .catch(error => {
            res.json({ error: 'Error al obtener la información del personaje.' });
        });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
