# Estructura de Ejemplo de Proyectos

Los proyectos se guardan automáticamente en localStorage, pero aquí tienes un ejemplo de cómo se estructura la información:

```json
[
  {
    "id": 1,
    "name": "Sistema de Gestión de Inventario",
    "category": "desktop",
    "description": "Aplicación de escritorio desarrollada en C# para la gestión completa de inventario, incluyendo control de stock, alertas de bajo inventario y reportes detallados.",
    "image": "https://via.placeholder.com/400x200?text=Sistema+Inventario",
    "technologies": ["C#", "Windows Forms", "SQL Server", "Crystal Reports"],
    "github": "https://github.com/tu-usuario/sistema-inventario",
    "demo": ""
  },
  {
    "id": 2,
    "name": "Portal Web Corporativo",
    "category": "web",
    "description": "Sitio web corporativo responsivo con panel de administración, sistema de noticias, galería de imágenes y formulario de contacto. Implementa arquitectura MVC y está optimizado para SEO.",
    "image": "https://via.placeholder.com/400x200?text=Portal+Web",
    "technologies": ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    "github": "https://github.com/tu-usuario/portal-corporativo",
    "demo": "https://demo.portal-corporativo.com"
  },
  {
    "id": 3,
    "name": "Automatización de Reportes RRHH",
    "category": "automation",
    "description": "Sistema de automatización en Excel con VBA para generar reportes automáticos de recursos humanos, cálculo de planillas, y conexión directa con base de datos SQL para importar información actualizada.",
    "image": "",
    "technologies": ["Excel VBA", "SQL Server", "ADO", "Access"],
    "github": "",
    "demo": ""
  },
  {
    "id": 4,
    "name": "API RESTful para E-commerce",
    "category": "web",
    "description": "API RESTful desarrollada para gestionar operaciones de un e-commerce, incluyendo autenticación JWT, gestión de productos, carritos de compra y procesamiento de órdenes.",
    "image": "https://via.placeholder.com/400x200?text=API+REST",
    "technologies": ["PHP", "MySQL", "JWT", "RESTful", "JSON"],
    "github": "https://github.com/tu-usuario/ecommerce-api",
    "demo": ""
  },
  {
    "id": 5,
    "name": "Dashboard de Análisis de Datos",
    "category": "web",
    "description": "Dashboard interactivo para visualización de datos empresariales en tiempo real, con gráficos dinámicos, filtros avanzados y exportación de reportes en múltiples formatos.",
    "image": "https://via.placeholder.com/400x200?text=Dashboard",
    "technologies": ["JavaScript", "Chart.js", "Bootstrap", "PHP", "MySQL"],
    "github": "https://github.com/tu-usuario/dashboard-analytics",
    "demo": "https://demo.dashboard-analytics.com"
  },
  {
    "id": 6,
    "name": "Sistema de Punto de Venta",
    "category": "desktop",
    "description": "Software de punto de venta completo con gestión de productos, clientes, ventas, impresión de tickets, control de caja y reportes de ventas diarias. Incluye módulo de facturación electrónica.",
    "image": "",
    "technologies": ["C#", ".NET Framework", "SQL Server", "Crystal Reports"],
    "github": "https://github.com/tu-usuario/pos-system",
    "demo": ""
  },
  {
    "id": 7,
    "name": "Bot de WhatsApp Automatizado",
    "category": "automation",
    "description": "Bot automatizado para WhatsApp Business que responde consultas frecuentes, agenda citas automáticamente y envía recordatorios programados. Integrado con base de datos para personalización de respuestas.",
    "image": "https://via.placeholder.com/400x200?text=WhatsApp+Bot",
    "technologies": ["Python", "Selenium", "MySQL", "Flask"],
    "github": "https://github.com/tu-usuario/whatsapp-bot",
    "demo": ""
  },
  {
    "id": 8,
    "name": "Sistema de Reservas Online",
    "category": "web",
    "description": "Plataforma web para gestión de reservas con calendario interactivo, notificaciones por email, panel de administración y pasarela de pagos integrada.",
    "image": "https://via.placeholder.com/400x200?text=Reservas",
    "technologies": ["PHP", "MySQL", "JavaScript", "FullCalendar.js", "PayPal API"],
    "github": "",
    "demo": "https://demo.reservas-online.com"
  }
]
```

## Cómo Usar Este Ejemplo

### Método 1: A través del Panel de Administración (Recomendado)

1. Abre tu portafolio en el navegador
2. Haz clic en el botón de engranaje (⚙️)
3. Agrega cada proyecto manualmente usando el formulario

### Método 2: Importar Directamente en localStorage (Avanzado)

1. Abre tu portafolio en el navegador
2. Presiona F12 para abrir las DevTools
3. Ve a la pestaña "Console"
4. Pega el siguiente código (reemplazando el array con tus proyectos):

```javascript
const proyectos = [
  // Pega aquí el array JSON de arriba
];

localStorage.setItem('portfolioProjects', JSON.stringify(proyectos));
location.reload();
```

## Estructura de Cada Proyecto

Cada proyecto debe tener esta estructura:

```javascript
{
  "id": 1,                    // Número único (se genera automáticamente)
  "name": "Nombre",           // Requerido
  "category": "web",          // Requerido: "web", "desktop", o "automation"
  "description": "...",       // Requerido
  "image": "URL",            // Opcional: URL de la imagen
  "technologies": [...],      // Array de strings
  "github": "URL",           // Opcional
  "demo": "URL"              // Opcional
}
```

## Consejos para Imágenes

Si no tienes imágenes de tus proyectos, puedes:

1. **Dejar el campo vacío**: Se mostrará un ícono según la categoría
2. **Usar placeholders**: Como "https://via.placeholder.com/400x200?text=Tu+Proyecto"
3. **Crear screenshots**: Toma capturas de pantalla de tus proyectos y súbelas a:
   - GitHub (en el mismo repositorio, carpeta `assets/projects/`)
   - Imgur (https://imgur.com)
   - Cloudinary (https://cloudinary.com)

## Categorías Disponibles

- **web**: Proyectos web, APIs, sitios web
- **desktop**: Aplicaciones de escritorio, software Windows
- **automation**: Scripts, bots, automatizaciones

Cada categoría tiene su propio ícono y color distintivo.
