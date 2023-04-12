// get

async function listaProductos() {
    return await fetch("http://localhost:3000/productos")
        .then(respuesta => respuesta.json());
};

 // post

async function crearProductos  (image, name, price, description,category,id) {
  return fetch('http://localhost:3000/producto',{
    method:" POST",
    headers: {
            "Content-type": "application/json"
    },
    body: JSON.stringify({
        image,
        price,
        name,
        description,
         category,
        id,
        link:`../screens/edit-product.html`
    })
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")

}

export const productoServicios = {
    listaProductos,
    crearProductos
};


 




















