import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("someone is requestion you " req.ip);
  res.send('respond from umar malik')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})