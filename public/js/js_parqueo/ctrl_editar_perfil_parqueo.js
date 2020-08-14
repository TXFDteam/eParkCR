'use strict';


// const btn_volver_perfil_parqueo = document.querySelector('#btn-volver-perfil-parqueo');





// btn_volver_perfil_parqueo.addEventListener('click', volver_perfil_parqueo);

// const btn_guardar_cambios_parqueo = document.querySelector('#btn-guardar-cambios-parqueo');


// const nueva_cuenta_bancaria_parqueo = document.querySelector('#nueva-cuenta-bancaria-parqueo');


// const guardar_cambios_parqueo = () => {

//     //se validara la cuenta bancaria IBAN, en Costa Rica usualmente tienen 20 digitos


//     let expresion_cuenta_bancaria = /^[0-9]{20,20}$/;
//     let error = false;


//     if (expresion_cuenta_bancaria.test(nueva_cuenta_bancaria_parqueo.value)) {
//         console.log('Cuenta correcta');
//         nueva_cuenta_bancaria_parqueo.classList.remove('error');

//     } else {
//         console.log('Cuenta no valida');
//         error = true;
//         nueva_cuenta_bancaria_parqueo.classList.add('error');

//     }



//     if (!error) {

//         Swal.fire(
//             'Perfil actualizado',
//             'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
//             'success'
//         )
//     }

// }






const input_nombre = document.querySelector('#nuevo-nombre-duenno-parqueo');
const input_cuenta = document.querySelector('#nueva-cuenta-bancaria-parqueo');

const boton_guardar_datos_parqueo = document.querySelector('#btn-guardar-cambios-parqueo');

const btn_volver_perfil_parqueo = document.querySelector('#btn-volver-perfil-parqueo');

let correoD = localStorage.getItem('correo_dueño');
let contrasennaD = localStorage.getItem('contraseña_dueño');
let id;
const mostrar_info = async() => {
    let info_duenno_parqueo = await obtener_duennos_parqueo();

    for (let d = 0; d < info_duenno_parqueo.length; d++) {
        if (correoD == info_duenno_parqueo[d].correo && contrasennaD == info_duenno_parqueo[d].contraseña) {
            id = info_duenno_parqueo[d]._id;
            input_nombre.value = info_duenno_parqueo[d].nombre;
            input_cuenta.value = info_duenno_parqueo[d].cuenta_bancaria;

            break;
        }
    }



};




mostrar_info();

const guardar_datos_duenno_parqueo = () => {

    modificar_duenno_parqueo(id, input_nombre.value, input_cuenta.value);
    console.log(id, input_nombre.value, input_cuenta.value);

    Swal.fire(
            'Perfil actualizado',
            'Si ha dejado algún espacio en blanco no requerido, la información se mantendrá como estaba previamente',
            'success'
        )
        .then((willDelete) => {
            if (willDelete) {
                window.location.assign('../../html/htmls-parqueos/perfil_parqueo.html');
            }
        })
};


boton_guardar_datos_parqueo.addEventListener('click', guardar_datos_duenno_parqueo);


const volver_perfil_parqueo = () => {
    window.location.assign('../../html/htmls-parqueos/perfil_parqueo.html');
};

btn_volver_perfil_parqueo.addEventListener('click', volver_perfil_parqueo);