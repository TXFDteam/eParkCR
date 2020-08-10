'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

if (a_inicio_perfil) {
    a_inicio_perfil.addEventListener('click', function() {
        a_inicio_perfil.href = "../../perfil_parqueo.html";
    })
};



const btn_editar_perfil_parqueo = document.querySelector('#btn-editar-perfil-parqueo');

const editar_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/editar_perfil_parqueo.html');
};


btn_editar_perfil_parqueo.addEventListener('click', editar_perfil_parqueo);

let foto_perfil_div = document.querySelector('#foto-perfil-dueño');
let foto_perfil = document.querySelector('#foto-perfil-dueño-img');


let nombre_duenno_parqueo = document.querySelector('#nombre-duenno-parqueo');
let correo_duenno_parqueo = document.querySelector('#correo-parqueo');
let cuenta_bancaria_duenno_parqueo = document.querySelector('#cuenta-bancaria-parqueo');
let telefono_duenno_parqueo = document.querySelector('#telefono-duenno-parqueo');


let correo = localStorage.getItem('correo_dueño');
console.log(correo);
let contrasenna = localStorage.getItem('contraseña_dueño');
console.log(contrasenna);


let mostrar_datos_dueño = async() => {

    let info_duennos_parqueo = await obtener_duennos_parqueo();



    //d va a ser el  contador para encontrar los duennos de los parqueos
    for (let c = 0; c < info_duennos_parqueo.length; c++) {
        if (correo == info_duennos_parqueo[c].correo && contrasenna == info_duennos_parqueo[c].contraseña) {
            /* let foto = document.createElement('img');
             foto.srcset = info_duennos_parqueo[c].foto_perfil
                 //foto.className= 'foto-perfil';
             foto.classList.add('foto-perfil');*/

            nombre_duenno_parqueo.innerHTML = info_duennos_parqueo[c].nombre;
            correo_duenno_parqueo.innerHTML = info_duennos_parqueo[c].correo;
            cuenta_bancaria_duenno_parqueo.innerHTML = info_duennos_parqueo[c].cuenta_bancaria;
            telefono_duenno_parqueo.innerHTML = info_duennos_parqueo[c].telefono;

            //foto_perfil_div.appendChild(foto);
            break;
        }
    }
};
mostrar_datos_dueño();


/*
for (let d = 1; d <= duennos_parqueos.cant_duennos; d++) {
    let identificador_duenno = ('duenno_parqueo' + d);
    if (duennos_parqueos[identificador_duenno].correo_duenno == correo && duennos_parqueos[identificador_duenno].contraseña == contrasenna) {

        console.log(duennos_parqueos[identificador_duenno]);

        nombre_duenno_parqueo.innerHTML = duennos_parqueos[identificador_duenno].nombre;
        correo_duenno_parqueo.innerHTML = duennos_parqueos[identificador_duenno].correo_duenno;
        cuenta_bancaria_duenno_parqueo.innerHTML = duennos_parqueos[identificador_duenno].cuenta_bancaria;
        nacimiento_duenno_parqueo.innerHTML = duennos_parqueos[identificador_duenno].fecha_nacimiento;



        console.log(nombre_duenno_parqueo);
        console.log(correo_duenno_parqueo);
        console.log(cuenta_bancaria_duenno_parqueo);
        console.log(nacimiento_duenno_parqueo);


    }

}*/