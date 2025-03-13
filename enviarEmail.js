const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path'); 

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gserra@almavivasolutions.com.br',
    pass: 'yeig naoc shpb vzit'  
  }
});

const mailOptions = {
  from: 'gserra@almavivasolutions.com.br',
  to: 'steixeira@almavivasolutions.com.br', 
  subject: 'Exercício em JS - envio de currículo',
  text: 'Segue em anexo',
  attachments: [
    {
      filename: 'Currículo - Guilherme Serra.pdf',
      path: 'C:/Users/AlmavivA/Documents/Currículo - Guilherme Serra.pdf'
    }
  ]
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erro ao enviar e-mail:', error);
  } else {
    console.log('E-mail enviado: ' + info.response);
  }
});