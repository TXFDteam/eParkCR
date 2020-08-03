'use strict';

//-------------------------------------
//---------Perfil administrador--------
//-------------------------------------
let administrador = {
    nombre: 'admin_principal',
    correo_admin: 'admin@admin.com',
    contrasenna_admin: 'admin.admin1',
    comision: 8,
    telefono: '2594-1245'
}


let duennos_parqueos = {
    cant_duennos: 3,
    duenno_parqueo1: {
        id_usuario: 'D1',
        correo_duenno: 'josepablo@gmail.com',
        nombre: 'Jose Pablo Ramirez Soto',
        telefono_duenno_parqueo: '8888-8888',
        fecha_nacimiento: '24/05/1990',
        cuenta_bancaria: '64242597623299142925',
        contraseña: '5823475',
        estado_general: 'ACTIVO'
    },
    duenno_parqueo2: {
        id_usuario: 'D2',
        correo_duenno: 'ramonluis@gmail.com',
        nombre: 'Ramón Luis López López',
        telefono_duenno_parqueo: '8888-2222',
        fecha_nacimiento: '15/02/1956',
        cuenta_bancaria: '12590400132454751841',
        contraseña: '9719369',
        estado_general: 'ACTIVO'
    },
    duenno_parqueo3: {
        id_usuario: 'D3',
        correo_duenno: 'mariaperez@hotmail.com',
        nombre: 'María Covid Pérez Vindas',
        telefono_duenno_parqueo: '8383-3838',
        fecha_nacimiento: '11/05/1949',
        cuenta_bancaria: '57487621933142413286',
        contraseña: '3067245',
        estado_general: 'ACTIVO'
    }
}


//-------------------------------------
//--------------Reseñas----------------
//-------------------------------------
let comentarios = {
    total_comentarios: 7,
    comentario_1: {
        id_usuario: '1',
        id_parqueo: '11291',
        cantidad_estrellas: 5,
        fecha: '20/06/2020',
        mensaje: 'Oh por Dios, este es de los mejores parqueos que he visitado, totalmente recomendado, la seguridad es excelente y hay suficiente espacio para todos los clientes!!'
    },
    comentario_2: {
        id_usuario: '2',
        id_parqueo: '11232',
        cantidad_estrellas: 1,
        fecha: '12/05/2020',
        mensaje: 'No me gustó, este parqueo es horrible, no le pongo 0 estrellas porque no se puede >:('
    },
    comentario_3: {
        id_usuario: '3',
        id_parqueo: '11291',
        cantidad_estrellas: 4,
        fecha: '20/06/2020',
        mensaje: 'Me encantó este parqueo, cuidaron muy bien de mi carrito, pero ese día me quedé varado entonces por eso no le pongo 5 estrellas'
    },
    comentario_4: {
        id_usuario: '4',
        id_parqueo: '11232',
        cantidad_estrellas: 5,
        fecha: '18/04/2020',
        mensaje: 'Muy bueno'
    },
    comentario_5: {
        id_usuario: '5',
        id_parqueo: '11232',
        cantidad_estrellas: 3,
        fecha: '12/06/2020',
        mensaje: 'Muy buen parqueo, pero la seguridad en general apesta, rayaron mi auto!'
    },
    comentario_6: {
        id_usuario: '6',
        id_parqueo: '111921',
        cantidad_estrellas: 4,
        fecha: '12/06/2020',
        mensaje: 'Excelente parqueo'
    },
    comentario_7: {
        id_usuario: '7',
        id_parqueo: '111921',
        cantidad_estrellas: 5,
        fecha: '20/06/2020',
        mensaje: 'Me gustó bastante, muy recomendado'
    }
}


//-------------------------------------
//-------------------------------------
//-------------------------------------

//-----------------SOLICITUDES DE PARQUEO-----------------------
let solicitudes_parqueos = {
    cant_solicitudes: 3,
    sol_parqueo1: {
        parqueo: {
            codigo: '11291',
            nombre: 'Parqueo la maravilla',
            imagen_preview: 'La_maravilla_preview.jpg',
            imagen_perfil: 'La_maravilla_perfil.jpg',
            duenno_parqueo: duennos_parqueos.duenno_parqueo1.nombre,
            email: 'contacto@parqueolamaravilla.com',
            cedula_juridica: '12ji2ojd1oid21ijo',
            permiso_funcionamiento: '1289dn2jkawiu91',
            enlaces_redes: { facebook: '', twitter: '', instagram: '' },
            ubicacion: 'San José',
            calificacion_promedio: 5,
            abierto: false,
            tarifa_hora: 800,
            estado: 'ACTIVO',
            cant_pisos: 1,
            hora_apertura: '07:00',
            hora_cierre: '20:00',
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
        nombre_parqueo: 'Parqueo 24',
        duenno_parqueo: 'Sofía Masis Obando',
        email_parqueo: 'contacto@parqueo24.com',
        cedula_juridica: '12ji2ojd1oid21idi',
        permiso_funcionamiento: '415t8',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion_parqueo: 'San José',
        estado_parqueo: 'Revisión',
        cant_pisos: 1,
        cant_espacios: 33,
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


    sol_parqueo2: {
        nombre_parqueo: 'Parqueo la lima',
        duenno_parqueo: 'Jose Fernández López',
        email_parqueo: 'contacto@parqueolalima.com',
        cedula_juridica: '12ji2jdjsid234r',
        permiso_funcionamiento: '876poq',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion_parqueo: 'Cartago',
        estado_parqueo: 'Revisión',
        cant_pisos: 2,
        cant_espacios: 11,
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

    sol_parqueo3: {
        nombre_parqueo: 'Parqueo cr7',
        duenno_parqueo: 'Benito Martinez Balvin',
        email_parqueo: 'contacto@parqueocr7.com',
        cedula_juridica: '12ji2ojd115487pol',
        permiso_funcionamiento: 'ab98',
        enlaces_redes: { facebook: '', twitter: '', instagram: '' },
        ubicacion_parqueo: 'San José',
        estado_parqueo: 'Revisión',
        cant_pisos: 1,
        cant_espacios: 9,
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
    }
};



// Dueños de parqueo









//-------------------------------------
//--------------Parqueos---------------
//-------------------------------------
let parqueos = {
    cant_parqueos: 3,
    parqueo_1: {
        codigo: '11291',
        nombre: 'Parqueo la maravilla',
        imagen_preview: 'La_maravilla_preview.jpg',
        imagen_perfil: 'La_maravilla_perfil.jpg',
        duenno_parqueo: duennos_parqueos.duenno_parqueo1.nombre,
        email: 'contacto@parqueolamaravilla.com',
        cedula_juridica: '12ji2ojd1oid21ijo',
        permiso_funcionamiento: '1289dn2jkawiu91',
        enlaces_redes: { facebook: 'https://es-la.facebook.com/', twitter: 'https://twitter.com/?lang=es', instagram: '' },
        ubicacion: 'San José',
        calificacion_promedio: 5,
        abierto: false,
        tarifa_hora: 800,
        estado: 'ACTIVO',
        cant_pisos: 1,
        hora_apertura: '07:00',
        hora_cierre: '20:00',
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
        imagen_preview: 'Lopez_Lopez_preview.jpg',
        imagen_perfil: 'Lopez_Lopez_perfil.jpg',
        duenno_parqueo: duennos_parqueos.duenno_parqueo2.nombre,
        email: 'contacto@parqueolopezlopez.com',
        cedula_juridica: '12ji2jdjsid21ijo',
        permiso_funcionamiento: '1282932niu91',
        enlaces_redes: { facebook: '', twitter: '', instagram: 'https://www.instagram.com/?hl=es' },
        ubicacion: 'Heredia',
        calificacion_promedio: 4.7,
        abierto: true,
        tarifa_hora: 1500,
        estado: 'ACTIVO',
        cant_pisos: 2,
        hora_apertura: '09:00',
        hora_cierre: '20:00',
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
        imagen_preview: 'El_covid_preview.jpg',
        imagen_perfil: 'El_covid_perfil.jpg',
        duenno_parqueo: duennos_parqueos.duenno_parqueo3.nombre,
        email: 'contacto@parqueoelcovid.com',
        cedula_juridica: '12ji2ojd11212122jo',
        permiso_funcionamiento: 'AAbshaSkawiu91',
        enlaces_redes: { facebook: 'https://es-la.facebook.com/', twitter: 'https://twitter.com/?lang=es', instagram: 'https://www.instagram.com/?hl=es' },
        ubicacion: 'San José',
        calificacion_promedio: 3.85,
        abierto: true,
        tarifa_hora: 1000,
        estado: 'ACTIVO',
        cant_pisos: 1,
        hora_apertura: '07:00',
        hora_cierre: '22:00',
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
    cant_usuarios: 13,
    usuario1: {
        id_usuario: '1',
        correo_usuario: 'daniel@gmail.com',
        nombre_usuario: 'Daniel Z R',
        n_identificacion: '11811',
        fecha_nacimiento: '27/01/2001',
        contraseña: '11111111',
        estado_general: 'ACTIVO',
        tarjetas: { //Este estado es el de la aplicación
            tarjeta_1: {
                numero_tarjeta: '4444 4444 4444 4444',
                fecha_expiracion: 1 / 11,
                predeterminada: false,
            },
            tarjeta_2: {
                numero_tarjeta: '5555 5555 5555 5555',
                fecha_expiracion: 1 / 11,
                predeterminada: false,
            },
            tarjeta_3: {
                numero_tarjeta: '3333 3333 3333 3333',
                fecha_expiracion: 2 / 22,
                predeterminada: true,
            }
        }
    },
    usuario2: {
        id_usuario: '2',
        correo_usuario: 'david@gmail.com',
        nombre_usuario: 'David B B',

        n_identificacion: '11812',
        fecha_nacimiento: '20/04/2001',
        contraseña: '111111117',
        estado_general: 'ACTIVO',
        tarjetas: {
            tarjeta_1: {
                numero_tarjeta: '4444 4444 4444 4444',
                fecha_expiracion: 3 / 33,
                predeterminada: true,
            }
        }
    },
    usuario3: {
        id_usuario: '3',
        correo_usuario: 'taylor@gmail.com',
        nombre_usuario: 'Taylor S V',

        n_identificacion: '11813',
        fecha_nacimiento: '18/08/1998',
        contraseña: '11111111254',
        estado_general: 'ACTIVO',
        tarjetas: {
            tarjeta_1: {
                numero_tarjeta: '5555 5555 5555 5555',
                fecha_expiracion: 1 / 11,
                predeterminada: true,
            }
        }
    },
    usuario4: {
        id_usuario: '4',
        correo_usuario: 'francis@gmail.com',
        nombre_usuario: 'Francis vS',
        n_identificacion: '11814',
        fecha_nacimiento: '27/05/2000',
        contraseña: '111111111465',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario5: {
        id_usuario: '5',
        correo_usuario: 'xavier@gmail.com',
        nombre_usuario: 'Xavier L C',
        n_identificacion: '11815',
        fecha_nacimiento: '27/01/1995',
        contraseña: '1111111174',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario6: {
        id_usuario: '6',
        correo_usuario: 'alberto@gmail.com',
        nombre_usuario: 'Alberto M R',

        n_identificacion: '11816',
        fecha_nacimiento: '27/01/1997',
        contraseña: '1111111123',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario7: {
        id_usuario: '7',
        correo_usuario: 'benito@gmail.com',
        nombre_usuario: 'Benito R H',

        n_identificacion: '11817',
        fecha_nacimiento: '27/01/1980',
        contraseña: '111111187',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario8: {
        id_usuario: '8',
        correo_usuario: 'alfonso@gmail.com',
        nombre_usuario: 'Alfonso Z T',

        n_identificacion: '11818',
        fecha_nacimiento: '27/08/1998',
        contraseña: '111111182',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario9: {
        id_usuario: '9',
        correo_usuario: 'ernesto@gmail.com',
        nombre_usuario: 'Ernesto O P',

        n_identificacion: '11819',
        fecha_nacimiento: '27/7/1990',
        contraseña: '111115555',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario10: {
        id_usuario: '10',
        correo_usuario: 'pedro@gmail.com',
        nombre_usuario: 'Pedro Z Q',

        n_identificacion: '11819',
        fecha_nacimiento: '10/01/1999',
        contraseña: '111111956',
        estado_general: 'ACTIVO'
    },
    usuario11: {
        id_usuario: '11',
        correo_usuario: 'juan@gmail.com',
        nombre_usuario: 'Juan A V',

        n_identificacion: '118110',
        fecha_nacimiento: '21/04/2001',
        contraseña: '111119644',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario12: {
        id_usuario: '12',
        correo_usuario: 'christian@gmail.com',
        nombre_usuario: 'Christian Z R',

        n_identificacion: '118112',
        fecha_nacimiento: '22/04/1996',
        contraseña: '111111784',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },
    usuario13: {
        id_usuario: '13',
        correo_usuario: 'alicia@gmail.com',
        nombre_usuario: 'Alicia G L',

        n_identificacion: '1181113',
        fecha_nacimiento: '04/8/1993',
        contraseña: '111111245',
        estado_general: 'ACTIVO',
        tarjetas: {

        }
    },

};


/*EMPRESAS*/
let empresas = {
    cant_empresas: 3,
    lista_empresas: {
        empresa_1: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '111',
            nombre_empresa: 'Adidas',
            codigo_empresa: '100',
            contrasenna_empresa: 'adidas1',
            estado: 'ACTIVO',
            nombre_encargado: 'Diego Rivera',
            ubicacion: 'San José'
        },
        empresa_2: {
            correo_empresa: 'x2@gmail.com',
            cedula_empresa: '112',
            nombre_empresa: 'Banco Nacional',
            codigo_empresa: '101',
            contrasenna_empresa: 'banconacional1',
            estado: 'INACTIVO',
            nombre_encargado: 'Carlos Vargas',
            ubicacion: 'Alajuela'
        },
        empresa_3: {
            correo_empresa: 'x1@gmail.com',
            cedula_empresa: '113',
            nombre_empresa: 'Banco popular',
            codigo_empresa: '102',
            contrasenna_empresa: 'bancopopular1',
            estado: 'ACTIVO',
            nombre_encargado: 'Antonio Gómez',
            ubicacion: 'Cartago'
        }
    }
};

/*Convenios empresa con sus respectivos empleados*/



let convenios_empresa = {
    cant_convenios: 3,
    convenio1: {
        empresa: empresas.lista_empresas.empresa_1.nombre_empresa,
        parqueo: parqueos.parqueo_1.nombre,
        codigo_convenio: 'B1',
        porcentaje_descuento: 15,
        cant_empleados: 5,
        fecha_vencimiento: '31/8/2020',
        empleados: {
            empleado1: {
                id_empleado: usuarios.usuario1.id_usuario,
                correo_usuario: usuarios.usuario1.correo_usuario,
                nombre_empleado: usuarios.usuario1.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado2: {
                id_empleado: usuarios.usuario2.id_usuario,
                correo_usuario: usuarios.usuario2.correo_usuario,
                nombre_empleado: usuarios.usuario2.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado3: {
                id_empleado: usuarios.usuario3.id_usuario,
                correo_usuario: usuarios.usuario3.correo_usuario,
                nombre_empleado: usuarios.usuario3.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado4: {
                id_empleado: usuarios.usuario4.id_usuario,
                correo_usuario: usuarios.usuario4.correo_usuario,
                nombre_empleado: usuarios.usuario4.nombre_usuario,
                estado: 'INACTIVO'
            },
            empleado5: {
                id_empleado: usuarios.usuario5.id_usuario,
                correo_usuario: usuarios.usuario5.correo_usuario,
                nombre_empleado: usuarios.usuario5.nombre_usuario,
                estado: 'ACTIVO'
            }
        }
    },

    convenio2: {
        empresa: empresas.lista_empresas.empresa_2.nombre_empresa,
        parqueo: parqueos.parqueo_2.nombre,
        codigo_convenio: 'B2',
        porcentaje_descuento: 10,
        cant_empleados: 5,
        fecha_vencimiento: '10/8/2020',
        empleados: {
            empleado1: {
                id_empleado: usuarios.usuario6.id_usuario,
                correo_usuario: usuarios.usuario6.correo_usuario,
                nombre_empleado: usuarios.usuario6.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado2: {
                id_empleado: usuarios.usuario7.id_usuario,
                correo_usuario: usuarios.usuario7.correo_usuario,
                nombre_empleado: usuarios.usuario7.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado3: {
                id_empleado: usuarios.usuario8.id_usuario,
                correo_usuario: usuarios.usuario8.correo_usuario,
                nombre_empleado: usuarios.usuario8.nombre_usuario,
                estado: 'INACTIVO'
            },
            empleado4: {
                id_empleado: usuarios.usuario9.id_usuario,
                correo_usuario: usuarios.usuario9.correo_usuario,
                nombre_empleado: usuarios.usuario9.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado5: {
                id_empleado: usuarios.usuario10.id_usuario,
                correo_usuario: usuarios.usuario10.correo_usuario,
                nombre_empleado: usuarios.usuario10.nombre_usuario,
                estado: 'INACTIVO'
            }
        },
    },
    convenio3: {
        empresa: empresas.lista_empresas.empresa_3.nombre_empresa,
        parqueo: parqueos.parqueo_3.nombre,
        codigo_convenio: 'B3',
        porcentaje_descuento: 20,
        cant_empleados: 3,
        fecha_vencimiento: '15/8/2020',
        empleados: {
            empleado1: {
                id_empleado: usuarios.usuario11.id_usuario,
                correo_usuario: usuarios.usuario11.correo_usuario,
                nombre_empleado: usuarios.usuario11.nombre_usuario,
                estado: 'ACTIVO'
            },
            empleado2: {
                id_empleado: usuarios.usuario12.id_usuario,
                correo_usuario: usuarios.usuario12.correo_usuario,
                nombre_empleado: usuarios.usuario12.nombre_usuario,
                estado: 'INACTIVO'
            },
            empleado3: {
                id_empleado: usuarios.usuario13.id_usuario,
                correo_usuario: usuarios.usuario13.correo_usuario,
                nombre_empleado: usuarios.usuario13.nombre_usuario,
                estado: 'ACTIVO'
            },

        }
    }
};
/*
let calcular_horas_y_montos = (x) => {
    for (let i = 1; i <= reservas.cant_reservas; i++) {
        let id_reserva = ('reserva' + i);
        if (reservas[id_reserva.id_usuario] == x) {
            let hEnt = parseFloat(reservas[id_reserva].hora_entrada);
            let hSal = parseFloat(reservas[id_reserva].hora_salida);

            let horas = hSal - hEnt;
            reservas[id_reserva].horas = horas;
        }
    }
};*/

//-------------------------------------
//--------------Reservas---------------
//-------------------------------------
let reservas = {
    cant_reservas: 8,
    reserva1: {
        id_usuario: usuarios.usuario1.id_usuario,
        nombre_usuario: usuarios.usuario1.nombre_usuario,
        id_parqueo: parqueos.parqueo_1.codigo,
        parqueo_seleccionado: parqueos.parqueo_1.nombre,
        fecha_reserva: '29/07/2020',
        hora_entrada: '8:00',
        hora_salida: '9:30',
        horas: '1.5',
        descuento: '',
        estado_reserva: 'Paga',
        monto_total: '3000',
        espacio_seleccionado: parqueos.parqueo_1.pisos.piso_1.espacios.espacio_1.id,
        monto_final: '₡3000',
        tarjeta_creditada: usuarios.usuario1.tarjetas.tarjeta_1
    },
    reserva2: {
        id_usuario: usuarios.usuario2.id_usuario,
        nombre_usuario: usuarios.usuario2.nombre_usuario,
        id_parqueo: parqueos.parqueo_1.codigo,
        parqueo_seleccionado: parqueos.parqueo_1.nombre,
        fecha_reserva: '29/07/2020',
        hora_entrada: '21:00',
        hora_salida: '22:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Activa',
        monto_total: '3000',
        espacio_seleccionado: parqueos.parqueo_1.pisos.piso_1.espacios.espacio_6.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva3: {
        id_usuario: usuarios.usuario3.id_usuario,
        nombre_usuario: usuarios.usuario3.nombre_usuario,
        id_parqueo: parqueos.parqueo_2.codigo,
        parqueo_seleccionado: parqueos.parqueo_2.nombre,
        fecha_reserva: '30/07/2020',
        hora_entrada: '12:00',
        hora_salida: '15:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Pendiente',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_2.pisos.piso_2.espacios.espacio_3.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva4: {
        id_usuario: usuarios.usuario4.id_usuario,
        nombre_usuario: usuarios.usuario4.nombre_usuario,
        id_parqueo: parqueos.parqueo_3.codigo,
        parqueo_seleccionado: parqueos.parqueo_3.nombre,
        fecha_reserva: '31/07/2020',
        hora_entrada: '10:00',
        hora_salida: '11:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Reservada',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_3.pisos.piso_1.espacios.espacio_4.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva5: {
        id_usuario: usuarios.usuario5.id_usuario,
        nombre_usuario: usuarios.usuario5.nombre_usuario,
        id_parqueo: parqueos.parqueo_1.codigo,
        parqueo_seleccionado: parqueos.parqueo_1.nombre,
        fecha_reserva: '1/08/2020',
        hora_entrada: '13:00',
        hora_salida: '18:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Reservada',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_1.pisos.piso_1.espacios.espacio_8.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva6: {
        id_usuario: usuarios.usuario6.id_usuario,
        nombre_usuario: usuarios.usuario6.nombre_usuario,
        id_parqueo: parqueos.parqueo_2.codigo,
        parqueo_seleccionado: parqueos.parqueo_2.nombre,
        fecha_reserva: '5/08/2020',
        hora_entrada: '6:00',
        hora_salida: '8:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Activa',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_2.pisos.piso_1.espacios.espacio_2.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva7: {
        id_usuario: usuarios.usuario1.id_usuario,
        nombre_usuario: usuarios.usuario7.nombre_usuario,
        id_parqueo: parqueos.parqueo_3.codigo,
        parqueo_seleccionado: parqueos.parqueo_3.nombre,
        fecha_reserva: '30/08/2020',
        hora_entrada: '9:00',
        hora_salida: '16:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Reservada',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_3.pisos.piso_1.espacios.espacio_5.id,
        monto_final: '',
        tarjeta_creditada: ''
    },
    reserva8: {
        id_usuario: usuarios.usuario8.id_usuario,
        nombre_usuario: usuarios.usuario8.nombre_usuario,
        id_parqueo: parqueos.parqueo_3.codigo,
        parqueo_seleccionado: parqueos.parqueo_3.nombre,
        fecha_reserva: '15/08/2020',
        hora_entrada: '14:00',
        hora_salida: '17:00',
        horas: '',
        descuento: '',
        estado_reserva: 'Paga',
        monto_total: '',
        espacio_seleccionado: parqueos.parqueo_3.pisos.piso_1.espacios.espacio_7.id,
        monto_final: '',
        tarjeta_creditada: ''
    },



};



let solicitudes = {};



/* ---------↓ Datos de las tarjetas agregadas por el usuario cliente ↓--------- */
/*
let tarjetas = {
    cant_tarjetas: 4,
    tarjeta_1: {
        numero_tarjeta: '1111 1111 1111 1111',
        fecha_expiracion: 1 / 11,
        predeterminada: false,
    },
    tarjeta_2: {
        numero_tarjeta: '3333 3333 3333 3333',
        fecha_expiracion: 2 / 22,
        predeterminada: true,
    },
    tarjeta_3: {
        numero_tarjeta: '4444 4444 4444 4444',
        fecha_expiracion: 3 / 33,
        predeterminada: false,
    },
    tarjeta_4: {
        numero_tarjeta: '5555 5555 5555 5555',
        fecha_expiracion: 1 / 11,
        predeterminada: false,
    }
};*/

/* ---------↑ Datos de las tarjetas agregadas por el usuario cliente ↑--------- */