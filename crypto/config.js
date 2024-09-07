const bcrypt= require('bcrypt')
const crypto = require('crypto')

const secret = crypto.randomBytes(64).toString('hex');//genera un secreto aleatorio de 128 caracteres hexadecimales
const hashedSecret = bcrypt.hashSync(secret, 10);//utiliza bcrypt para crear un hash del secreto generado anteriormente.
//los dos argumentos de hasSync: secret: es el dato hash; 10: es el nº de saltos; cuanto + ^ son los saltos
//+ seguro, pero tambien tarda + tiempo en generarse.

module.exports = hashedSecret