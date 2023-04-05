const express = require('express')
const app = express()
const mongoose=require('mongoose')
const empModel=require('./models/employeemodel')

app.use(express.json())

//route
app.get('/', (req, res) => {
    res.send("Node app running in 3000 port")

})

app.get('/news', (req, res) => {
    res.send("hello world")

})

//create an entry
app.post('/employee',async (req,res)=>{
    try {
    const employee= await empModel.create(req.body)
    res.status(200).json(employee)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
    
   
})

//fetch all the employees data
app.get('/employees',async (req,res)=>{
    try {
    const employees= await empModel.find({})
    res.status(200).json(employees)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
    
   
})

// fetch employee data by ID
app.get('/employee/:id',async (req,res)=>{
    try {
    const {id}= req.params
    const employee= await empModel.findById(id)
    res.status(200).json(employee)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
    
   
})

//update or edit employee details

app.put('/employee/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const employee= await empModel.findByIdAndUpdate(id,req.body)
        if(!employee){
            res.status(404).json({message:'employee not found'})
       }
       const updatedEmp= await empModel.findByIdAndUpdate(id,req.body)

       res.status(200).json(updatedEmp);
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//delete employeedetails

app.delete('/employee/:id', async(req,res)=>{
    try {
        const {id}=req.params
        const employee= await empModel.findByIdAndDelete(id);
        if(!employee){
            res.status(404).json({message:'employee not found'})
       }
       res.status(200).json({message: 'successfully Deleted'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



mongoose.connect('mongodb+srv://admin:musquare123@nodeapp.usye39c.mongodb.net/?retryWrites=true&w=majority')
  .then(() => 
  {console.log('Connected to Database')}
  )
  .catch((error)=>console.log(error))

  app.listen(8080)