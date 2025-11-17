# Sterilizavimo procesų informacinė sistema

## Diegimas (Deployment)

Ši seka skirta programos atnaujinimui gamybos (production) serveryje.

### 1. Kodo sudarymas (Build)

Prieš kopijuojant, sugeneruokite naujus statinius failus:

a) **Frontend (Client)**
npm run build:client

b) **Backend (Server)**
npm run build:server

### 2. Stabdome programos vykdymą

pm2 stop ecosystem.config.js

### 3. Failų kopijavimas į serverį

Vykdykite diegimo skriptą, kuris perkelia sugeneruotus 'dist' failus ir konfigūracijas į nuotolinį serverį (UNC kelią).

node deploy.js

### 4. Komandos serveryje (Nuotolinė sesija)

Būdami projekto serveryje aplanke (/Autoclave/backend) atlikite šiuos žingsnius:

a) **Gamybinių priklausomybių įdiegimas**
Pašalina senus modulius ir įdiegia tik gamybai reikalingas priklausomybes.
npm install --omit=dev

b) **Prisma modelių generavimas**
Sukuriami reikalingi DB variklio failai ir kliento klasės.
npx prisma generate

c) **Programos paleidimas iš naujo**
Aplikacija paleidžiama iš naujo naudojant PM2 (rekomenduojama naudoti `reload` siekiant nulinės prastovos).
pm2 start ecosystem.config.js
pm2 save
