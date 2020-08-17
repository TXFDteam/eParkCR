'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail_rechazo = (pcorreo, pnombre) => {
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
        subject: 'Cambio contraseña',
        html: `
        <table style="width: 700px;">
        <tr height="200px">
            <td width="600px">
                <h1 style=" text-align:center">Rechazo de solicitud de parqueo: ${pnombre}</h1>
                <p style="font-size: 20px; text-align:center">El parqueo enviado a solicitud, ha sido rechazado por no cumplir con los estándares de la aplicación. El parqueo no se puede registrar. Podés registrar otro parqueo que sí cumpla con los estándares. 
                Gracias por la comprensión.
                    
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