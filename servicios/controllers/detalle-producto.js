import {productoServicios} from "../productos-servicios";


const containerProducto = document.querySelector("[data-vista-producto]");

const url = new URL(window.location);
const idURL = url.searchParams.get("id");


function obtenerInfoProducto(nombre, precio, descripcion, imagen) {

    if (idURL === null) {
        window.location.href = "./index.html";
    }

    const vistaProducto = document.createElement("div");
    vistaProducto.classList.add("vista_producto");

    const contenido = `
            <img src="${imagen}" alt="${nombre}" class="vista_producto-img">
            <div class="vista_producto-texto">
                <h2 class="productos_listado-titulo">${nombre}</h2>
                <p class="producto-precio">${precio}</p>
                <p class="vista_producto-parrafo">${descripcion}</p>
            </div>
        `;


    vistaProducto.innerHTML = contenido;

    return vistaProducto;
}



productoServicios.listaProductos()
    .then(async respuesta => {

        for (let i = 0; i < respuesta.length; i++) {

            const id = await respuesta[i].id;
            const image = await respuesta[i].imagen;
            const name = await respuesta[i].nombre;
            const description = await respuesta[i].descripcion;
            const price = await respuesta[i].precio;

            if ((id) === idURL) {
                
                const mostrarProducto = obtenerInfoProducto(name, price, description, image, id);
                containerProducto.appendChild(mostrarProducto);

                return;
            }
        }
    })



function masProductos(id, name, image, price, link) {

    const otrosProductos = document.createElement("div");
    otrosProductos.classList.add("product-card");
    const contenido = `
    <a href="${link}?id=${id}" data-verproducto><img src="${image}" alt="${name}" class="producto_img"></a>
    <div class="product-info">
        <p>${name}</p>
        <p>${price}</p>
        <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
    </div>
    `;

    otrosProductos.innerHTML = contenido;

    return otrosProductos;
}

const contenedorProductos = document.querySelector("[data-mas-productos]");

productoServicios.listaProductos()
    .then(async respuesta => {

        let contador = 0;
        let nuevoArray = [];
        do {
            const max = respuesta.length;
            const aleatorio = Math.floor(Math.random() * max);
            nuevoArray.push(respuesta[aleatorio]);

            contador++;

        } while (contador < 6);

        nuevoArray.forEach(({ id, name, image, price, link }) => {

            const productoAleatorio = masProductos(id, name, image, price, link);
            contenedorProductos.appendChild(productoAleatorio);

        })

    })
    .catch(error => console.log(error));