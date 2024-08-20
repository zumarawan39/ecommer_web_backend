let mongoose=require("mongoose");
let schema=mongoose.Schema({
    name:String,
    email:String,
    phonenumber:Number,
    password:String,
})
let modal=mongoose.model("WebsiteUsers",schema);
let Url="mongodb+srv://seebizbpt0623evdev41:l2Be11O5zei97LtK@tasks.fkxsczr.mongodb.net/";
//sign in work save in db
const savedata = async (data) => {
  await mongoose.connect(Url)
      .then(() => console.log("MongoDB is connected"))
      .catch((err) => console.log("Error connecting to MongoDB:", err));
    const user = new modal({
      name: data.name,
      email: data.email,
      phonenumber:data.phonenumber,
      password:data.password,
    });
    let user1=await user.save();
    console.log(user1);
    return user1;
  };
  //login work  check
const loginUser=async(data)=>{
console.log("front rnd data=>",data);
await mongoose.connect(Url); 
  let result = await modal.find({ email: data.email, password: data.password }); 
  console.log("db login result=>",result);
  if (!result) {
    return false;
  } else {
    return result;
  }
  }
 module.exports={savedata,loginUser};
