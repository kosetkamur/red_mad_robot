const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080

let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.get('/api/users', cors(corsOptions), (req, res) => {
  res.send(
      require('./data.json')
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
