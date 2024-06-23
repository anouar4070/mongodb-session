import express from 'express'
const app = express()
const port = 3000

import mongoose from 'mongoose'
import { dbConnection } from './database/dbConnection.js'
import { userModel } from './models/user.model.js'
import userRouter from './modules/user/user.router.js'


dbConnection()



app.use(express.json());

app.use('/v1/api/users',userRouter)







// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))







