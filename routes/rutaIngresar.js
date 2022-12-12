const { Router } = require('express')
const { ingresarProducto } = require('../controller/ingresar')

const ruta = Router()

ruta.get('/', ingresarProducto)
ruta.post('/productos', ()=>{
    console.log('first')
})

module.exports = {
    ruta
}