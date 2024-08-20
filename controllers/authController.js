let{savedata,loginUser}=require("../modals/auth");
let jwt = require("jsonwebtoken");
let secretKey = "your-secret-key";
let SignUp= async(req, res) => {
    let data=req.body;
   await savedata(data)
    res.json(data);
};
let loginData=async(req,res)=>{
    let data=req.body;
  let email=data.email;
  let check=await loginUser(data);
  console.log("db response=>",check)
  if (check == false) {
    res.send({ message: "Your passsword is not correct" });
  } else {
    jwt.sign({ email }, secretKey, { expiresIn: "1h" }, (err, token) => {
      if(err){
       res.json("JWT Expire");
      }else{
      return res.status(200).json({ token: token});
      }
    });
  };
};
module.exports={SignUp,loginData}