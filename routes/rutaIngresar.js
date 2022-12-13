const { Router, request } = require('express')
const { ingresarProducto } = require('../controller/ingresar')
const agregarProducto = require('../helpers/almacenarProductos')

const ruta = Router()

ruta.get('/', ingresarProducto)
ruta.post('/productos', (req ,res)=>{
    const info = req.body
    agregarProducto(info)
    console.log('Producto recibido')
})

module.exports = {
    ruta
}