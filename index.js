// creo il file package.json
// npm init -y

// installo nodemon e modifico script dentro package.json
// npm i nodemon --save-dev
// "start": "nodemon index.js"
// sul terminale lancio npm start

const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.sendFile('homepage.html', {root: __dirname + '/public'});
})

app.get('/about', (req, res)=>{
  res.sendFile('about.html', {root: __dirname + '/public'});
})

app.get('/contatti', (req, res)=>{
  res.sendFile('contatti.html', {root: __dirname + '/public'});
})

app.all('*', (req, res)=>{
  res.sendFile('404.html', {root: __dirname + '/public'});
})

app.listen(3000)