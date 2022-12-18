const { response, request } = require('express') 

const ingresarProducto = (req,res=response)=>{
    res.render('ingresar')
}
const verProductos = (req,res=response)=>{
    res.render('consultar')
}

module.exports = {
    ingresarProducto,
    verProductos
}