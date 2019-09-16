const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://test:test1234@dbcluster-aegol.mongodb.net/test?retryWrites=true&w=majority')

app.use(cors());

app.use(bodyParser.json());

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicacion esta escuchando en http://localhost:3000')
});
