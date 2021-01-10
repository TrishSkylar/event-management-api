const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

/* Constants */
const {
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
  MAIL_USERNAME
} = require('../settings/constants');


const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD
  }
});

transporter.use('compile', hbs({
  viewEngine: {
    extName: '.handlebars',
    partialsDir: __dirname,
    defaultLayout: false
  },
  viewPath: __dirname
}));

/* Logs */
transporter.verify()
  .then(() => {
    console.log('Ready for send emails');
  })
  .catch(err => {
    console.log(`ERROR: ${err.message}`);
  });

exports.transporter = transporter;