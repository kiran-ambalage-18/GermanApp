const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>This is about pagee</h1>')
  })

  app.get('/contactus', (req, res) => {
    res.send('<h1>Contact me on 8007776439</h1>')
  })

  app.post('/', (req, res) => {
    console.log("data reciecved")
    res.send("received");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

