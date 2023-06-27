const e= require('express')
const app=e()
app.listen(1001)
app.set("view engine","ejs")
app.set("views","express_ejs")

const data=[{Name:"Hari",Domain:"NodeJS"},{Name:"Praveen",Domain:"MongoDB"},{Name:"Balaji",Domain:"NodeJs"}]

app.get('/',(req,res)=>{
    res.render("index",{title:"Home"})
})

app.get('/about',(req,res)=>{
    res.render("about",{title:"About"})
})

app.get('/feed',(req,res)=>{
    res.render("feed",{title:"Feed",data})
    //console.log(data)
})

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.render("error",{title:"404!"})
})