<h1 align="center"> Programa de envio de e-mail </h1>

<p align="center">
Este projeto permite o envio de e-mails através do terminal utilizando o Node.js e o serviço de e-mail do Gmail. O programa utiliza a biblioteca nodemailer para enviar os e-mails, e a entrada de dados é feita diretamente no terminal, permitindo ao usuário fornecer destinatário, assunto e mensagem.
</p>

### Variáveis de Ambiente

Para rodar esse projeto, será necessário criar um arquivo com o nome `.env` na raiz do projeto com o seguinte conteúdo:

`EMAIL`: seuemail@gmail.com

`PASSWD`: senha_de_app (para maior segurança, é recomendado usar uma "senha de app")

Clique aqui para aprender <a href="https://support.google.com/accounts/answer/185833?hl=pt-BR" target="_blank">como criar uma senha de app</a>.

## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Caso não tenha, instale o Node.js a partir do <a href="https://nodejs.org/pt" target="_blank">site oficial</a>.
3. Abra o terminal e navegue até o diretório raiz do projeto.
4. Execute o seguinte comando para instalar as dependências do projeto:

    ```
    npm install
    ```

Para enviar o email basta abrir o terminal e na pasta raiz do projeto executar o comando:

   ```
    npx ts-node enviarEmail.ts
  ```

E preencher as informações necessárias para envio:

1. Digite o destinatário do email: 
2. Digite o assunto do email: 
3. Digite a mensagem do email: 
    

## Bibliotecas utilizadas


- Nodemailer
- ReadLine
- Dotenv


## 🖥️ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- Git e Github