const websocket = require('nodejs-websocket')
const brodcast = require('./wesocketServer/brodcast')

const server = websocket.createServer(function(conn){
    console.log("new connection!")

    conn.on("text",function(str){
        console.log("received" + str)
        console.log(typeof str)
        brodcast.brodcast(server,"1111")
    })

    conn.on("close",function(code,reason){
        console.log(reason)
        console.log(code)
        
    })

}).listen(2001)
