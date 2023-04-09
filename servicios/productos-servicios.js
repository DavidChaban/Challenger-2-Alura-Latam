
 
//get
const listaProductos = () => {
    fetch("http://localhost:3000/producto")
    .then(response => response.json())
    .catch(error => console.log(error))
}

// post

const crearProductos = (image, name, price, description,id) => {
    fetch('http://localhost:3000/producto',{
    method:" POST",
    headers: {
            "Content-type": "application/son"
    },
    body: JSON.stringify({
        image,
        price,
        name,
        description,
        id,
        link:'../screens/edit-product.html'
    })
    }).then(response => {
        if(response.ok){
            return response.body
        }
    })
    throw new Error("No se pudo crear el producto")

}






// document.querySelector('.input-icono').addEventListener('click', function() {
//     this.querySelector('input').focus();
// }); 

// console.log(fetch("data.json"));

export const productoServicios = {
    listaProductos,
    crearProductos
}


 




















