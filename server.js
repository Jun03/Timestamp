// server.js
// where your node app starts

// init project
const http = require('http')
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

const api = require('./routes/api')

app.use('/api/v1/',api)
app.use('/',api)
app.use('/api/',api)

app.set('view engine' , 'pug')

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.set('port',port)
server.listen(port, ()=> console.log("API running at {port}"));
