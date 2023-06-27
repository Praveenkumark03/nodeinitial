const Post = require('../models/db')

 const newpost = (req,res) => {
    const post = new Post({
        post: "CAR",
        posted_by: "PRAVEEN"
    })
    post.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const allpost = (req,res) => {
    Post.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

const singlepost =(req,res) => {
    Post.findById("649140ddce955543c109be89")
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

const deletepost = (req,res) => {
    Post.findByIdAndDelete("649140ddce955543c109be89")
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

const deleteall = (req,res) => {
    Post.deleteMany()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports={newpost,allpost,singlepost,deletepost,deleteall}