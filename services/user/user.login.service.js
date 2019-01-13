
const jwt = require('jsonwebtoken')

const loginService = {
    login:function(req,res,next){
        
        let userName = req.body.userName
        let password = req.body.password
        let returnMsg = {
            "flag":false,
            "msg":"",
            "data":{}
        }
        //high  efficiency  for 
        for(let i=0 , item; item = globalAllUsers[i++];){
            if(item["userName"] === userName && item["password"]===password){

                console.log('this user is in golbalAllUsers' + userName)
                console.log(global.tokenPrivate)
                console.log(global.tokenPublic)
                let usertoken =  jwt.sign({item,exp:Math.floor(Date.now()/1000)+60*60},global.tokenPrivate,{algorithm:"RS256"})
                    console.log(userName + ': '+ usertoken)
                    returnMsg.flag = true;
                    returnMsg.msg = "login success!";
                    returnMsg.data["nickname"] = item.nickname; 
                    returnMsg.data["token"] = usertoken
                    res.json(returnMsg)
                    return

                
            }
        }
        returnMsg.msg = "Don't has " + userName +" user or password error"
        console.log(returnMsg)

        res.send(returnMsg)
    },
    verifyToken:function(req,res,next){
        console.log(req.headers['authorization'])
        let thisHeaderToken = req.headers['authorization']
        if(typeof thisHeaderToken !== 'undefined'){
            let thisToken = thisHeaderToken.split(' ')[1];
            req.token = thisToken;
            console.log(global.tokenPublic)
            let decode = jwt.verify(thisToken,global.tokenPublic,{algorithms:"RS256"});
            if(decode){
                console.log(decode)
                next()
                
            }else{
                res.sendStatus(403)
            }
        }else{
            res.sendStatus(403)
        }
    }
}

module.exports = loginService