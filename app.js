const express = require('express')
const jwt = require('jsonwebtoken')
const session = require('express-session')
const hashedSecret = require('./crypto/config')
const routes =require('./routes/users')

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//const middlewares = (req,res,next) => {
   //console.log('middleware ejecutado')
    //next()
//}

//app.use(middlewares)

app.use(
    session({
        secret: hashedSecret,
        resave:false,
        saveUninitialized: true,
        cookie: {secure: false}
    })
)

app.use('/',routes)

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });