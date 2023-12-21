const mongoose  = require('mongoose')
const validator = require('validator')
const    bcrypt    = require('bcrypt')
const {Schema} = mongoose;


const AuthSchema  = new Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
    },
    IsAdmin:{
        type: Boolean,
        default:false
    },
    IsCustomer :{
        type:Boolean,
        default:true
    },
    IsSeller:{
        type:Boolean,
        default:false
    },
    image:{
        type: String,
        required: true,
        default:
          "../uploads/avatar.jpg",
    },
    IsFile:{
        type:Boolean,
        required:true,
        default:false
    },
},{timestamps:true})




AuthSchema.statics.SignUp =async function(firstName,lastName,email,password,file){
   
        if(!validator.isEmail(email)){
            throw Error("this email not valid...")
         }
         else if(!validator.isStrongPassword(password)){
            throw Error("this password not Strong enough...")
         }
    
         const exist = await this.findOne({email})
         if(exist){
            throw Error('this email already used...')
         }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
     if(!file){
        const new_user = await this.create({firstName,lastName,email,password:hash})
        return new_user
     }
     const new_user = await this.create({firstName,lastName,email,password:hash,image:file.path,IsFile:true})
     return new_user
 
   
      
}  



AuthSchema.statics.LogIn = async function(email,password) {

    if(!validator.isEmail(email)){
       throw Error('this email not valid...')
    }
    const email_exist = await this.findOne({email})
    if(!email_exist){
       throw Error("this email not exist")
    }   

    const match  = await bcrypt.compare(password,email_exist.password)
    if(!match){
       throw Error('this password not match...')
    }
     
    return email_exist
}





module.exports = mongoose.model('user',AuthSchema)