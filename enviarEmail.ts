import nodemailer from 'nodemailer';
import readline from 'readline';

import dotenv from 'dotenv';
dotenv.config();

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function conteudoEmail(dados: string): Promise<string> {
  return new Promise(resolve => input.question(dados, resolve));
}

async function enviarEmail() {
  try {
    const destinatario = await conteudoEmail('Digite o destinatário do email: ');
    const assunto = await conteudoEmail('Digite o assunto do email: ');
    const mensagem = await conteudoEmail('Digite a mensagem do email: ');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWD,
      },
    });

    const configuracaoEmail: nodemailer.SendMailOptions = {
      from: process.env.EMAIL,
      to: destinatario,
      subject: assunto,
      text: mensagem,
    };

    transporter.sendMail(configuracaoEmail, (erro, info) => {
      if (erro) {
        console.error('Erro ao enviar e-mail:', erro);
      } else {
        const dataFormatada = new Date().toLocaleString('pt-BR')
        console.log(`\nE-mail enviado com sucesso! - ${dataFormatada}`);
      }
      input.close();
    });
  } catch (erro) {
    console.error('Erro durante a solicitação:', erro);
    input.close();
  }
}

enviarEmail();
