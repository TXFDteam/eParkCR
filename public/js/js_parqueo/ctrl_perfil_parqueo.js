'use strict';


let a_inicio_perfil = document.querySelector('#link-inicio');

// if (a_inicio_perfil) {
//     a_inicio_perfil.addEventListener('click', function() {
//         a_inicio_perfil.href = "../../perfil_parqueo.html";
//     })
// };


const input_id = document.querySelector('#id');
const input_nombre = document.querySelector('#nombre-duenno-parqueo');
const input_correo = document.querySelector('#correo-parqueo');
const input_cuenta = document.querySelector('#cuenta-bancaria-parqueo');
const input_telefono = document.querySelector('#telefono-duenno-parqueo');

const input_foto_div = document.querySelector('#foto-perfil-dueño');
const input_foto = document.querySelector('#foto-perfil-dueño-img');

const input_estado = document.querySelector('#estado');

const btn_editar_perfil_parqueo = document.querySelector('#btn-editar-perfil-parqueo');


// let nombre_duenno_parqueo = document.querySelector('#nombre-duenno-parqueo');
// let correo_duenno_parqueo = document.querySelector('#correo-parqueo');
// let cuenta_bancaria_duenno_parqueo = document.querySelector('#cuenta-bancaria-parqueo');
// let telefono_duenno_parqueo = document.querySelector('#telefono-duenno-parqueo');

// let foto_perfil_div = document.querySelector('#foto-perfil-dueño');
// let foto_perfil = document.querySelector('#foto-perfil-dueño-img');

let correoD = localStorage.getItem('correo_dueño');
console.log(correoD);
let contrasennaD = localStorage.getItem('contraseña_dueño');
console.log(contrasennaD);



let id_duenno_parqueo;

let mostrar_info = async() => {

    let info_duennos_parqueo = await obtener_duennos_parqueo();



    //d va a ser el  contador para encontrar los duennos de los parqueos
    for (let d = 0; d < info_duennos_parqueo.length; d++) {
        if (correoD == info_duennos_parqueo[d].correo && contrasennaD == info_duennos_parqueo[d].contraseña) {
            id_duenno_parqueo = info_duennos_parqueo[d]._id;
            let foto = document.createElement('img');
            foto.srcset = info_duennos_parqueo[d].foto_perfil
            foto.className = 'foto-perfil';
            foto.classList.add('foto-perfil');
            console.log(id_duenno_parqueo);
            input_nombre.value = info_duennos_parqueo[d].nombre;
            input_correo.value = info_duennos_parqueo[d].correo;
            input_cuenta.value = info_duennos_parqueo[d].cuenta_bancaria;
            input_telefono.value = info_duennos_parqueo[d].telefono;

            input_estado.value = info_duennos_parqueo[d].estado_general;

            // nombre_duenno_parqueo.innerHTML = info_duennos_parqueo[c].nombre;
            // correo_duenno_parqueo.innerHTML = info_duennos_parqueo[c].correo;
            // cuenta_bancaria_duenno_parqueo.innerHTML = info_duennos_parqueo[c].cuenta_bancaria;
            // telefono_duenno_parqueo.innerHTML = info_duennos_parqueo[c].telefono;

            input_foto_div.appendChild(foto);
            break;
        }
    }
};



const obtener_datos = () => {
    modificar_duenno_parqueo(_id, input_id.value, input_correo.value, input_nombre.value, input_cuenta.value, input_foto.value, input_estado.value);
};

mostrar_info();


const editar_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/editar_perfil_parqueo.html');
};


btn_editar_perfil_parqueo.addEventListener('click', editar_perfil_parqueo);
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