const { Router } = require('express')
const { ingresarProducto } = require('../controller/ingresar')

const ruta = Router()

ruta.get('/', ingresarProducto)
ruta.post('/productos', (req,res)=>{
    console.log(req.body)
    console.log('Producto recibido')
})

module.exports = {
    ruta
}