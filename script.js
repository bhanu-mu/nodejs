const express =require('express')
const app=express()

//route
app.get('/blog',(req,res)=>{
    res.send("Node app running in 3000 port, node app is changed")

})

app.listen(3000)