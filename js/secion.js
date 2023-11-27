//alert("el inicio de sesion activo")
function obtenerListaUsuarios(){
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuariosLs'));

    if(ListaUsuarios == null){
        ListaUsuarios = [
            // id,   nombre,   apellido, correo          contraceña, fecha nac, rol
            ['1','Fidel','Choque','fidel@gmail.com','Fidel1234','2003-9-2','1']
        ]
    }
    return ListaUsuarios;
}

function validarCredenciales( pCorreo, pContracenna){
    //alert("ya se estan validando los datos")
    var ListaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i=0;i<ListaUsuarios.length; i++){
        //alert('comparando: '+ListaUsuarios[i][3] + ' y ' + pCorreo + "\ncomparando: "+ListaUsuarios[i][4] +" y "+ pContracenna);
        if(pCorreo == ListaUsuarios[i][3] && pContracenna == ListaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo',ListaUsuarios[i][1] + ' ' + ListaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',ListaUsuarios[i][6]);
        }
    }
    //alert(bAcceso)
    return bAcceso;
}
