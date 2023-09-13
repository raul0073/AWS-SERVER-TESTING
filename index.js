import express from 'express'
import cors from 'cors'

const app = express()
app.use(express())
app.use(cors())

app.listen(5001, ()=> console.log('api running on port 5001'))

app.get("/", (req, res)=> res.json('Test completed, you have connected to server !~!!!!@!@~!@!~@'))