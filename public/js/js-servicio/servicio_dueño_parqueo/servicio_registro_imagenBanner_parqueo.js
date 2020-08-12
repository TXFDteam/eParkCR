'use strict'

const boton_foto_banner = document.querySelector('#imagenBanner');

const imagenBanner = document.querySelector('#imagen_parqueo_banner');

let widget_cloudinary2 = cloudinary.createUploadWidget({
    cloudName: 'txfd',
    uploadPreset: 'proyecto1'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenBanner.src = result.info.secure_url;
    }
});


boton_foto_banner.addEventListener('click', () => {
    widget_cloudinary2.open();
}, false);