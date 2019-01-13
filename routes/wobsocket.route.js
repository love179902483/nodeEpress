const express = require('express')
const websocketRouter =express.Router()


websocketRouter.get('/tokenverify',function(req,res,next){
    console.error(111)
    res.send('token verify successful!!')
    
})

websocketRouter.get('/a/:id',function(req,res,next){
    console.log(req.params.id)
    next(1111)
})


module.exports = websocketRouter