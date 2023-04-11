import {productoServicios} from "../productos-servicios";

const containerStar = document.querySelector("[data-product]");
const containerConsolas = document.querySelector("[data-product2]");
const containerDiversos = document.querySelector("[data-product3]");

const nuevoProducto = (name, image, price,category, description, id,link) => {
  const card = document.createElement("div");
  card.classList.add("product-card")
  // let card2 = document.getElementById("container-cards")

  


  const contenido = `

  <a href="${link}?id=${id}" data-verproducto><img src="${imagen}" alt="${nombre}"></a>
          <div class="section-producto">

        <img
          src="${image}"
          class="section-producto1" />
        <p class="section-descripcion">${name}</p>|
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a  href="${link}?id=${id}" type="button" class="section-ver-producto data-verproducto" >Ver Producto</a>

      </div>
      
    `;
   
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};


productoServicios.listaProductos()
    .then(async respuesta => {
        try {

            await respuesta.forEach(({ name, image, price,category, description, id,link }) => {
                const nuevaLinea = nuevoProducto(name, image, price,category, description, id,link);

                switch (category) {
                    case "Star War":
                        containerStar.appendChild(nuevaLinea);
                        break;

                    case "Consolas":
                        containerConsolas.appendChild(nuevaLinea);
                        break;

                    case "Diversos":
                        containerDiversos.appendChild(nuevaLinea);

                    default:
                        category = "";
                        break;
                }
            })
        } catch (error) {
            console.log(error)
        }

    })


