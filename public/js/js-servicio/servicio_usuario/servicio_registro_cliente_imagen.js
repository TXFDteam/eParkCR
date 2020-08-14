'use strict'

const boton_foto = document.querySelector('#imagenPerfil');
const imagen = document.querySelector('#cliente_foto');

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'txfd',
    uploadPreset: 'proyecto1'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});


boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);