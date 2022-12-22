const productos = []

const agregarProducto = (data) => {
    productos.push(data)
    console.log(productos)
}

module.exports = {
    agregarProducto,
    productos
}