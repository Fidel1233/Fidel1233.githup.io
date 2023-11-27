//alert("cargo este codigo")

window.addEventListener("DOMContentLoaded",(event) =>{
    console.log("DOM completamente cargando y procesado");

    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir")
    const cerrar = document.querySelector("#cerrar")

    abrir.addEventListener("click", (event) => {
        nav.classList.add("visible");
        
    })
    cerrar.addEventListener("click", (event) => {
        nav.classList.remove("visible");
        
    })
});