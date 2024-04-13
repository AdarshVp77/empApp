const express = require("express");
const router = express.Router();
const UserModel = require("../Models/user");
const Employee =require("../Models/user");
const { userLogin, userData } = require("../Controller/employeeController");

router.post("/signup", async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      res.json(user);
    } catch (err) {
      console.error("Error occurred while signing up:", err);
      res.status(400).json(err);
    }
  });
  
  router.post("/login",userLogin );
   router.get("/employees",userData );
  
  
  
 
  module.exports = router;