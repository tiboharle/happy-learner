var nodemailer = require('nodemailer');



//const transporter = nodemailer.createTransport({
//    host: 'smtp.gmail.com',
//    port: 465,
//    auth: {
//        user: 'thibaut.devreact@gmail.com',
//        pass: 'rzfejHvUy4EHnt115W'
//    }
//});

const transporterFake = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'domenica.bashirian8@ethereal.email',
        pass: '4eGzZpfJQ4RN57JeNC'
    }
});
/* Le contenu du votre mail */

/* envoie du mail */


const sendMail = (userEmail, objectEmail, bodyEmail) => {
let mailOptions = {
    from: 'domenica.bashirian8@ethereal.email',
    to: userEmail,
    subject: objectEmail,
    text: bodyEmail,
    html: bodyEmail
};
transporterFake.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s envoyé: %s', info.messageId, info.response);
});

};
module.exports = sendMail;
