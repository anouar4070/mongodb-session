import { userModel } from "../../models/user.model.js";



const getAllUsers = async (req, res) =>{
 
    // await userModel.insertMany({name: "Anouar", email: "anouar@gmail.com", password: "123", age: 20})
  
    let users = await userModel.find({})
    // let users = await userModel.findByIdAndUpdate(
    //   { _id: "66746a6648db03d1f9b0599e"},
    //   { name: "Pingu"}, {new: true}
    // );
    //await userModel.findByIdAndDelete({ _id: "66746a6648db03d1f9b0599e"})
  
    res.json({ message: "Success", users });
  
}

const addUser = async (req, res) =>{
  
    const { name, email, password, age } = req.body;
    await userModel.insertMany({ name, email, password, age });
    res.json({ message: "success" });
  
}

const updateUser = async (req, res) => {
  const { name, email, password, age, _id } = req.body;
  let user = await userModel.findByIdAndUpdate(
    { _id },
    { name, email, password, age },
    { new: true }
  );
  res.json({ message: "success", user });
}

const deleteUser = async (req, res) => {
  const { _id } = req.body;
  await userModel.findByIdAndDelete({ _id });
  res.json({ message: "success" });
}

export {getAllUsers, addUser, updateUser, deleteUser}