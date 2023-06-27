const e= require('express')
const app=e()
const mongoose=require('mongoose')
const Post=require('../refresh/models/db')
// const funtion=require("./controller/funcont")
// const feed=require('./controller/feedcont')

const fun=require("./router/funrouter")
const fee=require("./router/feedrouter")

app.use(fee)
app.use(fun)

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

// //functions
// app.get("/new-post", funtion.newpost)

// app.get("/all-post", funtion.allpost)

// app.get("/single-post", funtion.singlepost)

// app.get("/delete-post", funtion.deletepost)

// app.get("/delete-all", funtion.deleteall)

// //post method
// app.post("/feed", feed.postmethod)

// app.get("/feed", feed.getmethod)

// app.get("/feed/:id", feed.feedid)


// app.use((req,res)=>{
//     res.render("error",{title:"404!"})
// })