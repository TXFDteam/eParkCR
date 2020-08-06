'use strict';
const registrar_solicitud_parqueo = async(pcorreo, pnombreParqueo, pcedulaJuridica, ptarifa, phoraApertura, phoraCierre, ppisos, pfacebook, pinstagram, ptwitter, pcoordenadas) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/dueño-parqueo/solicitud-parqueo',
        responseType: 'json',
        data: {
            'id': 'p' + contador_solicitudes_parqueo,
            'correo': pcorreo,
            'nombre': pnombreParqueo,
            'n_identificacion': pcedulaJuridica,
            'tarifa_x_hora': ptarifa,
            'hora_apertura': phoraApertura,
            'hora_cierre': phoraCierre,
            'pisos': ppisos,
            'redes_sociales': {
                'facebook': pfacebook,
                'instagram': pinstagram,
                'twitter': ptwitter

            },
            'coordenadas': pcoordenadas,
            'estado_general': 'ACTIVAR'

        }

    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};