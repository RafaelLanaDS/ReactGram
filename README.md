# ReactGram

## Rodar localmente

O frontend e a API têm dependências separadas:

1. Em `backend`, execute `npm install`, copie `.env.example` para `.env` e configure `JWT_SECRET` e `MONGODB_URI`.
2. Ainda em `backend`, execute `npm run server`.
3. Em outro terminal, entre em `frontend`, execute `npm install` e depois `npm start`.

O frontend fica em `http://localhost:3000` e a API em `http://localhost:5000`.
Não publique seu arquivo `.env` nem credenciais do MongoDB.