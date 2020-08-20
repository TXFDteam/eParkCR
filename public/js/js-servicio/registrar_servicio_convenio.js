'use strict';

const registrar_convenio = async(pparqueo, pporcentaje_convenio, pfecha_creacion_convenio, pfecha_vencimiento_convenio, pempresa) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar_convenio',
        data: {
            'parqueo': pparqueo,
            'porcentaje_convenio': pporcentaje_convenio,
            'fecha_creacion_convenio': pfecha_creacion_convenio,
            'fecha_vencimiento_convenio': pfecha_vencimiento_convenio,
            'empresa': pempresa
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
};

const agregar_usuario = async(pid_empleado, pestado) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/agregar-usuario',
        data: {
            'id_empleado': pid_empleado,
            'estado': pestado
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
};

const obtener_convenios = async() => {
    let convenios;
    // GET request
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar_convenios',
            responseType: 'json'
        })
        .then((response) => {
            convenios = response.data.lista_convenios;
        })
        .catch((response) => {
            console.log(error);

        });

    return convenios;
};




// const modificar_estado_empresa = async(pid, pestado) => {
//     await axios({
//             method: 'put',
//             url: 'http://localhost:3000/api/modificar_empresa',
//             responseType: 'json',
//             data: {
//                 _id: pid,
//                 estado_general: pestado,

//             }
//         })
//         .then((response) => {
//             console.log('Datos modificados correctamente');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };




// const eliminar_empresa = async(pid) => {
//     await axios({
//             method: 'delete',
//             url: 'http://localhost:3000/api/eliminar-empresa',
//             responseType: 'json',
//             data: { _id: pid }

//         })
//         .then((response) => {
//             console.log('La empresa ha sido eliminada');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };