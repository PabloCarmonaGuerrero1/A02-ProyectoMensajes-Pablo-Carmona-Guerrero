
const mensajeinput = document.querySelector("#mensaje")
const listamensajes = document.querySelector("#lista-mensajes")
const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const mensaje=mensajeinput.value;
        if(mensaje){
            let mensajes = JSON.parse(localStorage.getItem("mensajes")) || []
            mensajes.push(mensaje)
            localStorage.setItem("mensajes",JSON.stringify(mensajes))
            mensajeinput.value=""
            mostrarMensajes();
        }
})
function mostrarMensajes() {
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    listamensajes.innerHTML = "";

    mensajes.forEach(function (mensaje, index) {
        const mensajeElement = document.createElement("p");
        mensajeElement.textContent = mensaje;
        const x = document.createElement("button");
        x.textContent = "X";
        x.addEventListener("click", function () {
            borrarMensaje(index); 
        });
        mensajeElement.appendChild(x);
        listamensajes.appendChild(mensajeElement);
    });
}

function borrarMensaje(index) {
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    mensajes.splice(index, 1);
    localStorage.setItem("mensajes", JSON.stringify(mensajes));
    mostrarMensajes(); 
}


