  console.log("JS conectado");

function login() {
    console.log("click detectado");
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if (email == "usuariodeejemplo@hotmail.com"  && password === "123456") {
        document.getElementById("mensaje").innerText = "Bienvenido!";
    
    } else {
        document.getElementById("mensaje").innerText = "Datos incorrectos, intentelo de nuevo";
    }


}

function irARegistro() {

    window.location.href = "registro.html";

}