const wesocket = require('nodejs-websocket')


const websocketOpearte = {

    brodcast:function(server,msg){
        server.connections.forEach(element => {
            element.sendText(msg)
        });
    }

}

module.exports = websocketOpearte