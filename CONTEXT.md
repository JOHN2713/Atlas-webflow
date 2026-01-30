# ATLAS 3.0 - Contexto del Proyecto

## Estructura del Proyecto
- **Framework**: Next.js 15.2.8
- **Estilos**: Tailwind CSS 4
- **Animaciones**: Framer Motion
- **Fuentes**: 
  - EB Garamond (Serif) - Para títulos y textos principales
  - Source Sans 3 (Sans-serif) - Para textos secundarios

## Paleta de Colores
```css
--atlas-primary: #f7f3ed (Beige claro)
--atlas-dark: #0d1926 (Azul oscuro/negro)
--atlas-secondary: #ebe7e0 (Beige medio)
--atlas-gold: #d4af37 (Dorado)
```

## Páginas Completadas

### ✅ Home (/)
**Componentes:**
- Navigation
- Hero
- Principles
- WhatIsAtlas
- WhoWeServe
- Insights
- ContactCTA
- Footer

### ✅ Philosophy (/philosophy)
**Características:**
- "use client" para evitar errores de hidratación
- Tipografía: 100% font-serif (EB Garamond)
- Enlaces sin subrayado (no-underline)
- Botón final con texto negro

**Secciones:**
1. Hero Section
2. Structure Over Speculation (bg-atlas-primary)
3. Discipline (bg-[#ebe7e0])
4. Governance (bg-atlas-primary)
5. Long-Term Capital Thinking (bg-[#0c1825] - fondo oscuro)
6. Intergenerational Responsibility (bg-atlas-primary)
7. Closing Statement (bg-[#ebe7e0])

**Patrón de CTAs:**
- Enlaces "TALK TO AN EXPERT" al final de cada sección
- Sin subrayado
- Hover con transición
- Último botón con borde y fondo invertido en hover

## Convenciones de Código

### Estructura de Páginas
```tsx
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PageName() {
  return (
    <>
      <Navigation />
      <main>
        {/* Secciones aquí */}
      </main>
      <Footer />
    </>
  );
}
```

### Tipografía
- Títulos H1: `text-5xl md:text-6xl lg:text-7xl font-serif font-light`
- Títulos H2: `text-2xl md:text-3xl font-serif font-light`
- Párrafos: `text-lg md:text-xl lg:text-2xl font-serif leading-relaxed`
- CTAs: `text-xs tracking-[0.2em] uppercase`

### Animaciones
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
```

### Espaciado
- Hero: `pt-32 pb-16 md:pt-40 md:pb-24`
- Secciones: `py-16 md:py-24`
- Container: `container mx-auto max-w-4xl px-6 md:px-12`

## Próximas Páginas
- [ ] Our Services (/services) - EN PROGRESO
- [ ] Insights (/insights)
- [ ] About (/about)
- [ ] Contact (/contact)

## Referencia
Repositorio original: https://github.com/JOHN2713/ATLAS-astro
