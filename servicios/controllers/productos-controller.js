console.log(fetch('("GET","http://localhost:3000/producto");'))

  async function fetchApi(){
    let producto = await fetch('http://localhost:3000/producto');
    producto = await data.json()
    console.log(producto)

  }



const data = (name, image, price, description, id) => {
  const card = document.createElement("div");

  // let card2 = document.getElementById("container-cards")

  


  const contenido = `
          <div class="section-producto">

        <img
          src="${image}"
          class="section-producto1" />
        <p class="section-descripcion">${name}</p>|
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

