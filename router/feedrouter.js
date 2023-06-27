const e=require('express')
const r =e.Router()
const feed=require('../controller/feedcont')

//post method
r.post("/feed", feed.postmethod)

r.get("/feed", feed.getmethod)

r.get("/feed/:id", feed.feedid)

module.exports= r