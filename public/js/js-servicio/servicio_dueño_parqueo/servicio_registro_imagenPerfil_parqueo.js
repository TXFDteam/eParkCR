'use strict'

const boton_foto_perfil = document.querySelector('#imagenPerfil');

const imagenPerfil = document.querySelector('#imagen_parqueo_perfil');

let widget_cloudinary1 = cloudinary.createUploadWidget({
    cloudName: 'txfd',
    uploadPreset: 'proyecto1'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenPerfil.src = result.info.secure_url;
    }
});


boton_foto_perfil.addEventListener('click', () => {
    widget_cloudinary1.open();
}, false);