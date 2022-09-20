import express from 'express'
const app = express()
const port = process.env.PORT  || 3000

app.get('/', (req, res) => {
  console.log("someone is requestion you:  "  + req.ip);
  res.send('respond from umar malik  '  +  req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})