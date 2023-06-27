const mongoose = require('mongoose')
const schema =mongoose.Schema
const postSchema = new schema({
    post:{
        type: String,
        required:true
    },
    posted_by:{
        type: String,
        required: true
    }
    },{timestamps:true});
     
     const Post = mongoose.model('Anime',postSchema);
     module.exports=Post