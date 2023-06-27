const e= require('express')
const app=e()
const mongoose=require('mongoose')
const Post=require('../refresh/models/db')

app.set("view engine","ejs")
app.set("views","express_ejs")

app.use(e.urlencoded({extended: true}));

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

// app.get('/feed',(req,res)=>{
//      res.render("feed",{title:"Feed",data})  
// })

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

//post method
app.post("/feed",(req,res)=>{
    //res.send(req.body)
    const post= new Post(req.body)
    post.save()
    .then((result)=>{
        res.redirect("/feed")
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get("/feed", (req, res) => {
    Post.find()
    .then((result)=>{
        res.render('feed',{title:"Feed",data:result});
    })
    .catch((err) => {
        console.log(err);
    })
})

app.use((req,res)=>{
    res.render("error",{title:"404!"})
})