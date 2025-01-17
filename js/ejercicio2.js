let cabecera = document.createElement("h2")
cabecera.textContent = "Manuel Esteban Valdivia"
cabecera.classList.add("encabezado")
document.body.append(cabecera)

let contenedorPrincipal = document.createElement("div")
contenedorPrincipal.classList.add("contenedor")
document.body.append(contenedorPrincipal)

datos.forEach((articulo) => {
    let contenedorArticulo = document.createElement("div")
    contenedorArticulo.classList.add("articulo")

    let nombre = document.createElement("h3")
    nombre.textContent = articulo.nombre
    nombre.classList.add("encabezado")
    contenedorArticulo.append(nombre)

    let descripcion = document.createElement("p")
    descripcion.textContent = articulo.descripcion
    descripcion.classList.add("parrafo")
    contenedorArticulo.append(descripcion)

    let precio = document.createElement("p")
    precio.classList.add("parrafo")
    precio.textContent = articulo.precio
    contenedorArticulo.append(precio)

    let imagen = document.createElement("img")
    imagen.classList.add("imagen")
    imagen.src = articulo.imagen
    imagen.alt = articulo.nombre
    contenedorArticulo.append(imagen)

    let stock = document.createElement("p")
    stock.classList.add("parrafo")
    stock.textContent = articulo.stock
    contenedorArticulo.append(stock)

    contenedorPrincipal.append(contenedorArticulo)
})