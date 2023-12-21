const Users  = require('../model/Auth')
const JwT    = require('jsonwebtoken')


// TODO:<<-----CreateTokenByUserId-------->>
// const CreateToken = (_id) =>{
//     return JwT.sign({_id},process.env.JWT_SECRET,{expiresIn: '3d'})
// }
// const CreateToken = (_id) =>{
//     return JwT.sign({id:_id},process.env.JWT_SECRET,{expiresIn: 86400})
// }

 const CreateToken = (user) => {
    return JwT.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );
  };

const processToken = async(req,res) =>{
    const {email} = req.body
    try {
        const userProcess = await Users.findOne({email}).then((user) =>{
             return {
                    _id:user._id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    IsAdmin:user.IsAdmin,
                    IsCustomer:user.IsCustomer,
                    IsSeller:user.IsSeller,
                    image:user.image,
                    IsFile:user.IsFile,
                }
            
        })
        
        const token = CreateToken(userProcess)
        res.status(200).json({...userProcess,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
} 


// TODO:<<-----signup-------->>
const signup = async(req,res) =>{

    const {firstName,lastName,email,password} = req.body
    console.log(req.body)
    const arr_errors = []

    if(!firstName){ arr_errors.push('firstName')}
    if(!lastName){arr_errors.push('lastName')}
    if(!email){arr_errors.push('email')}
    if(!password){arr_errors.push('password')}
    if(arr_errors.length > 0) return res.status(400).json(arr_errors)
     
    try {

        const new_user = await Users.SignUp(firstName,lastName,email,password,req.file)
         .then((user) => {
            return{
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                IsAdmin:user.IsAdmin,
                IsCustomer:user.IsCustomer,
                IsSeller:user.IsSeller,
                image:user.image,
                IsFile:user.IsFile,
            }
        })

        const token = CreateToken(new_user)
        res.status(200).json({...new_user,token})

    }catch (error) {
        res.status(400).json({error:error.message})
    }

}

// TODO:<<-----LogIn-------->>
const login = async (req,res) =>{

    const {email,password} = req.body;
    const arr_errors = []

    if(!email){arr_errors.push('email')}
    if(!password){arr_errors.push('password')}
    if(arr_errors.length > 0)return res.status(400).json(arr_errors)
    
    try {
        const userExist = await Users.LogIn(email,password).then((user) => {
            return{
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                IsAdmin:user.IsAdmin,
                IsCustomer:user.IsCustomer,
                IsSeller:user.IsSeller,
                image:user.image,
                IsFile:user.IsFile,
            }
        })

        const token     = CreateToken(userExist)
        res.status(200).json({...userExist,token})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const loginDashboard = async (req,res) =>{

    const {email,password} = req.body;
    const arr_errors = []

    if(!email){arr_errors.push('email')}
    if(!password){arr_errors.push('password')}
    if(arr_errors.length > 0)return res.status(400).json(arr_errors)
    
    try {
        const userExist = await Users.LogIn(email,password).then((user) => {
            return{
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                IsAdmin:user.IsAdmin,
                IsCustomer:user.IsCustomer,
                IsSeller:user.IsSeller,
                image:user.image,
                IsFile:user.IsFile,
            }
        })

        if(!userExist.IsAdmin && !userExist.IsSeller){
            throw Error("you'are not Admin and not Seller")
        }
        const token     = CreateToken(userExist)
        res.status(200).json({...userExist,token})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getUsers = async(req,res) =>{
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




 const UpdateStateUser = async(req,res) =>{
    const {userId,RadioType} = req.params;
    console.log(RadioType)
  try {
       
        // switch(RadioType){
        //     case 'Customer':
        //       await Users.findByIdAndUpdate({_id:userId},{$set:{IsCustomer:true,IsAdmin:false,IsSeller:false}})
        //     case 'Seller' :
        //         await Users.findByIdAndUpdate({_id:userId},{$set:{IsSeller:true,IsCustomer:false,IsAdmin:false}})
        //     case 'Admin' :
        //         await Users.findByIdAndUpdate({_id:userId},{$set:{IsAdmin:true,IsCustomer:false,IsSeller:false}})    
        // }

        if(RadioType == 'Customer'){
            await Users.findByIdAndUpdate({_id:userId},{$set:{IsCustomer:true,IsAdmin:false,IsSeller:false}})
        }
        else if (RadioType =='Seller'){
            await Users.findByIdAndUpdate({_id:userId},{$set:{IsSeller:true,IsCustomer:false,IsAdmin:false}})
        }
        else{
            await Users.findByIdAndUpdate({_id:userId},{$set:{IsAdmin:true,IsCustomer:false,IsSeller:false}})    
        }
      const usersNew = await Users.find()
      res.status(200).json(usersNew)
       
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}




module.exports = {signup,login,loginDashboard,getUsers,UpdateStateUser,processToken}