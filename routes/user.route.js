
const express = require("express")
const loginOutRouter = express.Router()

const loginService = require('../services/user/user.login.service')
const logoutServer = require('../services/user/user.logout.service')
const registerServer = require('../services/user/register.service')


loginOutRouter.post('/login',function(req,res,next){
    console.log("-------");
    console.log(req.body)
    loginService.login(req,res,next)
})


loginOutRouter.post('/register',function(req,res,next){
    registerServer.register(req,res,next)
})

loginOutRouter.get('/logout',function(req,res,next){
    logoutServer.loginVerify(req,res,next)
})



/**
 * http://127.0.0.1:2000/user/allUsers
 * get all  user infos
 */
loginOutRouter.get('/allUsers',function(req,res,next){
    res.send(globalAllUsers)
})



module.exports = loginOutRouter