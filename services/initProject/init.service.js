const fs = require('fs')
const path = require('path')
const mainConfig = require('../../config')

const init = {
    getUsers : function(){
        console.log(mainConfig.userPath)  
        let userInfosString = fs.readFileSync(mainConfig.userPath,{encoding:"utf-8"})
        let userInfosArray = userInfosString.split('\n')
        let allUsers = []
        for(let i=0,item;item= userInfosArray[i++];){
            allUsers.push(JSON.parse(item))
        }
        globalAllUsers = allUsers

    },
    getTokenPrivate:function(){
        let privateKey = fs.readFileSync(mainConfig.privateKey)
        return privateKey
    },
    getTokenPublic:function(){
        let publicKey = fs.readFileSync(mainConfig.publicKey)
        return publicKey
    }
}


module.exports = init