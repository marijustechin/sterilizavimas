# Server (API)

Backend dalis sterilizacijos sekimo sistemai.
Tai ne CRUD API — serveris modeliuoja realų procesą: sterilizacijos ciklą, instrumento būseną ir auditavimo istoriją.

---

## Architektūra

Naudojama sluoksninė struktūra:
controllers → services → repositories → database
middlewares → autentifikacija / validacija / klaidos

Serveris neturi UI logikos — tik domeno taisykles.

---

## Domeno modelis

Pagrindiniai objektai:

- User
- Instrument
- Sterilizer
- Department
- Printer
- Sticker
- Sterilization cycle

Svarbu: instrumentas turi būseną laike, ne tik atributus.

---

## Funkcionalumas

- JWT autentifikacija
- LDAP prisijungimas
- Rolės ir leidimai
- Sterilizacijos sesijų registravimas
- Lipdukų generavimas
- Defektų registravimas
- Ataskaitų duomenys

---

## Technologijos

- Node.js
- Express
- TypeScript
- Prisma
- JWT
- LDAP
- Middleware validacija

---

## Paleidimas
npm install
npx prisma generate
npm run dev

.env turi DB ir JWT nustatymus.

---

## Dizaino principai

- API aprašo procesą, ne lenteles
- Services saugo verslo logiką
- Controlleriai tik HTTP sluoksnis
- Klaidos centralizuotos






