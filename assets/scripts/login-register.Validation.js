//iniciar una pagina web
function inicializar(){
    document.getElementById('btn-login').addEventListener('click',validarCredenciales);
    document.getElementById('btn-register').addEventListener('click',validarCredenciales);
}

function validarCredenciales(){
    //email
    let email = document.getElementById('email');
    let validarCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //contrasena
    let clave =document.getElementById('password').value;

    if (validarCorreo.test(email.value)) {
        window.location="LoginMedico.html";
        return true;
    } else {
        alert('Datos incorrectos');
        return false;
    }
}

window.addEventListener('load',inicializar);