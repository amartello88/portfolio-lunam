# 🃏 Astro vCard

Portfolio personal minimalista construido con **Astro** y **Tailwind CSS**.

## ✨ Características

- **Diseño editorial** con tipografía Playfair Display + DM Sans
- **Animaciones suaves** con Intersection Observer
- **Totalmente responsive** — mobile-first
- **SEO-friendly** — meta tags configurables
- **Navegación sticky** con blur backdrop
- **Timeline de experiencia** interactivo
- **Formulario de contacto**
- **Tech Stack** con hover effects

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## ✏️ Personalización

Edita **`src/pages/index.astro`** — hay una sección marcada con 👇 donde vas tus datos:

```js
const profile = {
  name: 'Tu Nombre',
  role: 'Full Stack Developer',
  bio: 'Tu descripción...',
  avatar: '/perfil.jpg',     // ← coloca tu foto en /public/
  email: 'tu@email.com',
  social: {
    github: 'https://github.com/tuusuario',
    linkedin: '...',
    twitter: '...',
  },
};
```

## 📁 Estructura

```
src/
├── components/
│   ├── Hero.astro         ← Sección principal con foto
│   ├── TechStack.astro    ← Grid de tecnologías
│   ├── Experience.astro   ← Timeline de experiencia
│   ├── Projects.astro     ← Cards de proyectos
│   ├── Contact.astro      ← Formulario de contacto
│   └── Footer.astro
├── layouts/
│   └── Layout.astro       ← HTML base + animaciones
├── pages/
│   └── index.astro        ← 👈 TUS DATOS VAN AQUÍ
└── styles/
    └── global.css         ← Variables CSS + animaciones
public/
├── perfil.jpg             ← Tu foto de perfil
├── proyecto.jpg           ← Imágenes de proyectos
└── favicon.svg
```

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--cream` | `#F5F0E8` | Fondo |
| `--ink` | `#1A1208` | Texto |
| `--gold` | `#C9A84C` | Acentos |
| `--rust` | `#8B3A2A` | Detalles |
| `--sage` | `#5A7A5E` | Secundario |

## 🌐 Deploy

Compatible con **Vercel**, **Netlify**, **Cloudflare Pages** y cualquier plataforma que soporte Node.js o salida estática.

```bash
# En Vercel
vercel

# Build estático
npm run build   # Output en /dist
```
