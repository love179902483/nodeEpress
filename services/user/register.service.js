const userFIleOperation = require('./userFIleOperation.service')


const register = {
    register:function(req,res,next){

        let returnMsg = {
            "flag":false,
            "msg":""
        }
        
        let userInfo = {
            "userName": req.body["userName"],
            "password":req.body["password"],
            "nickname":req.body["nickname"]
        }
       
        let ifRepeat = judgeRepeatUser(userInfo.userName)
        if(ifRepeat === true){
            returnMsg.msg = userInfo.userName +" repeat,try other username!"
            res.send(returnMsg)
        }else{
            insertUser(userInfo)
        }

        function judgeRepeatUser(thisUserName){
            for(let i=0,item;item = globalAllUsers[i++];){
                if(item.userName === thisUserName){
                    return true
                }
            }
            return false
        }

        

        async function insertUser (userInfo){
            let insertFlag = await userFIleOperation.addUser(userInfo)
            if(insertFlag === true){
                returnMsg.flag = true;
                returnMsg.msg ="register  successful!"
                res.send(returnMsg)
            }else{
                returnMsg.msg = "register fail!!"
                res.send(returnMsg)
            }
        }

       

       
    }
}

module.exports = register;

module.exports = register;