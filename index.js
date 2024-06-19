// creo il file package.json
// npm init -y

// installo nodemon e modifico script dentro package.json
// npm i nodemon --save-dev
// "start": "nodemon index.js"

const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/about', (req, res)=>{
  res.send('<h1>Pagina About</h1>')
})

app.get('/contatti', (req, res)=>{
  res.send('<h1>Pagina Contatti</h1>')
})

app.all('*', (req, res)=>{
  res.send('<h1>Risorsa non trovata</h1>')
})

app.listen(3000)