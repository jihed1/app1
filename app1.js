
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
//middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/',(req, res) => {
  console.log(req.body);
  if (req.body.pass == '123') {
    res.send ({message: 'welcome'+ req.body.login})
  } else { res.send({message: 'false'}) }
})

app.get('/', function (req, res) {
    console.log('hi')
    res.sendFile(__dirname +'/test.html')
  }) 
 
 
app.listen(3000, err => {
  console.log('server started')
})