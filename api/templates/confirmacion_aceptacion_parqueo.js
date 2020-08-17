'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail_aceptacion = (pcorreo, pnombre) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'eParkCR',
        to: pcorreo,
        subject: 'Confirmación parqueo',
        html: `
        <table style="width: 700px;">
        <tr height="200px">
            <td width="600px">
                <h1 style=" text-align:center">Confirmación de solicitud de parqueo: ${pnombre}</h1>
                <p style="font-size: 20px; text-align:center">Has solicitado la revisión del parqueo. Es de nuestra gratitud informarle que ha sido aceptado de forma correcta. Podés ingresar a la aplicación y ver la información del parqueo. Ya está disponible para reservaciones.
                    
                </p>
            </td>
        </tr>
        <tr>
            <td style="text-align:center">
                <p style="font-size: 20px; color: #000">Si necesitas ayuda adicional, no dudes en contactarnos al correo eparkcr@gmail.com.</p>
            </td>
        </tr>
    </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};
module.export = this;