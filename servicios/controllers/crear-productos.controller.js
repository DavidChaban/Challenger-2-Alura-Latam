import { productoServicios } from "../productos-servicios"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.querySelector('[data-name]').value
    const url = document.querySelector('[data-url]').value
    const price = document.querySelector('[data-price]').value
    const description = document.querySelector('[data-description]').value

    productoServicios.crearProductos(name,url,price,description)
    .then(response => {
        window.location.href = "/screens/index.html"
        console.log(response)

    }).catch(error => {
        console.log(error)
    })



})























