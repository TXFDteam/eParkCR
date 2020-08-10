'use strict';
const registrar_solicitud_parqueo = async(pcontador, pcorreo, pnombreParqueo, pcedulaJuridica, ptarifa, phoraApertura, phoraCierre, ppisos, pdiscapacidad, pmotos, pautomoviles, pfacebook, pinstagram, ptwitter, pcoordenadas) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/solicitud-parqueo',
        responseType: 'json',
        data: {
            'id': pcontador,
            'correo': pcorreo,
            'nombre': pnombreParqueo,
            'n_identificacion': pcedulaJuridica,
            'tarifa_x_hora': ptarifa,
            'hora_apertura': phoraApertura,
            'hora_cierre': phoraCierre,
            'pisos': ppisos,
            'espacios_discapacidad': pdiscapacidad,
            'espacios_motos': pmotos,
            'espacios_automoviles': pautomoviles,
            'redes_sociales': {
                'facebook': pfacebook,
                'instagram': pinstagram,
                'twitter': ptwitter

            },
            'coordenadas': pcoordenadas

        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

const obtener_parqueos = async() => {
    let parqueos;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-parqueos',
            responseType: 'json'
        })
        .then((response) => {
            parqueos = response.data.lista_parqueos;
        })
        .catch((error) => {
            console.log(error);
        });
    return parqueos;
};