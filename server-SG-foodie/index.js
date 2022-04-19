const express = require('express');
const app = express();
const port = 3000;
//Enable CORS
const cors = require('cors')
app.use(cors())
const db = require('./config/db');
db.connect();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const sgfoodieRouter = require('./routes/sgfoodie.router');
app.use('/', sgfoodieRouter);
app.listen(port, () => {
    console.log(`My server listening on port ${port}`);
})