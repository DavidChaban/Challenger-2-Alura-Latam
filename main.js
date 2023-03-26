const app = document.getElementById('app');


const [gameOne, gameTwo, gameThree] = games;


function Card({name,year,genero,stock}) {
    console.log(games);

    const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled");


    return `
    <div class="card my-2">
        <div class="card-body">
        <h5 class="card-title">${name.toUpperCase()}</h5>
        <p class="card-text">${year} - ${genero}</p>
        <a href="#" class="btn  ${btnClass(stock)}">Go somewhere</a>
         </div>
         </div>
    
    `;
}



app.innerHTML = Card(gameOne);
app.innerHTML += Card(gameTwo);
app.innerHTML += Card(gameThree);

const persona = {
    nombre : "David ",
    saludar () {
        setTimeout(() => {

            console.log(`Hola soy ${this.nombre}`);

        } , 2000  )

    },


};
persona.saludar();






