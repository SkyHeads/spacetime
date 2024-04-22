<p align='center'> 
	<h1 align='center'>NLW Spacetime</h1>
	<img src="https://i.imgur.com/1lTcvV9.png" alt="Imagem do layout do site de memórias na versão para computador" />
</p>

## 🧪 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
Front-End:
- [React]
- [Next]
- [TailwindCSS]
- [Typescript]
- [DayJS]
- [JsCookie]
- [Axios]
- [JWT-decode]
- [classnames]
- [Lucide-react]
Back-End:
- [Fastify]
- [@Fastify/cors]
- [@Fastify/jwt]
- [@Fastify/multipart]
- [@Fastify/static]
- [axios]
- [zod]
## 🚀 Como executar
Clone o projeto e acesse a pasta do mesmo
Front-End:
```bash
$ git clone https://github.com/SkyHeads/spacetime.git
$ cd web
$ npm i (para instalar as dependências)
$ npm run dev
```
Nas váriaveis ambiente, você vai precisar criar um token e obter o valor do GITHUB_CLIENT_ID e dentro do .env.local você botará como NEXT_PUBLIC_GITHUB_CLIENT_ID e o valor do GITHUB_CLIENT_ID
Back-End:
```bash
$ git clone https://github.com/SkyHeads/spacetime.git
$ cd server
$ npm i (para instalar as dependências)
$ npm run dev
```
Para criar o banco de dados no seu computador, rode o comando:
```bash
$ npx prisma migrate dev
```
Nas váriaveis ambiente, você vai precisar criar um token e obter o valor do GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET e colocar os respectivos valores dentro do .env
## 💻 Projeto
Projeto de um site que armazena e compartilha memórias de um usuário desenvolvido no evento NLW Spacetime da Rocketseat
## 🔖 Layout
Você pode visualizar o layout do projeto através do link abaixo (é necessário ter uma conta do Figma):
- [Acessar o layout no Figma](https://www.figma.com/community/file/1240070456276424762/C%C3%A1psula-do-tempo-%E2%80%A2-Trilha-Ignite)
## 📖 O que eu aprendi
Utilizar bibliotecas como dayjs para manipulação de datas, classnames para utilizar regras css conforme o estado mudar, como transmitir/armazenar de forma segura um JWT e COOKIE, integrar uma conta Github usando o OAuth, conceitos de rota com o NEXTJS, recuperar os parametros da rota
Blur apenas com CSS
## 📝 License
Esse projeto está sob a licença MIT.
