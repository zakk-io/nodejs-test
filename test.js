const os = require('os')
let user = {
    username : 'zakaria',
    age : 20,
    os : os.type(),
    info : function(){
        console.log(`Hi my name is ${this.username} Im ${this.age}`)
    }
}


module.exports = {
    user
}