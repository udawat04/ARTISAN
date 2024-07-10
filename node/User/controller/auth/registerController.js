// const Register = require("../../models/registerModel")
const Register = require("../../models/registerModel");
const bcrypt = require("bcrypt");


const registerController = {
    async store (req,res){
        let user;
      
        try{
            const { fullname, email, mobile, password } = req.body;
            console.log(req.body);
            const emailExist = await Register.findOne({email:email})
            if(emailExist){
                return res.status(402).json("email alredy exist")
            }

            const hashPassword = await bcrypt.hash(password,10);

            user = await Register.create({fullname,email,mobile,password:hashPassword})
           console.log(user)
        }
        catch(error){
            res.status(500).json({error:"Server Error",serverError:error});
          
        }
        res.status(200).json(user)
        console.log(user)
    }
}


module.exports = registerController
