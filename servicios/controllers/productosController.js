const nuevoProducto = (name,image,price,description, id) =>{
    const card = document.createElement("div")
    const contenido = `
    
    <div class="producto-contenedor">

    <img src="${image}"
        class="producto-img" />

    <div class="producto-info">
        <p class="producto-name">${name}</p>
        <p class="producto-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        

    </div>
</div>


<h2 class="productos-h2"> Productos Similares </h2>

<div class="container-cards3">

    <div class="section-producto">

        <img src="https://f.rpp-noticias.io/2021/09/01/1138910alex-motoc-0powk6iairq-unsplashjpg.jpg"
            class="section-producto1" />
        <p class="section-descripcion">Control de PS5</p>
        <p class="section-precio">$20000</p>
        <a class="section-ver-producto" href="">Ver Producto</a>

    </div>

    <div class="section-producto2">
        <img src="https://images.unsplash.com/photo-1620950127852-92592960e363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            class="section-producto1" />
        <p class="section-descripcion">Casco de Darth Vader</p>
        <p class="section-precio">$2900</p>
        <a class="section-ver-producto" href="">Ver Producto</a>
    </div>

    <div class="section-producto3">
        <img src="https://images.unsplash.com/photo-1599002762948-19068b069803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
            class="section-producto1" />
        <p class="section-descripcion">Figura Yoda</p>
        <p class="section-precio">$2500</p>
        <a class="section-ver-producto" href="">Ver Producto</a>
    </div>

    <div class="section-producto4">
        <img src="https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            class="section-producto1" />
        <p class="section-descripcion">Traje de Guardia Imperial </p>
        <p class="section-precio">$1450</p>
        <a class="section-ver-producto" href="">Ver Producto</a>
    </div>

    <div class="section-producto5">
        <img src="https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
            class="section-producto1" />
        <p class="section-descripcion">Baby Yoda - Mandalorian</p>
        <p class="section-precio">$6500</p>
        <a class="section-ver-producto" href="">Ver Producto</a>
    </div>

    <div class="section-producto6">
        <img src="https://images.unsplash.com/photo-1591927675938-b81b071d3e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            class="section-producto1" />
        <p class="section-descripcion">Trajes Soldier coldplay</p>
        <p class="section-precio">$2400</p>
        <a class="section-ver-producto" href="">Ver Producto</a>
    </div>
</div>








    `
    card.innerHTML = contenido
    card.dataset.id = id
    
    return card
    
    
    
  }
const productos = document.querySelector('{data-product}')



// <div class="producto">
//   <h1 class="product-name">${name}</h1>
//   <img src="${image}" />
//   <p class="precio">${price}</p>
//   <a class="ver-producto" href="${id}">Ver Producto</a>
//   <p>${description}</p>
// </div>