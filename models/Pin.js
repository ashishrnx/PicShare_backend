const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema({
    Title:{
        type:String
    },
    Abouts:{
        type:String
    },
    category:{
        type:String
    },
    Images: {
        type:
    },
    UserId: {

    },
    PostedBy:{

    },
    save:{

    },
    SaveComment:{

    }
})

module.exports=mongoose.model('PinSchema',PinSchema)