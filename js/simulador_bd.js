'use strict';


//Parqueos---------------
let parqueos = {
    cant_parqueos: 3,
    parqueo_1: {
        nombre: 'Parqueo la maravilla',
        ubicacion: 'San José',
        calificacion_promedio: 5,
        abierto: false,
        cant_pisos: 1,
        pisos: {
            piso_1: {
                cant_espacios: 8,
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
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'A4',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'B1',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'B2',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_7: {
                        id: 'C1',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_8: {
                        id: 'C2',
                        tipo_icono: 2,
                        ocupado: true
                    }
                }
            }
        }
    },

    parqueo_2: {
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
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'C1',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'C2',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'B1',
                        tipo_icono: 2,
                        ocupado: false
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
    },

    parqueo_3: {
        nombre: 'Parqueo el Covid',
        ubicacion: 'San José',
        calificacion_promedio: 3.85,
        abierto: true,
        cant_pisos: 1,
        pisos: {
            piso_1: {
                cant_espacios: 9,
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
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'C1',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'C2',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'B1',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_7: {
                        id: 'B2',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_8: {
                        id: 'B3',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_9: {
                        id: 'B4',
                        tipo_icono: 2,
                        ocupado: true
                    }
                }
            }
        }
    },
};
//Final parqueos---------------


//USUARIOS------------------
let usuarios = {

};

let empresas = {
    lista_empresas: {
        empresa_1: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '111',
            nombre_empresa: 'Adidas',
            convenio: '11'
        },
        empresa_2: {
            correo_empresa: 'x2@gmail.com',
            cedula_empresa: '112',
            nombre_empresa: 'Banco Nacional',
            convenio: '12'
        },
        empresa_3: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '113',
            nombre_empresa: 'Banco popular',
            convenio: '13'
        }
    }
};