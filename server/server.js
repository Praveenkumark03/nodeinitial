const h=require('http')
const f=require('fs')
const server=h.createServer((req,res)=>{
    //console.log(req.url)
    //console.log(req.method)

// switch(req.url)
// {
//     case"/":
//     f.readFile("server/index.html",(err,data)=>{
        
//         if(err)
//         console.log(err)
//         else
//         res.end(data)
//     })
//     break

//     case"/about":
//     f.readFile("server/about.html",(err,data)=>{
        
//         if(err)
//         console.log(err)
//         else
//         res.end(data)
//     })
//     break

//     case"/about-me":
//     f.readFile("server/about.html",(err,data)=>{
        
//         if(err)
//         console.log(err)
//         else
//         res.end(data)
//     })
//     break

//     default:
//     f.readFile("server/error.html",(err,data)=>{
        
//         if(err)
//         console.log(err)
//         else
//         res.end(data)
//     })
//     break
// }

let path="server/"
switch(req.url)
{
    case'/':
    path+= "index.html"
    res.statusCode=200
    break

    case'/about':
    path+= "about.html"
    res.statusCode=200
    break

    case'/about-me':
    res.setHeader("location","/about")
    res.statusCode=301
    res.end()

    default:
    path+="error.html"
    res.statusCode=404
    break
} 

f.readFile(path,(err,data)=>{
if(err)
console.log(err)
else
res.end(data)
})

})

server.listen(1000,'localhost',()=>{
    console.log("server created")
})