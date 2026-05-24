# portfolioFitoji

Portfolio personal de Fitoji — sitio estático vanilla (HTML/CSS/JS). Sin build tools, sin frameworks, sin package manager.

## Entrypoints

- `index.html` — única página, archivo activo (entrypoint del sitio)
- `index copy.html` — snapshot anterior, no se sirve. **No editar.**
- `main.js` — único script cargado por `index.html` (vanilla JS, 141 lines)
- `style.css` — toda la hoja de estilos (919 lines, variables CSS + light/dark)
- `CNAME` — `fitoji.dev.ar` (deploy en GitHub Pages o similar)

## Estructura

```
portfolioFitoji/
├── index.html          # Entrypoint activo
├── main.js             # JS cargado en producción
├── style.css           # Todos los estilos
├── CNAME               # Dominio personalizado
├── img/                # Assets estáticos
├── js/                 # ⚠️ NO usado por index.html — viene del workspace `../portfolio-bolt/project`
├── css/                # ⚠️ NO usado por index.html — viene del workspace `../portfolio-bolt/project`
├── .atl/               # Skill registry de OpenCode
└── portfolioFitoji.code-workspace  # Multi-root workspace (referencia externa a portfolio-bolt)
```

## Comandos

No hay. Es HTML estático. Para desarrollo: abrir `index.html` en navegador o usar cualquier servidor estático.

## Convenciones

- **Idioma**: Español (todo el contenido visible)
- **Tema oscuro**: `<html data-theme="dark">`, persistido en `localStorage('darkMode')`
- **Animaciones**: Scroll reveal via clases CSS (`.reveal-slide-left`, `.reveal-slide-right`, `.reveal-scale`)
- **Formulario de contacto**: Comentado en `index.html`. Si se reactiva, validación simple en `main.js` + `alert()` como feedback
- **Sin `.gitignore`** — tener cuidado con `.DS_Store` y archivos del sistema

## Atención al editar

- No hay separación de concerns más allá del HTML/JS/CSS — agregar lógica nueva directamente en los archivos existentes
- Google Fonts (Inter + Rubik) cargadas vía CDN en `<head>` de `index.html`
- El `portfolioFitoji.code-workspace` tiene multi-root con `../portfolio-bolt/project` — `js/` y `css/` locales pertenecen a ese otro proyecto, no a este
