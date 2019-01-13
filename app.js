const express = require('express')
const app = express()


const websocketRouter = require('./routes/wobsocket.route')
const userRouter = require('./routes/user.route')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const initAll = require('./services/initProject/init.service')

global.globalAllUsers = []
initAll.getUsers()


app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cookieParser());//运用cookie解析的中间件
// app.use(bodyParser.text());


app.use('/websocket',websocketRouter)
app.use('/user',userRouter)




app.listen(2000,()=>console.log("example listening on port 2000"))