'use strict';


let nombre_cliente = usuarios.usuario1.nombre_usuario;
console.log(nombre_cliente);
document.querySelector('#nombre-cliente').innerHTML = nombre_cliente;

let correo_electronico = usuarios.usuario1.correo_usuario;
console.log(correo_electronico);
document.querySelector('#correo-cliente').innerHTML = correo_electronico;

let tarjeta_cliente = usuarios.usuario1.tarjeta_credito;
console.log(tarjeta_cliente);
document.querySelector('#tarjeta-cliente').innerHTML = tarjeta_cliente;

let nacimiento_cliente = usuarios.usuario1.fecha_nacimiento;
console.log(nacimiento_cliente);
document.querySelector('#nacimiento-cliente').innerHTML = nacimiento_cliente;

let contrasena_cliente = usuarios.usuario1.contraseña;
console.log(contrasena_cliente);
document.querySelector('#contrasena-cliente').innerHTML = contrasena_cliente;