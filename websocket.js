const websocket = require('nodejs-websocket')
const brodcast = require('./wesocketServer/brodcast')

const server = websocket.createServer(function(conn){
    console.log("new connection!")

    conn.on("text",function(userData){
        console.log("received" + userData)
        var data = JSON.parse(userData);
        switch(data.type){
            case "setname":
                conn.name = data.userMsg.username
                conn.nickname = data.userMsg.nickname
                brodcast.brodcast(server,data.userMsg.nickname + "加入了聊天空间哦！！！！")
                break
            case "chat":
                console.log(conn.nickname + '说:'+ data.text)
                brodcast.brodcast(server,conn.nickname + '说:'+ data.text)
                break
            default:
                brodcast.brodcast(server,"欢迎来到这里！！")
        }
    })

    conn.on("close",function(code,reason){
        console.log(reason)
        console.log(code)
        brodcast.brodcast(server,conn.name + "离开了聊天房间！！！")
        
    })

    conn.on("error",function(err){
        console.error(err)
          
    })

}).listen(2001)
