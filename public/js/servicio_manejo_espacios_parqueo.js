'use strict';

const actualizar_estado_espacio = (p_id, p_id_piso, p_id_espacio, p_nuevo_estado) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/actualizar-estado-espacio',
        responseType: 'json',
        data: {
            _id: p_id,
            id_piso: p_id_piso,
            id_espacio: p_id_espacio,
            nuevo_estado: p_nuevo_estado
        }
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}