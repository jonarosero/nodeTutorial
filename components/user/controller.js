const store = require('./store');

function addUser(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            console.error('[userController] No hay datos');
            return reject('Invalid Name');
        }

        const user = {
            name,
        };
        store.add(user);
        resolve(user)
    })

}
function listUsers(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}


module.exports = {
    addUser,
    listUsers
}
