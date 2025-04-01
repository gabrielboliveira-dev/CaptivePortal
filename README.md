# Sistema de Autenticação para Portal Cativo

## Descrição do Projeto

Este projeto implementa um sistema de autenticação para um portal cativo. Ele permite que usuários façam login ou se cadastrem usando seu CPF (Cadastro de Pessoas Físicas) e valida seu endereço de e-mail durante o cadastro. Este sistema é construído utilizando JavaScript, React para o frontend e Node.js com Express.js para o backend, com PostgreSQL como banco de dados.

## Funcionalidades

* **Login:** Usuários existentes podem fazer login usando seu CPF e Data de Nascimento.
* **Cadastro:** Novos usuários podem se cadastrar fornecendo seu CPF, Data de Nascimento e Endereço de E-mail, e aceitando os Termos de Uso.
* **Verificação de Existência de CPF:** Durante o cadastro, o sistema verifica se o CPF fornecido já está cadastrado.
* **Validação de E-mail:** Após o cadastro bem-sucedido, um código de validação é enviado para o endereço de e-mail do usuário, que ele precisa confirmar.
* **Temporizador de Reenvio de Código:** Um temporizador impede que os usuários solicitem um novo código de validação com muita frequência (5 minutos).

## Tecnologias Utilizadas

**Frontend:**

* JavaScript
* React
* HTML
* CSS
* react-router-dom
* useState
* useContext
* Redux
* fetch API
* Axios
* Formik
* Yup
* React Bootstrap
* Jest

**Backend (Node.js com Express.js):**

* JavaScript
* Node.js
* npm
* Express.js
* PostgreSQL
* Prisma
* jsonwebtoken (JWT): Para criar e verificar tokens de autenticação seguros.
* bcrypt: Para hash seguro de senhas.
* passport.js: Uma biblioteca de autenticação flexível que suporta várias estratégias (incluindo JWT e OAuth para login social, se você decidir adicionar essa funcionalidade posteriormente).
* express-validator ou joi: Para validar os dados recebidos do frontend antes de processá-los.
* helmet: Para adicionar cabeçalhos HTTP de segurança que protegem contra vulnerabilidades comuns.
* cors: Para configurar o Cross-Origin Resource Sharing e permitir apenas requisições de domínios autorizados.
* express-rate-limit: Para limitar o número de requisições de um mesmo IP em um determinado período, protegendo contra ataques de força bruta.
* Sanitização de entrada: Utilizar bibliotecas para sanitizar dados de entrada e prevenir ataques de script entre sites (XSS).
* nodemailer: Uma biblioteca popular para enviar e-mails a partir do Node.js.
* winston ou morgan: Para registrar logs da aplicação, facilitando o monitoramento e a depuração.
* Jest ou Mocha com Supertest: Para testes unitários e de integração das APIs do backend.

**Banco de Dados:**

* PostgreSQL: Robusto, escalável e com muitos recursos avançados.

**Infraestrutura e Deployment:**

* Servidor Web: Nginx ou Apache como um proxy reverso na frente do seu servidor Node.js para melhor desempenho e segurança.
* Gerenciamento de Processos: PM2 ou Nodemon (para desenvolvimento) para gerenciar a aplicação Node.js em produção.
* Hospedagem: Plataformas em nuvem (AWS, Google Cloud, Azure) ou servidores virtuais (DigitalOcean, Linode).
* Certificados SSL (HTTPS): Let's Encrypt é uma opção gratuita e popular para habilitar HTTPS e garantir a segurança da comunicação.

## Pré-requisitos

Antes de executar este projeto, certifique-se de ter o seguinte instalado:

* **Node.js:** (Verifique o `.nvmrc` ou `.node-version` para a versão necessária, ou instale a versão LTS mais recente)
* **npm** ou **yarn:** (Gerenciadores de pacotes para JavaScript)
* **PostgreSQL:** (Instale e configure sua instância do banco de dados)

## Instalação

Siga estes passos para configurar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_do_repositório>
    cd <diretório_do_projeto>
    ```

2.  **Navegue até o diretório do frontend:**
    ```bash
    cd frontend
    npm install  # ou yarn install
    ```

3.  **Navegue até o diretório do backend:**
    ```bash
    cd ../backend
    npm install 
    ```

4.  **Configure o banco de dados PostgreSQL:**
    * Crie um banco de dados com o nome (por exemplo, `captive_portal`).
    * Configure os detalhes de conexão do banco de dados nas variáveis de ambiente do backend (por exemplo, no arquivo `.env`).

5.  **Execute as migrações do Prisma (no diretório do backend):**
    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

6.  **Configure as variáveis de ambiente:**
    * Tanto no diretório `frontend` quanto no `backend`, crie um arquivo `.env` (se não existir) e configure as variáveis necessárias, como URLs da API, strings de conexão do banco de dados, credenciais de envio de e-mail e segredos JWT.

## Executando a Aplicação

1.  **Inicie o servidor backend (no diretório do backend):**
    ```bash
    npm run dev 
    ```
    Isso geralmente iniciará o servidor em modo de desenvolvimento com hot-reloading.

2.  **Inicie o servidor de desenvolvimento do frontend (no diretório do frontend):**
    ```bash
    npm start  # ou yarn start
    ```
    Isso geralmente abrirá a aplicação frontend no seu navegador em `http://localhost:3000` (ou um endereço similar).

## Deployment

Para fazer o deploy desta aplicação em um ambiente de produção, você geralmente seguirá estes passos:

1.  **Construa o frontend:**
    ```bash
    cd frontend
    npm run build  # ou yarn build
    ```
    Isso criará uma build de produção otimizada da sua aplicação React.

2.  **Faça o deploy do backend:**
    * Transfira o código do backend para o seu servidor.
    * Instale as dependências (`npm install`).
    * Configure as variáveis de ambiente para produção.
    * Execute as migrações do banco de dados.
    * Use um gerenciador de processos como o `PM2` para executar a aplicação Node.js de forma persistente.

3.  **Configure um proxy reverso (Nginx ou Apache):**
    * Configure o Nginx ou Apache para servir os arquivos estáticos do frontend e fazer o proxy das requisições para o seu servidor backend.
    * Configure o HTTPS com um certificado do Let's Encrypt ou outro provedor.

## Melhorias Futuras

Com base nas ideias iniciais, aqui estão algumas melhorias futuras potenciais para este projeto:

* Implementar um dashboard para visualizar usuários cadastrados com operações CRUD (Criar, Ler, Atualizar, Deletar).
* Desenvolver um mecanismo para que os usuários recuperem o acesso caso outra pessoa cadastre seu CPF.
* Integrar um sistema de publicidade obrigatória a ser exibido antes de conceder o acesso à internet.
