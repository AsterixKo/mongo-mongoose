const express = require('express');
const cors = require('cors');
const pruebaRouter = require('./routes/pruebaRouter');
const mongoose = require('mongoose');
const connection = require('./config/connection');


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    connection.url,
    {useNewUrlParser: true, useUnifiedTopology: true} );

app.use('/prueba', pruebaRouter);

app.get('/', (req, res)=>{
    res.status(200).send('<h2>Llama a la ruta específica</h2>')
});

app.listen(3000, ()=>console.log('Aplicacion corriendo en el puerto 3000'));
