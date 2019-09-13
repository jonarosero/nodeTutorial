const db = require('mongoose');

db.Promise = global.Promise;
//mongodb+srv://test:test1234@dbcluster-aegol.mongodb.net/test?retryWrites=true&w=majority
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(e => console.log(e));
    console.log('[DB]Conexión exitosa')
}

module.exports = connect;