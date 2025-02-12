const express = require('express')
const {connectMongoDb} = require('./connection')
const app = express()
const PORT = 8000
const {logReqRes} = require('./middlewares')
const userRouter = require('./routes/user')

connectMongoDb('mongodb+srv://iqra44938:vWAOuchONXPhdaHT@cluster0.mxfbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.use(express.urlencoded({extended:false}))
app.use(logReqRes('log.txt'))
app.use('/user',userRouter)
app.listen(PORT,()=>console.log('server is running'))