const express = require('express');
const app = express();
const port = 3000

const bodyParser = require('body-parser')

const todoRoutes = require('./routes/todos')

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.send('basic skeleton for express app')
})

app.use('/api/todos', todoRoutes)


app.listen(port, function(){
    console.log('app is running on port ' + port)
})