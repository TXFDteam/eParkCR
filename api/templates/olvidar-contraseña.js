'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail = (pcorreo, potp) => {
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
                <h1 style=" text-align:center">Solicitud de cambio de contraseña</h1>
                <p style="font-size: 20px; text-align:center">Has solicitado un cambio de contraseña. Aquí se encuentra el código que debes ingresar para cambiar la contraseña:
                    <span style="color: #e84393">${potp}</span> . Si ingresas el código correctamente podés cambiar la contraseña.
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