const express = require('express');
require('dotenv/config')
const cors = require('cors');
const userRouter = require('./router/userRouter');

const app = express();
const PORT = process.env.API_PORT;

app.use(express.json());
app.use(cors())

app.use(userRouter)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))