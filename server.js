require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./router')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${PORT} </h1>`))

app.use('/api', routes);


app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app