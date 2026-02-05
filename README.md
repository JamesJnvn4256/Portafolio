# Portfolio - James Nicolás Velezmoro Navarro

Portafolio profesional personal desarrollado con HTML, CSS y JavaScript vanilla.

## 🌟 Características

- **Cálculo automático de edad**: Tu edad se actualiza automáticamente basándose en tu fecha de nacimiento (22 de junio de 2005)
- **Sección para foto de perfil**: Espacio dedicado para tu foto personal
- **Gestión dinámica de proyectos**: Agrega, edita y elimina proyectos sin necesidad de una base de datos
- **Tema oscuro/claro**: Los usuarios pueden alternar entre temas
- **Responsive**: Se adapta a todos los dispositivos
- **Almacenamiento local**: Los proyectos se guardan en localStorage del navegador

## 📁 Estructura de Archivos

```
portfolio/
│
├── portfolio.html          # Archivo principal
├── README.md              # Este archivo
│
└── assets/                # Carpeta para recursos (crear esta carpeta)
    ├── profile.jpg        # Tu foto de perfil
    └── cv.pdf            # Tu CV en PDF
```

## 🚀 Instrucciones de Uso

### 1. Agregar tu Foto de Perfil

1. Crea una carpeta llamada `assets` en el mismo directorio del archivo HTML
2. Coloca tu foto de perfil en esa carpeta con el nombre `profile.jpg`
3. Formatos recomendados: JPG, PNG
4. Tamaño recomendado: 400x400 píxeles (cuadrada)

Si no tienes foto todavía, aparecerá un icono de usuario como placeholder.

### 2. Agregar tu CV

1. Coloca tu CV en PDF en la carpeta `assets` con el nombre `cv.pdf`
2. El botón de descarga en la página funcionará automáticamente

### 3. Gestionar Proyectos

**Opción 1: Usando el Panel de Administración (Recomendado)**

1. Haz clic en el botón de engranaje (⚙️) en la esquina inferior derecha
2. Se abrirá el panel de gestión de proyectos
3. Desde ahí puedes:
   - Ver todos tus proyectos
   - Agregar nuevos proyectos
   - Editar proyectos existentes
   - Eliminar proyectos

**Campos del formulario de proyectos:**
- **Nombre**: Título del proyecto
- **Categoría**: Web, Escritorio, o Automatización
- **Descripción**: Descripción detallada del proyecto
- **URL de Imagen**: (Opcional) Enlace a una imagen del proyecto
- **Tecnologías**: Presiona Enter después de escribir cada tecnología
- **GitHub**: (Opcional) Enlace al repositorio
- **Demo**: (Opcional) Enlace a la demo en vivo

**Opción 2: Editando el Código**

Puedes editar directamente el array `defaultProjects` en el código JavaScript (línea ~910) para agregar proyectos predeterminados.

### 4. Personalizar Información

Busca en el HTML y modifica:

- **Redes sociales**: Busca "linkedin.com/in/tu-perfil" y reemplaza con tus enlaces reales
- **Email y teléfono**: Ya están configurados, pero verifica que sean correctos
- **Descripción personal**: En la sección "Sobre Mí"
- **Experiencia laboral**: En la sección "Experiencia"
- **Habilidades**: En la sección "Habilidades"

## 🎨 Personalización de Colores

Para cambiar el color principal (rojo), busca en el CSS:

```css
:root {
  --primary-red: #dc2626;        /* Color principal */
  --primary-red-hover: #b91c1c;  /* Color al pasar el mouse */
}
```

## 📱 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos (HTML + carpeta assets)
3. Ve a Settings → Pages
4. Selecciona la rama main y carpeta root
5. Guarda y espera unos minutos
6. Tu portfolio estará en: `https://tu-usuario.github.io/nombre-repositorio`

## 💾 Almacenamiento de Datos

Los proyectos se guardan en el **localStorage del navegador**:
- No necesitas base de datos
- Los datos persisten entre sesiones
- Los datos son específicos del navegador
- Si cambias de navegador o dispositivo, necesitarás volver a agregar los proyectos

**Ventajas:**
- ✅ Funciona sin servidor
- ✅ Gratis
- ✅ Perfecto para GitHub Pages

**Desventajas:**
- ❌ Los datos no se sincronizan entre dispositivos
- ❌ Si limpias el caché del navegador, pierdes los datos

**Solución:** Exporta/importa tus proyectos periódicamente (función que puedes agregar más adelante).

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Font Awesome (Iconos)
- LocalStorage API

## 📞 Contacto

- **Email**: jamesdelu25@gmail.com
- **Teléfono**: +51 918 498 655
- **Ubicación**: Comas, Lima - Perú

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portafolio.

---

**Desarrollado por James Nicolás Velezmoro Navarro** © 2025
