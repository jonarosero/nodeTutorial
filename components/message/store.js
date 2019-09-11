const db = require('mongoose');

//mongodb+srv://test:test1234@dbcluster-aegol.mongodb.net/test?retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect('mongodb+srv://test:test1234@dbcluster-aegol.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(e => console.log(e));




function addMessage(message){
    const myMessage = new Model (message);
    myMessage.save();
}

function getMessages(){
    //return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
}