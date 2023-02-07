 require('dotenv').config()
//  async errors
 const express= require("express")
 const app=express()
 const notFoundMiddleware=require('./middleware/not-found')
 const errorMiddleware=require('./middleware/error-handler')

app.use(express.json())

app.get('/',(req,res)=>{
res.send('<h1>Store Api</h1>')
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)

port=process.env.PORT || 5000
const start= async ()=>{
    try {
        // connect DB
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
        })
        
    } catch (error) {
        
    }
}
start()
