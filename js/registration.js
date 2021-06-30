"use strict"


function autentication() {
    if (searchUser(document.getElementById('inputName').value)) {
        alert("Todo correcto");
        window.open("mostrarTatica.html", "self");
    } else {
        alert("Usuario no Registrado");
    }
}

function register() {
    if (document.getElementById('name').value != "" && document.getElementById('pass').value != "" && document.getElementById('succesPass').value != "") {
        if (document.getElementById('pass').value == document.getElementById('succesPass').value) {
            if (!searchUser(document.getElementById('name').value)) {
                users.push(new user(document.getElementById('name').value, document.getElementById('pass').value));
                alert("Usuario creado con exito");
                window.open("index.html", "self");
            } else {
                alert("Este usuario ya esta registrado");
            }
        } else {
            alert("Las contraseñas no son identicas");
            document.getElementById('pass').value = "";
            document.getElementById('succesPass').value = "";
        }
    } else {
        alert("No pueden haber campos vacios");
    }
}

var users = [];

function searchUser(usuario) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == usuario) {
            return true
        }
    }
    return false;

}

function user(user, pass) {
    this.user = user;
    this.pass = pass;
}