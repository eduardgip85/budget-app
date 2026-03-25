# 💸 Budget App

Aplicació web desenvolupada amb **React + TypeScript + Vite** per crear, gestionar i compartir pressupostos de serveis digitals.

---

## 🚀 Funcionalitats

* Selecció de serveis:

  * SEO
  * Ads
  * Web (configurable)
* Configuració de Web:

  * Nombre de pàgines
  * Idiomes
* Càlcul de pressupost en temps real
* Formulari de client amb validació
* Guardat de pressupostos amb **localStorage**
* Llistat de pressupostos:

  * Cerca per nom, servei o import
  * Ordenació per nom o import (asc/desc)
* Vista detallada de cada pressupost
* URL única compartible (`/budget/:id`)

---

## 🛠️ Tecnologies

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM

---

## 📁 Estructura del projecte

```
src/
  components/    → components reutilitzables
  pages/         → pàgines (Home, Detail)
  types/         → tipus TypeScript
  utils/         → funcions auxiliars
```

---

## ▶️ Instal·lació

```bash
npm install
npm run dev
```

---

## 🧠 Conceptes aplicats

* Gestió d’estat amb `useState`
* Components controlats (forms)
* Render condicional
* Derivació d’estat (càlcul total)
* Routing amb React Router
* Persistència amb localStorage
* Arquitectura modular

---

