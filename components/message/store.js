const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://test:test1234@dbcluster-aegol.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(e => console.log(e));
console.log('[DB]Conexión exitosa')


function addMessage(message){
    const myMessage = new Model (message);
    myMessage.save();
}

async function getMessages(filterUser){
    let filter = {};
    if (filterUser !== null){
        filter = { user: filterUser };
    }
    const messages= await Model.find(filter);
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;
    const newMessage = foundMessage.save();
    return newMessage;
}

function removeMessages(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessages
}