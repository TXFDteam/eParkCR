'use strict';

//Parqueos---------------
let parqueo_2 = {
    nombre: 'Parqueo López López',
    ubicacion: 'San José',
    calificacion_promedio: 4.7,
    abierto: true,
    cant_pisos: 2,
    pisos: {
        piso_1: {
            cant_espacios: 7,
            espacios: {
                espacio_1: {
                    id: 'A1',
                    tipo_icono: 0,
                    ocupado: false
                },
                espacio_2: {
                    id: 'A2',
                    tipo_icono: 0,
                    ocupado: true
                },
                espacio_3: {
                    id: 'A3',
                    tipo_icono: 2,
                    ocupado: true
                },
                espacio_4: {
                    id: 'C1',
                    tipo_icono: 1,
                    ocupado: true
                },
                espacio_5: {
                    id: 'C2',
                    tipo_icono: 1,
                    ocupado: true
                },
                espacio_6: {
                    id: 'B1',
                    tipo_icono: 2,
                    ocupado: true
                },
                espacio_7: {
                    id: 'B2',
                    tipo_icono: 2,
                    ocupado: true
                }
            }
        },
        piso_2: {
            cant_espacios: 3,
            espacios: {
                espacio_1: {
                    id: 'A4',
                    tipo_icono: 0,
                    ocupado: false
                },
                espacio_2: {
                    id: 'A5',
                    tipo_icono: 1,
                    ocupado: false
                },
                espacio_3: {
                    id: 'A6',
                    tipo_icono: 2,
                    ocupado: true
                }
            }
        }
    }
};

let parqueo_3 = {
    nombre: 'Parqueo el covid',
    ubicacion: 'San José',
    calificacion_promedio: 3.85,
    abierto: true,
    pisos: {
        piso_1: {
            espacios: 3,
            espacio_1: {
                id: 'A1',
                tipo_icono: 0,
                ocupado: false
            },
            espacio_2: {
                id: 'B1',
                tipo_icono: 1,
                ocupado: false
            },
            espacio_3: {
                id: 'C1',
                tipo_icono: 2,
                ocupado: true
            }
        }
    }
};
//Final parqueos---------------