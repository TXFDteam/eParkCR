'use strict';

const tabla_convenios = document.querySelector('#cuadros-convenios');

const PLANTILLA_CUADRO = '<div class=\"contenedor-cuadro\"> \n' +

    '<div class=\"contenedor-parqueo\"> \n' +
    '<p>[PARQUEO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-fecha-vencimiento\"> \n' +
    '<p>Fecha de vencimiento: [FECHA_VENCIMIENTO]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-empleados\"> \n' +
    '<p>Cantidad de empleados: [EMPLEADOS]</p> \n' +
    '</div> \n' +
    '<div class=\"contenedor-descuento\"> \n' +
    '<p>Descuento: [DESCUENTO]</p> \n' +
    '</div> \n' +

    '</div>';


let nombre_empresa;

let id;

let correoE = localStorage.getItem('correo_empresa');
let contrasennaE = localStorage.getItem('contraseña_empresa');
console.log(correoE);


const convenios_obtener = async() => {

    let lista_de_convenios = await obtener_convenios();

    return lista_de_convenios;

}

const obtener_nombre_empresa = async() => {



    return nombre_empresa;


}

obtener_nombre_empresa();






console.log(contrasennaE);

const nombre_parqueo = (p_nombre_convenio) => {
    console.log('El convenio es: ' + p_nombre_convenio);

    //Se guarda la variable que dice cuál parqueo se seleccionó.
    localStorage.setItem('convenio_seleccionado', p_nombre_convenio);

    //Se redirige al html que muestra el perfil del parqueo.
    window.location.assign("lista-usuarios-convenio.html");

};

const crear_cuadro_convenio = (p_convenio) => {
    console.log(p_convenio.codigo_convenio);
    let nuevo_cuadro = document.createElement('div');
    //Copia de la plantilla.
    let nueva_plantilla = PLANTILLA_CUADRO;

    nuevo_cuadro.classList.add('estilo-cuadro');
    //Reemplazar los datos en la plantilla por los recibidos como parámetros.
    nueva_plantilla = nueva_plantilla.replace('[PARQUEO]', p_convenio.parqueo);
    nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_convenio.fecha_vencimiento_convenio);
    nueva_plantilla = nueva_plantilla.replace('[EMPLEADOS]', p_convenio.usuarios.length);
    nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_convenio.porcentaje_convenio);

    //Link a lista de usuarios
    let lista_usuarios = document.createElement('a');
    //lista_usuarios.href = "lista-usuarios-convenio.html";
    lista_usuarios.id = p_convenio.parqueo;
    lista_usuarios.innerText = 'Lista de usuarios';

    nuevo_cuadro.innerHTML = nueva_plantilla;
    nuevo_cuadro.appendChild(lista_usuarios);
    tabla_convenios.appendChild(nuevo_cuadro);

    lista_usuarios.addEventListener('click', () => {
        nombre_parqueo(p_convenio.codigo_convenio);
        //lista_usuarios.href = "lista-usuarios-convenio.html";
    });

};
let mostrar_convenios = async() => {


    let convenios_empresa = await obtener_convenios();
    let info_empresas = await obtener_empresas();

    tabla_convenios.innerHTML = '';

    for (let e = 0; e < info_empresas.length; e++) {
        if (correoE == info_empresas[e].correo && contrasennaE == info_empresas[e].contraseña) {
            id = info_empresas[e]._id;
            nombre_empresa = info_empresas[e].nombre;
            console.log(id);
            console.log(nombre_empresa);

            for (let i = 0; i < convenios_empresa.length; i++) {
                if (info_empresas[e].nombre == nombre_empresa) {


                    crear_cuadro_convenio(convenios_empresa[i]);

                }
            }





            break;
        }
    }




};
mostrar_convenios();