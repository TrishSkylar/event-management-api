require('dotenv').config();

exports.PORT = process.env.PORT;
exports.HOST = process.env.HOST;

exports.MAIL_MAILER = process.env.MAIL_MAILER;
exports.MAIL_HOST = process.env.MAIL_HOST;
exports.MAIL_PORT = process.env.MAIL_PORT;
exports.MAIL_USERNAME = process.env.MAIL_USERNAME;
exports.MAIL_PASSWORD = process.env.MAIL_PASSWORD;
exports.MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS;

exports.COMPANY_EMAIL = process.env.COMPANY_EMAIL;