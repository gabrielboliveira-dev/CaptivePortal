# Captive Portal WiFi para Clientes

Este projeto consiste em um sistema de Captive Portal para redes WiFi, desenvolvido para oferecer acesso controlado à internet para clientes em ambientes empresariais. Ele suporta múltiplos métodos de autenticação para flexibilidade e coleta de dados básicos de usuários.

## Funcionalidades

* **Redirecionamento Automático:** Clientes não autenticados são redirecionados para a página do portal ao tentar acessar a internet.
* **Múltiplos Métodos de Autenticação:**
    * Aceite dos Termos de Uso.
    * Login Social (Google e Facebook).
    * Cadastro e Login via E-mail e Senha.
* **Gerenciamento Básico de Usuários:** Armazenamento de informações de usuários autenticados.
* **Integração com Equipamento de Rede:** Comunicação com o roteador/AP para liberar o acesso à internet após a autenticação bem-sucedida.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando uma stack moderna baseada em JavaScript/TypeScript:

* **Frontend:**
    * [Vue.js 3 (Composition API)](https://vuejs.org/) - Framework reativo para a interface do usuário.
    * [Quasar Framework](https://quasar.dev/) - Framework baseado em Vue.js para desenvolvimento de interfaces responsivas e ricas em componentes.
    * TypeScript - Adiciona tipagem estática ao JavaScript.
    * HTML5, CSS3, SCSS
* **Backend:**
    * [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
    * [TypeScript](https://www.typescriptlang.org/) - Adiciona tipagem estática ao JavaScript no backend.
    * [Express.js](https://expressjs.com/) ou [NestJS](https://nestjs.com/) (Definir qual será usado) - Framework para construção de APIs robustas.
    * Bibliotecas para OAuth2 (para Login Social).
    * Biblioteca para hashing de senhas (ex: bcrypt).
    * Biblioteca para comunicação com o sistema de autenticação do AP (definir após análise do AP Intelbras AP 360).
* **Banco de Dados:**
    * SQL (ex: PostgreSQL, MySQL) ou NoSQL (ex: MongoDB) - Para armazenamento de usuários e logs.
    * ORM/ODM (ex: Prisma, TypeORM, Sequelize) - Para interação com o banco de dados.

##  Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* Node.js (versão LTS recomendada)
* npm ou Yarn
* Um servidor de banco de dados (PostgreSQL, MySQL, MongoDB, etc.)
* O roteador/AP Intelbras AP 360 configurado para a função de Captive Portal.
* Conta de desenvolvedor no Facebook e Google para configurar o Login Social e obter as credenciais de API.

## Configuração do Ambiente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/gabrielboliveira-dev/CaptivePortal/
    cd CaptivePortal
    ```

2.  Configuração do Backend:
    * Navegue até o diretório do backend.
    * Instale as dependências: `npm install` ou `yarn install`.
    * Crie um arquivo de variáveis de ambiente (ex: `.env`) baseado em um `.env.example` (você precisará criar este arquivo com as configurações necessárias).
    * Configure a conexão com o banco de dados no arquivo de configuração apropriado ou no `.env`.
    * Configure as credenciais das APIs do Facebook e Google no `.env`.
    * **Configuração específica de integração com o AP:** (Este passo será detalhado assim que confirmarmos o método de comunicação com o Intelbras AP 360 - RADIUS, API, etc.)

3.  Configuração do Frontend:
    * Navegue até o diretório do frontend.
    * Instale as dependências: `npm install` ou `yarn install`.
    * Configure a URL da API do backend no ambiente do frontend (geralmente em um arquivo `.env` ou similar).

4.  Configuração do Banco de Dados:
    * Aplique as migrations (se estiver usando um banco de dados SQL com ORM como Prisma ou TypeORM) ou configure a estrutura inicial do banco de dados.

5.  Configuração do AP Intelbras AP 360:
    * Acesse a interface de administração do AP.
    * Habilite o Captive Portal.
    * Defina a URL de redirecionamento para o seu frontend (o endereço onde ele será hospedado).
    * Configure o "Walled Garden" para permitir acesso ao seu backend e aos domínios do Facebook e Google (para o login social) ANTES da autenticação.
    * **Configure o método de autenticação externa** para apontar para o seu servidor backend, conforme o método de integração suportado pelo AP 360 (RADIUS, API, etc.). *Este é o passo crucial que será detalhado em breve.*

## Como Executar

1.  Inicie o servidor backend:
    ```bash
    cd /caminho/para/seu/backend
    npm start # ou yarn start ou outro comando de execução
    ```
2.  Inicie o servidor de desenvolvimento do frontend:
    ```bash
    cd /caminho/para/seu/frontend
    quasar dev # ou outro comando de execução
    ```
3.  Acesse a rede WiFi configurada com o Captive Portal. Você deverá ser redirecionado para a página do seu portal.

## Contribuição

Contribuições são bem-vindas! Se você encontrar bugs ou tiver ideias para melhorias, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT

## Contato

Gabriel Oliveira - https://www.linkedin.com/in/gabriel-oliveira-2040771b4/ - gabrielgbo00@gmail.com
