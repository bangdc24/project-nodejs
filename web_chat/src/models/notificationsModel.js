import mongoose from "mongoose";

let Schema = mongoose.Schema;

let NotificationSchema = new Schema({
    sender: {
        id : String,
        username : String,
        avatar : String
    },

    receiver: {
        id : String,
        username : String,
        avatar : String
    },
    Text : String,
    file : {data: Buffer, contentType: String, fileName: String},
 

    type: String,
    content: String,
    isRead: {type: Boolean, default: false},
    createdAt: {type: Number, default: Data.now}

});

module.exports = mongoose.model("notifications", NotificationSchema);