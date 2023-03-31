const nuevoProducto = (name,image,price, id) =>{
    const card = document.createElement("div")
    const contenido = `
    
    <div class="producto">
      <h1 class="product-name">${name}</h1>
      <img src="${image}" />
      <p class="precio">${price}</p>
      <a class="ver-producto" href="${id}">Ver Producto</a>

    </div>`
    card.innerHTML = contenido
    card.dataset.id = id

    return card



}
const productos = document.querySelector('{data-product}')


