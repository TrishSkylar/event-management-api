const { typeJSON } = require('../../utils/requests');
const { transporter } = require('../../mail/mailer');

const {
  COMPANY_EMAIL,
  MAIL_FROM_ADDRESS
} = require('../../settings/constants');

module.exports = async (request, response) => {
  if(!typeJSON(request)){
    response.status(406).send();
    return;
  }

  const data = request.body;

  if(!data.subject || !data.context){
    response.status(400).send();
    return;
  }

  if(!data.context.appName || !data.context.person || !data.context.message || !data.context.email){
    response.status(400).send();
    return;
  }

  try{
    await transporter.sendMail({
      ...data,
      from: MAIL_FROM_ADDRESS,
      to: COMPANY_EMAIL,
      template: 'emailView'
    });
    response.status(200).send();
  }catch(err){
    console.log(err);
    console.log(err.message);
    response.status(500).send();
  }
}