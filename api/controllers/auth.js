import { db } from "../db.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { Navigate } from "react-router-dom";



export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`surname`,`email`,`password`,`phone`) VALUES (?)";
    const values = [req.body.username,req.body.surname, req.body.email, hash, req.body.phone];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};



export const login = (req, res) => {

//CHECK EXISTING USER OR NOT

const q = "SELECT * FROM users WHERE username = ?"
db.query(q, [req.body.username], (err,data) => {
  if (err) return res.json(err);
  if(data.length === 0 ) return res.status(404).json("User not found!")

  //CHECK PASSWORD
  const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

  if(!isPasswordCorrect) return res.status(400).json("Wrong username or password");

  const token = jwt.sign({id:data[0].id}, "jwtkey")     //jwtkey yerine random generate key yaz
  const  {password, ...other} = data[0] 
  


  res.cookie("access_token", token, {
    httpOnly:true
  }).status(200).json(other)
})

};

export const logout = (req, res) => {


  res.clearCookie("access_token",{
    sameSite:true,
    secure:true

  }).status(200).json("Başarıyla çıkış yapıldı")
};
