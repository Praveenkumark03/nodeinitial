const e= require('express')
const app=e()
app.listen(1001)

app.get('/',(req,res)=>{
    res.sendFile("index.html",{root:__dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile("about.html",{root:__dirname})
})

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.sendFile("error.html",{root:__dirname})
})