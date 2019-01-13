const fs = require('fs')
const config = require('../../config')

const flush_globalAllUsers = require('../initProject/init.service')
/**
 * this module  for  user file operator  , main for insert user information or delete user information
 */
const userFIleOperationService = {
    addUser:function(userJson){
        return new Promise(function(resolve,reject){
            let userString = JSON.stringify(userJson);
            userString = '\n' + userString
            fs.appendFile(config.userPath,userString,function(err){
                let msg = false
                if(err){
                    console.error('user file  append  error')
                    console.error(err)
                    resolve(resolve) 
                }else{
    
                    //read user.json  again to  flush  globalAllUsers  that insert this new user to memory
                    flush_globalAllUsers.getUsers()
    
                    msg = true
                    resolve(msg) 
                }
            }) 
        })
        

    },
}

module.exports = userFIleOperationService