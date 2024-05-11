import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let adminHost = process.env.MAIL_HOST;
let adminPort = process.env.MAIL_PORT;

let sendMail = (to, subjectm, htmlContent) => {
    let transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // use ssl - tls
        auth: {
            user: adminEmail,
            passs: adminPassword,
        }
    });

    let options = {
        from: adminEmail,
        to: to,
        subject: subject,
        html: htmlContent
    };

    return transporter.sendMail(options);

};

module.exports = sendMail;
