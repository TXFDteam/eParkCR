'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_parqueo.html";
    })
};


let nombre_duenno_parqueo = document.querySelector('#nombre-duenno-parqueo');
let correo_dueno_parqueo = document.querySelector('#correo-parqueo');
let cuenta_bancaria_duenno_parqueo = document.querySelector('#cuenta-bancaria-parqueo');
let nacimiento_duenno_parqueo = document.querySelector('#nacimiento-duenno-parqueo');
let contrasenna_duenno_parqueo = document.querySelector('#contrasenna-duenno-parqueo');


let correo = localStorage.getItem('correo');
console.log(correo);
let contrasenna = localStorage.getItem('contrasenna');
console.log(contrasenna);


//d va a ser el  contador para encontrar los duennos de los parqueos

for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
    let identificador_duenno = ('duenno_parqueo' + d);
    if (duennos_parqueos[identificador_duenno].correo_duenno == correo && duennos_parqueos[identificador_duenno].contraseña == contrasenna) {

        console.log(duennos_parqueos[identificador_duenno]);

        nombre_duenno_parqueo.innerHTML = duennos_parqueo[identificador_duenno].nombre;
        correo_duenno_parqueo.innerHTML = duennos_parqueo[identificador_duenno].correo_duenno;
        cuenta_bancaria_duenno_parqueo.innerHTML = duennos_parqueo[identificador_duenno].cuenta_bancaria;
        nacimiento_duenno_parqueo.innerHTML = duennos_parqueo[identificador_duenno].fecha_nacimiento;
        contrasenna_duenno_parqueo.innerHTML = duennos_parqueo[identificador_duenno].contraseña;


        console.log(nombre_duenno_parqueo);
        console.log(correo_duenno_parqueo);
        console.log(cuenta_bancaria_duenno_parqueo);
        console.log(nacimiento_duenno_parqueo);
        console.log(contrasenna_duenno_parqueo);

    }

}