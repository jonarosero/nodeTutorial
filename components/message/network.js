const express = require('express');
const response = require("../../network/response");
const controller = require("./controller")

const router = express.Router();

router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "valor personalizado",
    });
    response.success(req,res, 'Lista mensajes');
});

router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información invalidad', 400, 'Error en controlador');
        });
});

module.exports = router;