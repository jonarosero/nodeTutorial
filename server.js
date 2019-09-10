const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require("./network/response");
var app = express();

app.use(bodyParser.json());
app.use(router);
app.use('/app', express.static('public'));


router.get('/message', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "valor personalizado",
    });
    response.success(req,res, 'Lista mensajes');
});

router.post('/message', function(req, res){
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Mensaje Creado Exitosamente', 201);
    }
    
});
/*app.use('/', function(req, res){
    res.send('hola');
});*/

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000')