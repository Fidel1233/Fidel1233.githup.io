//alert("cargo el codigo");

window.addEventListener("DOMContentLoaded",(event) =>{
    console.log("DOM completamente cargando y procesado");

    
    const abrir = document.querySelector("#ingresar")
    //alert(abrir);

    abrir.addEventListener("click", (event) => {
        iniciarSecion();
        
    })
   
});



/*document.querySelector("#ingresar").addEventListener('click',
iniciarSecion);*/



function iniciarSecion(){
    var sCorreo = '';
    var SContrasenna = '';

    var bAcceso = false;
    //alert("se obtuvieron los datps")

    sCorreo = document.querySelector('#username').value;
    sCorreo = validargmail(sCorreo);
    SContrasenna = document.querySelector('#password').value;

    //alert("se obtubo los datos: " + sCorreo + SContrasenna);
    bAcceso = validarCredenciales(sCorreo,SContrasenna);
    if(bAcceso == true){
        ingresar();
    }
}
function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    //alert("ya se entro en el boolean de ingresa: " + rol)
    switch(rol){
        case '1':
            window.location.href = 'admin.html';
            break;
        case '2':
            window.location.href = '#'
            break;
    }
}

function validargmail(input) {
    var patron = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (patron.test(input)) {
        return input;
    } else {
        alert("Correo invalido");
        return "";
    }
}