# Descrição

Este é um projeto para controle de funcionários usando Nestjs e MongoBD, solicitado pela empresa Tallos. O objetivo é em construir uma API protegida pelo método de autenticação JWT e limitando as ações de cada usuário.

## Instalando as dependências e rodando o projeto:
```
npm run start:docker:dev
```

## Com docker:
```
docker-compose up
```
# Usando a extensão Thunder CLiet
```
1. Ter que baixar a extensão Thunder Client para adicionar um usuário admin para ter acesso a todas as funcionalidade;
  Exemplo:
    Usar o método POST e entrar com a url http://localhost:3000/users/

2. Depois ir em Body, Json e adicionar o comando:
  Exemplo:
    {
      "name": "Paulo Emilio",
      "sector": "gerencia",
      "role": "admin",
      "username": "p.emilio93@hotmail.com",
      "password": "12345"
    }

3. Por último, realizar o teste e se funcionar testar na tela de login o com o email(username) e a senha na tela do frot startada no browser.

Obs.: a aplicação esta um pouco lenta não consegui ainda identificar o motivo.
```