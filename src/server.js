const express = require('express');
require('dotenv/config')
const cors = require('cors');
const employeeRouter = require('./router/employeeRouter');

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(express.json());
app.use(cors())

app.use(employeeRouter)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))