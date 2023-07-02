const mongoose= require("mongoose")

const UserSchema =new mongoose.Schema({
    UserName :{
        type:{
            
        }
    },
    Image :{

    },
    Email :{

    }
})

module.exports=mongoose.model('UserSchema',UserSchema)