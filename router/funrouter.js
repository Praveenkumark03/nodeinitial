const e = require('express')
const r = e.Router()
const funtion=require("../controller/funcont")

//functions
r.get("/new-post", funtion.newpost)

r.get("/all-post", funtion.allpost)

r.get("/single-post", funtion.singlepost)

r.get("/delete-post", funtion.deletepost)

r.get("/delete-all", funtion.deleteall)

module.exports=r