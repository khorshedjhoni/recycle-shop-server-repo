const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('recycle shop server is running');
})

app.listen(port, () => console.log(`Doctors portal running on ${port}`))