  console.log("JS conectado");

function login() {
    console.log("click detectado");
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    

    if (email == "usuariodeejemplo@hotmail.com"  && password === "123456") {
        localStorage.setItem("logueado", "true");
        window.location.href = "main.html";
    
    } else {
        document.getElementById("mensaje").innerText = "Datos incorrectos, intentelo de nuevo";
    }


}

if (window.location.pathname.includes("main.html")) {
    if (localStorage.getItem("logueado") !== "true") {
        window.location.href = "index.html";
    }
}


function irARegistro() {

    window.location.href = "registro.html";

}