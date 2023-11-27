alert("validacion activa")

const email = document.getElementById("#username")
const pass = document.getElementById("#password")
const form = document.getElementById("#formulario")
const parrafo = document.getElementById("#warnings")

form.addEventListener("submit",e=>{
    alert("empezando a valilar")
    e.preventDefault()
    let warnings = "";
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += 'La contraceña no es valido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})

/*const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	//nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	//telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}




const validarFormulario = (e) => {
    alert("hola de validar")
	switch (e.target.name) {
		case "password":
            alert("funciona")
			//validarCampo(expresiones.password, e.target, 'password');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	/*const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
})*/