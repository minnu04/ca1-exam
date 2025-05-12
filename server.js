const express=require('express')
const app=express()
app.use(express.json())
port=1904

app.get('/',async(req,res)=>{
    res.send("Signup")
})

app.post('/submit',async(req,res)=>{
    try {
       const {username,email,password,dateOfBirth}=req.body
       if(!username) {
        return res.status(400).json("Username cannot be empty")
       }
       if(!email){
        return res.status(401).json("Email cannot be empty")
       }
       if(password.length<8 || password.length>16){
        return res.status(402).json("Password length should be greater than 8 or less than or equal to 16")
       }
    } catch (error) {
       console.log(error) 
    }
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})