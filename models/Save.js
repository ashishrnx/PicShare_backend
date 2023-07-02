const mongoose = require("mongoose")

const SaveSchema = new mongoose.Schema({
    PostedBy:{

    },
    USerId:{

    }
})

module.exports=mongoose.model('SaveSchema',SaveSchema)