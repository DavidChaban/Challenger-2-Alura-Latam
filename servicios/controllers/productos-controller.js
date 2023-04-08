const nuevoProducto = (name, image, price, description, id) => {
  const card = document.createElement("div");
  const contenido = `
    






     
      <div class="section-producto">

        <img
          src="${image}"
          class="section-producto1" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>

      <div class="section-producto2">
        <img
        src="${image}"
          class="section-producto1" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>

      <div class="section-producto3">
        <img
          src="${image}" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>


      <div class="section-producto4">
        <img
          src="${image}" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>

      <div class="section-producto5">
        <img
          src="${image}" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>



      <div class="section-producto6">
        <img
          src="${image}" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};
const productos = document.querySelector('[data-product]');

