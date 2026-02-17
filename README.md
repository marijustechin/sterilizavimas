# 🏥 Medicininių instrumentų sterilizavimo informacinė sistema

Pilna (full-stack) informacinė sistema, skirta poliklinikos sterilizavimo procesų registravimui, kontrolei ir auditui.
Sistema modeliuoja realią darbo eigą — nuo instrumento sterilizavimo iki jo panaudojimo pacientui — ir leidžia atlikti pilną atsekamumą (traceability).
Šis projektas - realiai naudojamos sistemos prototipas, o ne demonstracinė CRUD aplikacija.

---

## Problema

Medicinos įstaigose sterilizuoti instrumentai dažnai žymimi rankiniu būdu arba naudojant nesusietas sistemas.  
Infekcijos atveju tampa praktiškai neįmanoma atsakyti:

- kas sterilizavo instrumentą
- kuriame skyriuje jis buvo naudojamas
- kuris darbuotojas su juo dirbo
- ar buvo registruoti defektai

Sistema sprendžia būtent šią auditavimo problemą.

---

## Kaip veikia sistema

Kiekvienam instrumentui sugeneruojamas unikalus QR kodas/lipdukas.
Toliau registruojamas visas jo gyvenimo ciklas:
Sterilizatorius → Darbuotojas → Skyrius → Medicinos personalas → Pacientas → Defektas
Tai leidžia identifikuoti klaidos vietą procese, o ne tik faktą, kad klaida įvyko.

---

## Architektūra


Sistema nėra puslapių rinkinys — tai vienas modeliuojamas procesas.

---

## Pagrindinės funkcijos

- Sterilizavimo partijų registravimas
- Lipdukų generavimas ir spausdinimas
- Instrumentų sekimas (lipdukų nuskaitymas panaudojimo metu)
- Defektų registravimas
- Administravimo suvestinė
- Statistinės ataskaitos
- Rolėmis pagrįsta prieiga

---

## Technologijos

**Frontend**
- React + TypeScript
- Redux Toolkit
- Vite
- Zod
- Recharts

**Backend**
- Node.js + Express
- Prisma ORM
- JWT autentifikacija
- LDAP integracija
- Service layer architektūra

---

## Projekto tikslas ir darbo eiga

Projekto tikslas sukurti realiai veikiančią sistemą:

- domeno analizė
- duomenų modeliavimas
- API projektavimas
- UI pagal workflow
- auditui skirtos sistemos kūrimas

---

## Paleidimas

### Server
cd server
npm install
npm run dev

### Client
cd client
npm install
npm run dev

