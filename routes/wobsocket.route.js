const express = require('express')
const websocketRouter =express.Router()


websocketRouter.get('/express',function(req,res,next){
    console.error(111)
    console.log()
    next(111)
    
})

websocketRouter.get('/a/:id',function(req,res,next){
    console.log(req.params.id)
    next(1111)
})


module.exports = websocketRouter