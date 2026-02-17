# Client (React aplikacija)

Naudotojo darbo vieta sterilizacijos sistemai.
UI atkuria realų sterilizacijos procesą, todėl state modeliuoja workflow, o ne puslapius.

---

## Funkcionalumas

### Darbo vieta
- Instrumentų pasirinkimas
- Skyrių priskyrimas (drag & drop)
- Sterilizatoriaus pasirinkimas
- Spausdintuvo pasirinkimas
- Lipdukų spausdinimas

### Lipdukai
- Paieška
- Filtravimas
- Defektų registravimas
- Panaudojimo patvirtinimas

### Administravimas
- Instrumentai
- Skyriai
- Sterilizatoriai
- Spausdintuvai

### Ataskaitos
- Statistikos grafikai
- Probleminių procesų identifikavimas

---

## Architektūra

- Feature based struktūra
- Redux slices pagal domeną
- Service layer API komunikacijai
- Schemos validacija

---

## Technologijos

- React
- TypeScript
- Redux Toolkit
- Axios
- Zod
- Recharts

---

## Paleidimas
npm install
npm run dev

Reikia veikiančio backend API.
