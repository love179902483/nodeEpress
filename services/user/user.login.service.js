

const loginService = {
    login:function(req,res,next){
        console.log(req.body)
        
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
                returnMsg.flag = true;
                returnMsg.msg = "login success!";
                returnMsg.data["nickname"] = item.nickname; 
            }
        }

        console.log(returnMsg)

        res.send(returnMsg)
    }
}

module.exports = loginService