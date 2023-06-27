const Post=require('../models/db')

const postmethod = (req,res) => {
    //res.send(req.body)
    const post= new Post(req.body)
    post.save()
    .then((result)=>{
        res.redirect("/feed")
    })
    .catch((err)=>{
        console.log(err);
    })
}

const getmethod = (req, res) => {
    Post.find()
    .then((result)=>{
        res.render('feed',{title:"Feed",data:result});
    })
    .catch((err) => {
        console.log(err);
    })
}

const feedid = (req, res) => {
    const Id = req.params.id;
        //res.send(Id)
    Post.findById(Id)
    .then((result) => {
        res.render("details", {title: "Details",post: result})
        //res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports={postmethod,getmethod,feedid}