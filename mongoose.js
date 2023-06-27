const e= require('express')
const app=e()
const mongoose=require('mongoose')
const Post=require('../refresh/models/db')

app.set("view engine","ejs")
app.set("views","express_ejs")

const data=[{Name:"Hari",Domain:"NodeJS"},{Name:"Praveen",Domain:"MongoDB"},{Name:"Balaji",Domain:"NodeJs"}]

const dburl='mongodb://127.0.0.1/Rahul'
mongoose.connect(dburl)
.then((result)=>{
    console.log("Database Connected")
    app.listen(1001)
}).catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.render("index",{title:"Home"})
})

app.get('/about',(req,res)=>{
    res.render("about",{title:"About"})
})

app.get('/create',(req,res)=>{
    res.render("create",{title:"Create"})
})

app.get('/feed',(req,res)=>{
     res.render("feed",{title:"Feed",data})  
})

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

//functions
app.get("/new-post", (req,res) => {
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
})

app.get("/all-posts", (req,res) => {
    Post.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/single-post", (req,res) => {
    Post.findById("6490450a27be2b8da103b306")
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/delete-post", (req,res) => {
    Post.findByIdAndDelete("6490450b27be2b8da103b30a")
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/delete-all", (req,res) => {
    Post.deleteMany()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})
 
app.use((req,res)=>{
    res.render("error",{title:"404!"})
})
