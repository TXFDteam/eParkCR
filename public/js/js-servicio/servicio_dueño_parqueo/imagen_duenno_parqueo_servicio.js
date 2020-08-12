'use strict';
const btn_imagen = document.querySelector('#imagenPerfil');
const imagen = document.querySelector('#duenno-parqueo-foto');
//cloudinary
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudnName: 'txfd',
    uploadPreset: 'proyecto1'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});
btn_imagen.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);