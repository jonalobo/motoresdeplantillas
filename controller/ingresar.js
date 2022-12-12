const { response, request } = require('express') 

const ingresarProducto = (req,res=response)=>{
    res.render('ingresar')
}

module.exports = {
    ingresarProducto
}