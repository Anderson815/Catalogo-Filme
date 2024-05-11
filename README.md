<h1 align="center">Catálogo Filme</h1>
<p align="center">Concluído :rocket: </p>
<p align="center">
  <a href="#Sobre">Sobre</a> •
  <a href="#Funcionalidades">Funcionalidades</a> •
  <a href="#Executar">Como Executar</a> •
  <a href="#Aplicacao">Aplicação</a> •
  <a href="#Tecnologias">Tecnologias</a> •
  <a href="#Autor">Autor</a> •
  <a href="#Licenca">Licença</a>
</p>

<h2 id="Sobre">:computer: Sobre o projeto</h2>
<p>
  🎬 O Catálogo Filme é um projeto simples que tem como o objetivo utilizar uma vasta quantidade de conhecimentos diferentes do autor em um CRUD simples utilizando o NestJS como framework.
</p>

<p>
  Sequência para rodar e testar a aplicação:
</p>

<ol>
  <li>Criar um Usuário</li>
  <li>Logar com o Usuário cadatrado para obter o token JWT de acesso e o refresh Token</li>
  <li>Utilizar o token de acesso para utilizar os demais endpoints de filme</li>
</ol>

<h2 id="Funcionalidades">⚙️ Funcionalidades</h2>

  <h3>Usuário</h3>
  
  - [x] Cadastrar usuário
  - [x] Logar na aplicação
  - [x] Refresh das credenciais

<h3>Filme</h3>
        
  - [x] Cadastrar filme
  - [x] Consultar filme pelo ID
  - [x] Consultar lista de filmes podendo utilizar filtros (nome e/ou categoria)
  - [x] Alterar filme
  - [x] Deletar filme


<h2 id="Executar">🚀 Como executar o projeto</h2>

<p>Clonar o projeto</p>

```bash
git clone https://github.com/Anderson815/Catalogo-Filme.git
```

<p>Criar um arquivo .env na raiz da aplicação e nele deve conter todas as variáveis de ambiente devidamente preenchidas, como no exemplo a seguir:<p>

```bash
#APP
PORT=3000

#BCRYPT
BCRYPT_SALT=10

#JWT
JWT_SECRET_KEY=4b6e18c7-9d9b-4f15-829b-2b128a01d6e4_example
JWT_SECRET_KEY_EXPIRES_IN=600
JWT_SECRET_REFRESH_KEY=d8b6f7a3-e724-4dc4-a9e0-5c3b2f9e0dc1_example
JWT_SECRET_KEY_REFRESH_EXPIRES_IN=1200 #Deve ser maior que o JWT_SECRET_KEY_EXPIRES_IN

#BD
BD_HOST=db_example
BD_PORT=5432,
BD_USERNAME=root_example
BD_PASSWORD=pass_example
BD_DATABASE=movie_db_example

```

<p>Executar o docker compose<p>
  
```bash
docker compose up
```

<h2 id="Aplicacao">▶️ Aplicação</h2>

Aplicação está hospedado no link: https://catalogo-filme.onrender.com <br>
Swagger da aplicação no servidor de hospedagem: https://catalogo-filme.onrender.com/api <br>
Também tem a collection do postman caso prefira utilizar essa ferramenta. A collection se encontra na pasta Collection.

<h2 id="Tecnologias">🛠 Ferramentas e técnicas de desenvolvimento</h2>

  - [x] TypeScript(TS)
  - [x] NestJS
  - [x] TypeORM
  - [x] PostgreSQL
  - [x] Docker
  - [x] JWT
  - [x] Arquitetura Hexagonal
  - [x] Swagger
 
<h2 id="Autor">🦸 Autor</h2>

<img src="Midia/Perfil.jpg" alt="Foto do Anderson" height="150px" width="150px">
<p>
Anderson Correia é um entusiasta e apaixonados por programação, focado em resolver problemas através de códigos.
</p>
<p>Esse projeto foi feito com muito ❤️ e carinho pelo Anderson 👋🏽 <a href="https://www.linkedin.com/in/anderson-correia/">Entre em contato!</a></p>

<h2 id="Licenca">📝 Licença</h2>

<p>Este projeto esta sob a licença <a href="https://github.com/Anderson815/Catalogo-Filme?tab=MIT-1-ov-file">MIT</a>.</p>
