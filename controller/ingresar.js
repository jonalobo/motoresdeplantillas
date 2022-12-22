const { response, request } = require('express') 
const {productos} = require('../helpers/almacenarProductos')

const ingresarProducto = (req,res=response)=>{
    res.render('ingresar')
}
const verProductos = (req,res=response)=>{
    console.log(productos)
    res.render('consultar',{productos, existe:true})
}

module.exports = {
    ingresarProducto,
    verProductos
}