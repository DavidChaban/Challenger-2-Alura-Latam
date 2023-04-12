import { productoServicios } from "../productos-servicios"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.querySelector('[data-name]').value
    const image = document.querySelector('[data-image]').value
    const price = document.querySelector('[data-price]').value
    const category = document.querySelector('[data-agregar-category]').value
    const description = document.querySelector('[data-agregar-description]').value
    mostrarMensaje("Producto agregado correctamente.", 'sucess');

    productoServicios.crearProductos(name,image,price,category,description)
    .then(response => {
        window.location.href = "/screens/product.html"
        console.log(response)

    }).catch(error => {
        console.log(error)
    })



})























