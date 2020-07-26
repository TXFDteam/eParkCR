'use strict';

//-------------------------------------
//--------------Parqueos---------------
//-------------------------------------
let parqueos = {
    cant_parqueos: 3,
    parqueo_1: {
        codigo: '11291',
        nombre: 'Parqueo la maravilla',
        duenno_parqueo: 'Jose Pablo Ramirez Soto',
        email: 'contacto@parqueolamaravilla.com',
        cedula_juridica: '12ji2ojd1oid21ijo',
        permiso_funcionamiento: '1289dn2jkawiu91',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion: 'San José',
        calificacion_promedio: 5,
        abierto: false,
        cant_pisos: 1,
        pisos: {
            piso_1: {
                cant_espacios: 33,
                espacios: {
                    espacio_1: {
                        id: 'D1',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_2: {
                        id: 'D2',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_3: {
                        id: 'D3',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'D4',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'D5',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'M1',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_7: {
                        id: 'M2',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_8: {
                        id: 'M3',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_9: {
                        id: 'M4',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_10: {
                        id: 'M5',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_11: {
                        id: 'M6',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_12: {
                        id: 'M7',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_13: {
                        id: 'M8',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_14: {
                        id: 'M9',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_15: {
                        id: 'C1',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_16: {
                        id: 'C2',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_17: {
                        id: 'C3',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_18: {
                        id: 'C4',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_19: {
                        id: 'C5',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_20: {
                        id: 'C6',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_21: {
                        id: 'C7',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_22: {
                        id: 'C8',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_23: {
                        id: 'C9',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_24: {
                        id: 'C10',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_25: {
                        id: 'C11',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_26: {
                        id: 'C12',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_27: {
                        id: 'C13',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_28: {
                        id: 'C14',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_29: {
                        id: 'C15',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_30: {
                        id: 'C16',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_31: {
                        id: 'C17',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_32: {
                        id: 'C18',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_33: {
                        id: 'C19',
                        tipo_icono: 0,
                        ocupado: true
                    }
                }
            }
        }
    },

    parqueo_2: {
        codigo: '11232',
        nombre: 'Parqueo López López',
        duenno_parqueo: 'Ramón Luis López López',
        email: 'contacto@parqueolopezlopez.com',
        cedula_juridica: '12ji2jdjsid21ijo',
        permiso_funcionamiento: '1282932niu91',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion: 'San José',
        calificacion_promedio: 4.7,
        abierto: true,
        cant_pisos: 2,
        pisos: {
            piso_1: {
                cant_espacios: 7,
                espacios: {
                    espacio_1: {
                        id: 'C1',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_2: {
                        id: 'C2',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_3: {
                        id: 'D3',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'M1',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'M2',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'D1',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_7: {
                        id: 'D2',
                        tipo_icono: 2,
                        ocupado: true
                    }
                }
            },
            piso_2: {
                cant_espacios: 4,
                espacios: {
                    espacio_1: {
                        id: 'C4',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_2: {
                        id: 'M5',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_3: {
                        id: 'D6',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_4: {
                        id: 'D7',
                        tipo_icono: 2,
                        ocupado: false
                    }
                }
            }
        }
    },

    parqueo_3: {
        codigo: '111921',
        nombre: 'Parqueo el Covid',
        duenno_parqueo: 'María Covid Pérez Vindas',
        email: 'contacto@parqueoelcovid.com',
        cedula_juridica: '12ji2ojd11212122jo',
        permiso_funcionamiento: 'AAbshaSkawiu91',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion: 'San José',
        calificacion_promedio: 3.85,
        abierto: true,
        cant_pisos: 1,
        pisos: {
            piso_1: {
                cant_espacios: 9,
                espacios: {
                    espacio_1: {
                        id: 'C1',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_2: {
                        id: 'C2',
                        tipo_icono: 0,
                        ocupado: true
                    },
                    espacio_3: {
                        id: 'C3',
                        tipo_icono: 0,
                        ocupado: false
                    },
                    espacio_4: {
                        id: 'M1',
                        tipo_icono: 1,
                        ocupado: false
                    },
                    espacio_5: {
                        id: 'M2',
                        tipo_icono: 1,
                        ocupado: true
                    },
                    espacio_6: {
                        id: 'D1',
                        tipo_icono: 2,
                        ocupado: false
                    },
                    espacio_7: {
                        id: 'D2',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_8: {
                        id: 'D3',
                        tipo_icono: 2,
                        ocupado: true
                    },
                    espacio_9: {
                        id: 'D4',
                        tipo_icono: 2,
                        ocupado: true
                    }
                }
            }
        }
    },
};
//-------------------------------------
//----------Final parqueos-------------
//-------------------------------------


//USUARIOS------------------
let usuarios = {

};

let empresas = {
    lista_empresas: {
        empresa_1: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '111',
            nombre_empresa: 'Adidas',
            codigo_empresa: '100'
        },
        empresa_2: {
            correo_empresa: 'x2@gmail.com',
            cedula_empresa: '112',
            nombre_empresa: 'Banco Nacional',
            codigo_empresa: '101'
        },
        empresa_3: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '113',
            nombre_empresa: 'Banco popular',
            codigo_empresa: '102'
        }
    }
};

let empleados_empresa_convenio = {
    convenio1_empleados: {
        cant_empleados: 5,
        empleado1: {
            id_empleado: '1',
            correo_usuario: 'daniel@gmail.com',
            nombre_empleado: 'Daniel'
        },
        empleado2: {
            id_empleado: '2',
            correo_usuario: 'david@gmail.com',
            nombre_empleado: 'David'
        },
        empleado3: {
            id_empleado: '3',
            correo_usuario: 'taylor@gmail.com',
            nombre_empleado: 'Taylor'
        },
        empleado4: {
            id_empleado: '4',
            correo_usuario: 'francis@gmail.com',
            nombre_empleado: 'Francis'
        },
        empleado5: {
            id_empleado: '5',
            correo_usuario: 'xavier@gmail.com',
            nombre_empleado: 'Xavier'
        }
    },
    convenio2_empleados: {
        cant_empleados: 5,
        empleado1: {
            id_empleado: '6',
            correo_usuario: 'alberto@gmail.com',
            nombre_empleado: 'Alberto'
        },
        empleado2: {
            id_empleado: '7',
            correo_usuario: 'benito@gmail.com',
            nombre_empleado: 'Benito'
        },
        empleado3: {
            id_empleado: '8',
            correo_usuario: 'alfonso@gmail.com',
            nombre_empleado: 'Alfonso'
        },
        empleado4: {
            id_empleado: '9',
            correo_usuario: 'ernesto@gmail.com',
            nombre_empleado: 'Ernesto'
        },
        empleado5: {
            id_empleado: '10',
            correo_usuario: 'pedro@gmail.com',
            nombre_empleado: 'Pedro'
        }
    },
    convenio3_empleados: {
        cant_empleados: 3,
        empleado1: {
            id_empleado: '11',
            correo_usuario: 'juan@gmail.com',
            nombre_empleado: 'Juan'
        },
        empleado2: {
            id_empleado: '12',
            correo_usuario: 'juan@gmail.com',
            nombre_empleado: 'Christian'
        },
        empleado3: {
            id_empleado: '13',
            correo_usuario: 'alicia@gmail.com',
            nombre_empleado: 'Alicia'
        },

    },
};

let convenios_empresa = {
    cant_convenios: 3,
    convenio1: {
        parqueo: parqueos.parqueo_1.nombre,
        codigo: empresas.lista_empresas.empresa_1.codigo_empresa,
        porcentaje_descuento: 15,
        empleados_asociados: empleados_empresa_convenio.convenio1_empleados.cant_empleados,
        fecha_vencimiento: '31/8/2020'
    },
    convenio2: {
        parqueo: parqueos.parqueo_2.nombre,
        codigo: empresas.lista_empresas.empresa_2.codigo_empresa,
        porcentaje_descuento: 10,
        empleados_asociados: empleados_empresa_convenio.convenio2_empleados.cant_empleados,
        fecha_vencimiento: '10/8/2020'
    },
    convenio3: {
        parqueo: parqueos.parqueo_3.nombre,
        codigo: empresas.lista_empresas.empresa_3.codigo_empresa,
        porcentaje_descuento: 20,
        empleados_asociados: empleados_empresa_convenio.convenio3_empleados.cant_empleados,
        fecha_vencimiento: '15/8/2020'
    }
}

let solicitudes = {};