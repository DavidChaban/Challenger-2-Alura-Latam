const crearNuevaLinea = (image, name, price, description,id) => {
    const linea = document.createElement("div")
    const contenido =   `
          <div class="section-producto">

        <img
          src="${image}"
          class="section-producto1" alt="${name}" />
        <p class="section-descripcion">${name}</p>
        <p class="section-precio">$${price}</p>
        <p class="producto-descripcion2">${description}
        </p>
        <a class="section-ver-producto" href="../screens/product.html?id=${id}">Ver Producto</a>

      </div>
      
    `;
    linea.innerHTML = contenido;
    return linea;
}
    const div = document.querySelector("[data-product]")


const http = new XMLHttpRequest();
// Abrir http (metodo , url)

//crud - Metodos http : 
//create - Post
//read - Get
//update - Put - Patch
//delete - Delete

http.open("GET","http://localhost:3000/producto");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    let counter = 0;
    // console.log(data);
    data.forEach((productos) => {
      if (counter < 6) {
      const nuevaLinea =  crearNuevaLinea(productos.image,productos.name,productos.price,productos.description,productos.id);
      div.appendChild(nuevaLinea);
      counter++;
      }

    });
    // console.log(data);

};
console.log(http);





// get
// const listaProductos = () => {
//     fetch("http://localhost:3000/producto")
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

//  post

// const crearProductos = (image, name, price, description,id) => {
//     fetch('http://localhost:3000/producto',{
//     method:" POST",
//     headers: {
//             "Content-type": "application/son"
//     },
//     body: JSON.stringify({
//         image,
//         price,
//         name,
//         description,
//         id,
//         link:'../screens/edit-product.html'
//     })
//     }).then(response => {
//         if(response.ok){
//             return response.body
//         }
//     })
//     throw new Error("No se pudo crear el producto")

// }

// export const productoServicios = {
//     listaProductos,
//     crearProductos
// }


 




















