const jsonwebtoken = require('jsonwebtoken')


const loginService = {
    loginVerify:function(req,res,next){
        console.log(req.body)
        console.log(22222)
        res.sendStatus(299)
    }
}

module.exports = loginService