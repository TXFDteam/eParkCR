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

let correo_actual = localStorage.getItem('correo');
let contrasenna_actual = localStorage.getItem('contrasenna');
console.log(correo_actual);

console.log(contrasenna_actual);

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
    nueva_plantilla = nueva_plantilla.replace('[FECHA_VENCIMIENTO]', p_convenio.fecha_vencimiento);
    nueva_plantilla = nueva_plantilla.replace('[EMPLEADOS]', p_convenio.cant_empleados);
    nueva_plantilla = nueva_plantilla.replace('[DESCUENTO]', p_convenio.porcentaje_descuento);

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
let mostrar_convenios = () => {
    tabla_convenios.innerHTML = '';
    for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
        let identificador_empresa = ('empresa_' + i);

        if (empresas.lista_empresas[identificador_empresa].correo_empresa == correo_actual && empresas.lista_empresas[identificador_empresa].contrasenna_empresa == contrasenna_actual) {

            for (let i = 1; i <= convenios_empresa.cant_convenios; i++) {
                let identificador_convenio = ('convenio' + i);
                if (empresas.lista_empresas[identificador_empresa].nombre_empresa == convenios_empresa[identificador_convenio].empresa) {

                    let identificador_convenio = ('convenio' + i);
                    console.log(identificador_convenio);
                    crear_cuadro_convenio(convenios_empresa[identificador_convenio]);
                    break;
                }
            }
        }

    }
};
mostrar_convenios();