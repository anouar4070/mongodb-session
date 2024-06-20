import express from 'express'
const app = express()
const port = 3000

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/node_anouar')
.then(()=>{
  console.log("database connected");
})
.catch((err)=> {
  console.log("database error");
});

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number
})

const userModel = mongoose.model('user', userSchema )

app.get('/', async (req, res) => {
 // await userModel.insertMany({name: "Anouar", email: "anouar@gmail.com", password: "123", age: 20})

   let users = await userModel.find()
  res.json({message: "Success", users} )
}
)


// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))







