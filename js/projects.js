const projects = [
  {
    id: 1,
    name: "PlenitSoftPlla - Sistema de RRHH",
    category: "web",
    shortDescription: "Aplicación web empresarial (BFF) en Laravel 12. Gestión integral de RRHH consumiendo API .NET.",
    description: "Aplicación web empresarial desarrollada en Laravel 12 que funciona como Backend for Frontend (BFF). Gestiona integralmente recursos humanos, planillas, contratos y reportes consumiendo una infraestructura de servicios centralizada en .NET.",
    image: "assets/PlenitSoft/logo-light.png",
    technologies: ["Laravel 12 (BFF)", "PHP 8.2", "JavaScript Vanilla", "CSS Variables", "Blade", "Guzzle"],
    github: "",
    demo: "",
    demoMessage: "Demo no disponible por privacidad",
    gallery: [
      { url: "assets/PlenitSoft/login.png", caption: "Login: Autenticación contra API externa (auth/login.blade.php)" },
      { url: "assets/PlenitSoft/dashboard.png", caption: "Dashboard: Métricas dinámicas y gráficos (dashboard/inicio.blade.php)" },
      { url: "assets/PlenitSoft/empleados.png", caption: "Empleados: Listado con filtros AJAX y tarjetas (empleados/inicio.blade.php)" },
      { url: "assets/PlenitSoft/ficha_empleado.png", caption: "Ficha: Datos Generales - Información personal y contacto (empleados/detalle.blade.php)" },
      { url: "assets/PlenitSoft/ficha_empleado2.png", caption: "Ficha: Historial Laboral - Gestión multi-empresa, cargos y sueldos" },
      { url: "assets/PlenitSoft/ficha_empleado3.png", caption: "Ficha: Fondo de Pensiones - Consulta API AFP/ONP" },
      { url: "assets/PlenitSoft/ficha_empleado4.png", caption: "Ficha: Observaciones - Registro de incidencias" },
      { url: "assets/PlenitSoft/ficha_empleado5.png", caption: "Ficha: Reporte Integral - Descarga completa del legajo y datos del empleado" },
      { url: "assets/PlenitSoft/contratos1.png", caption: "Contratos: Generación Individual - Creación para un solo empleado" },
      { url: "assets/PlenitSoft/contratos2.png", caption: "Contratos: Masivo Uniforme - Lote con mismas fechas para todos" },
      { url: "assets/PlenitSoft/contratos3.png", caption: "Contratos: Personalizado - Lote con fechas distintas por empleado" },
      { url: "assets/PlenitSoft/contratos4.png", caption: "Contratos: Renovaciones - Listado de alertas y gestión de vencimientos" },
      { url: "assets/PlenitSoft/reportes.png", caption: "Reportes: Centro unificado de reportes (reportes/reportes.blade.php)" },
      { url: "assets/PlenitSoft/reportes2.png", caption: "Reportes: Vista Detallada - Visualización de la data o reporte específico" },
      { url: "assets/PlenitSoft/confUsuarios.png", caption: "CRUD: Gestión de Usuarios - Solo acceso Administrador" },
      { url: "assets/PlenitSoft/confEmpresas.png", caption: "CRUD: Gestión de Empresas" },
      { url: "assets/PlenitSoft/confSucursales.png", caption: "CRUD: Gestión de Sucursales" },
      { url: "assets/PlenitSoft/confCargos.png", caption: "CRUD: Gestión de Cargos" }
    ],
    documentation: `
      <blockquote>
        <p><strong>⚠️ Proyecto en Desarrollo:</strong> Este sistema está actualmente en desarrollo activo y puede presentar algunas inconsistencias o funcionalidades en proceso de implementación.</p>
      </blockquote>

      <h3>1. Visión General</h3>
      <p>Este proyecto ("PlenitSoftPlla") es una aplicación web empresarial desarrollada en Laravel 12 (PHP 8.2). Funciona bajo una arquitectura de <strong>Backend for Frontend (BFF)</strong>, actuando como interfaz de usuario cliente que consume una infraestructura de servicios centralizada (API REST en .NET).</p>
      <p>El objetivo principal es la gestión integral de recursos humanos y planillas, permitiendo administrar empleados, contratos, reportes, usuarios y configuraciones corporativas.</p>
      
      <h4>Arquitectura Clave</h4>
      <ul>
        <li><strong>Rol de Laravel:</strong> No gestiona la lógica de negocio profunda ni la base de datos principal directamente. Actúa como un proxy inteligente que renderiza vistas, valida entradas básicas y se comunica con la API Backend.</li>
        <li><strong>API Backend:</strong> La fuente de verdad. Laravel se comunica con ella usando Tokens Bearer almacenados en sesión.</li>
      </ul>

      <h3>2. Tecnologías y Herramientas</h3>
      <h4>Backend (BFF)</h4>
      <ul>
        <li><strong>Framework:</strong> Laravel 12.x.</li>
        <li><strong>Cliente HTTP:</strong> Guzzle (nativo de Laravel) para comunicación con API Externa.</li>
        <li><strong>Sesiones:</strong> Driver de archivo (por defecto) para persistencia de Tokens de autenticación.</li>
      </ul>
      <h4>Frontend</h4>
      <ul>
        <li><strong>Motor de Plantillas:</strong> Blade.</li>
        <li><strong>Estilos (CSS):</strong> Sistema de Diseño Personalizado (CSS nativo variables + utilitarias). NO se usa TailwindCSS ni Bootstrap.</li>
        <li>Build Tool: Vite (para empaquetado y hot-reload).</li>
        <li>JavaScript: Vanilla JS moderno + Axios para interacciones asíncronas (AJAX).</li>
      </ul>

      <h3>3. Estructura de Directorios y Patrones</h3>
      <p><strong>Patrón Service-Proxy:</strong> El proyecto no usa Eloquent Models conectados a BD SQL. En su lugar usa Servicios en <code>app/Services/</code> que encapsulan las llamadas a la API externa.</p>
      <ul>
        <li><code>app/Http/Controllers/</code>: Reciben la petición del navegador, llaman al Servicio y retornan una Vista o JSON.</li>
        <li><code>app/Services/</code>: Construyen la petición HTTP (GET/POST/PUT), inyectan headers (Authorization Bearer) y manejan la respuesta de la API .NET. Ejemplo: <code>EmpleadoService</code>.</li>
      </ul>
      <p><strong>Helpers Globales:</strong> <code>AuthHelper</code> abstrae el acceso a la sesión del usuario (Token, Usuario) y permite verificar permisos en cualquier parte.</p>

      <h3>4. Módulos del Sistema</h3>
      
      <h4>4.1 Autenticación y Seguridad</h4>
      <p>Login contra API externa. Gestión de usuarios con asignación de roles. Middleware para protección de rutas (verificación de Token).</p>

      <h4>4.2 Gestión de Personal (Empleados)</h4>
      <p>El módulo central "Ficha del Empleado" gestiona la información en 4 vistas principales:</p>
      <ul>
        <li><strong>Datos Generales:</strong> Información personal, dirección y contacto.</li>
        <li><strong>Historial Laboral:</strong> Vital para la arquitectura multi-empresa. Gestiona cargos, fecha de ingreso y sueldos, permitiendo traslados o reingresos entre distintas razones sociales del grupo.</li>
        <li><strong>Fondo de Pensiones:</strong> Integración con API propia para consultar y validar la situación de afiliación (AFP/ONP) en tiempo real.</li>
        <li><strong>Observaciones:</strong> Registro de incidencias o notas administrativas.</li>
      </ul>
      <p>Incluye además listado avanzado con filtros AJAX e integraciones con RENIEC.</p>

      <h4>4.3 Gestión Contractual</h4>
      <p>Sistema integral de documentación con 4 flujos de trabajo:</p>
      <ul>
        <li><strong>Individual:</strong> Creación rápida para ingresos únicos.</li>
        <li><strong>Masivo Uniforme:</strong> Generación en lote compartiendo plazos.</li>
        <li><strong>Masivo Personalizado:</strong> Carga compleja donde cada contrato tiene fechas distintas.</li>
        <li><strong>Renovaciones:</strong> Dashboard de seguimiento para contratos próximos a vencer.</li>
      </ul>

      <h4>4.4 Reportes e Inteligencia de Negocios</h4>
      <p>Generación de reportes como Vida Ley en Excel. Centro de reportes unificado para boletas, 5ta categoría, etc.</p>

      <h4>4.5 Configuración Corporativa (Solo Administrador)</h4>
      <p>Módulo de acceso restringido para la gestión de maestros del sistema (CRUDs):</p>
      <ul>
        <li><strong>Gestión de Usuarios:</strong> Administración de accesos y roles.</li>
        <li><strong>Gestión de Empresas:</strong> Administración de razones sociales del grupo.</li>
        <li><strong>Gestión de Sucursales:</strong> Sedes físicas.</li>
        <li><strong>Gestión de Cargos:</strong> Estructura jerárquica y salarial.</li>
      </ul>

      <h3>5. Vistas Clave y Estructura</h3>
      <ul>
        <li><strong>auth/login.blade.php:</strong> Pantalla de inicio de sesión.</li>
        <li><strong>dashboard/inicio.blade.php:</strong> Panel principal con carga dinámica de estadísticas.</li>
        <li><strong>empleados/inicio.blade.php:</strong> Contenedor principal del módulo de empleados con tarjetas (cards.blade.php).</li>
        <li><strong>empleados/detalle.blade.php:</strong> Ficha técnica completa del empleado.</li>
        <li><strong>empleados/contratos/inicio.blade.php:</strong> Interfaz para gestión contractual (Individual, Masiva, Personalizada).</li>
        <li><strong>reportes/reportes.blade.php:</strong> Centro de descarga de reportes.</li>
        <li><strong>layouts/app.blade.php:</strong> Esqueleto principal con partials para header y sidebar.</li>
      </ul>

       <h3>6. RoadMap Técnico</h3>
       <ul>
          <li>Expansión de Reportes: Conectar placeholders visuales a endpoints de backend.</li>
          <li>Implementación completa de planillas y boletas de pago.</li>
       </ul>
    `
  },
  {
    id: 2,
    name: "Plenit - API RESTful",
    category: "web",
    shortDescription: "Backend robusto construido con ASP.NET Core y autenticación JWT. Centraliza la lógica de negocio.",
    description: "Backend robusto construido con ASP.NET Core y autenticación JWT. Centraliza la lógica de negocio para la gestión de cargos, empleados, departamentos y seguridad. Incluye consultas a servicios externos (SBS) y generación de reportes complejos.",
    image: "assets/PlenitApiRest/LogoApi.png",
    technologies: ["C#", "ASP.NET Core", "JWT", "SQL Server", "REST API"],
    github: "",
    demo: "",
    demoMessage: "Demo no disponible por privacidad",
    gallery: [
      { url: "assets/PlenitApiRest/Swagger.png", caption: "Swagger: Documentación interactiva de todos los endpoints de la API" },
      { url: "assets/PlenitApiRest/Contrato.png", caption: "Contrato Generado: Documento Word con marcadores reemplazados dinámicamente" },
      { url: "assets/PlenitApiRest/Reporte.png", caption: "Reporte Vida Ley: Excel generado con datos de empleados" },
      { url: "assets/PlenitApiRest/DiagramaFlujo.png", caption: "Diagrama de Flujo: Algoritmo de generación de contratos" },
      { url: "assets/PlenitApiRest/DiagramaSecuencia.png", caption: "Diagrama de Secuencia: Flujo de datos entre capas" },
      { url: "assets/PlenitApiRest/DiagramaER.png", caption: "Diagrama ER: Modelo entidad-relación de la base de datos" }
    ],
    documentation: `
      <blockquote>
        <p><strong>⚠️ Proyecto en Desarrollo:</strong> Esta API está actualmente en desarrollo activo y puede presentar algunas inconsistencias o funcionalidades en proceso de implementación.</p>
      </blockquote>

      <h3>Descripción General</h3>
      <p>API REST construida con <strong>ASP.NET Core</strong> que centraliza la lógica de negocio para el sistema de RRHH. Utiliza autenticación <strong>JWT (Bearer Token)</strong> y sigue una arquitectura en capas (Controllers → Services → Repositories → Database).</p>
      <p><strong>Base URL:</strong> <code>/api</code></p>

      <h3>Autenticación</h3>
      <p>Todos los endpoints requieren un token JWT en el header: <code>Authorization: Bearer {token}</code></p>
      <ul>
        <li><code>POST /api/Auth/login</code>: Inicia sesión y obtiene tokens (Access + Refresh).</li>
        <li><code>POST /api/Auth/refresh</code>: Renueva el Access Token.</li>
        <li><code>GET /api/Auth/perfil</code>: Obtiene información del usuario autenticado.</li>
      </ul>

      <h3>Módulo de Contratos</h3>
      <p>Genera contratos laborales en formato Word (.docx) utilizando plantillas predefinidas con marcadores de texto que se reemplazan dinámicamente.</p>

      <h4>Plantillas Disponibles</h4>
      <p>El sistema maneja 5 plantillas según la empresa: ALMACEN, GIAMBAR, GIFLOLEU, PROCERES, AMBAMA.</p>

      <h4>Endpoints Principales</h4>
      <ul>
        <li><strong>POST /api/Contrato/generar</strong>: Genera contrato individual con fechas personalizadas.</li>
        <li><strong>POST /api/Contrato/generar-masivo</strong>: Genera múltiples contratos con las MISMAS fechas (retorna ZIP).</li>
        <li><strong>POST /api/Contrato/generar-masivo-personalizado</strong>: Genera múltiples contratos con fechas DIFERENTES por empleado.</li>
        <li><strong>POST /api/Contrato/renovar</strong>: Renueva contrato existente con nuevas fechas.</li>
        <li><strong>GET /api/Contrato/listar</strong>: Lista contratos con filtros (VIGENTE, VENCIDO, TODOS).</li>
        <li><strong>POST /api/Contrato/actualizar-vencidos</strong>: Marca automáticamente contratos vencidos.</li>
      </ul>

      <h4>Algoritmo de Generación (OpenXML)</h4>
      <ol>
        <li>Validar datos del empleado y fechas</li>
        <li>Obtener información completa desde BD (empleado + historial laboral)</li>
        <li>Construir DTO del contrato con datos procesados</li>
        <li>Seleccionar plantilla según empresa</li>
        <li>Copiar plantilla a carpeta temporal</li>
        <li>Abrir documento Word con OpenXML</li>
        <li>Generar diccionario de reemplazos (marcadores → valores)</li>
        <li>Recorrer todos los elementos Text y reemplazar marcadores</li>
        <li>Guardar documento modificado</li>
        <li>Registrar contrato en BD</li>
        <li>Retornar archivo .docx</li>
      </ol>

      <h4>Marcadores Dinámicos</h4>
      <ul>
        <li><code>[Prefijo]</code>: "Don/Doña" + Nombre completo</li>
        <li><code>[DNI]</code>: Documento de identidad</li>
        <li><code>[Puesto]</code>: Cargo del empleado</li>
        <li><code>[Inicio]</code> / <code>[Fin]</code>: Fechas formateadas ("01 de enero del 2024")</li>
        <li><code>Chexto</code>: Sueldo en texto ("Mil Quinientos 00/100 soles")</li>
        <li><code>QUINTACLAUSULA</code>: Cláusula dinámica según si tiene bono</li>
        <li><code>CHUPERDIRECCIONE</code>: Dirección completa con detección automática de Callao</li>
      </ul>

      <h4>Características Avanzadas</h4>
      <ul>
        <li><strong>Detección Automática de Callao:</strong> Ajusta formato de dirección según ubicación</li>
        <li><strong>Conversión Numérica a Texto:</strong> Usa Humanizer para convertir sueldos</li>
        <li><strong>Procesamiento Paralelo:</strong> Generación masiva con semáforos (máx 3 concurrentes)</li>
        <li><strong>Manejo de Errores Parciales:</strong> Continúa procesando aunque algunos fallen</li>
        <li><strong>Limpieza Automática:</strong> Elimina archivos temporales en bloques finally</li>
      </ul>

      <h3>Módulo de Reportes</h3>
      <p>Genera reportes en formato Excel (.xls) utilizando plantillas y llenándolas con datos desde Stored Procedures.</p>

      <h4>Reporte Vida Ley</h4>
      <p><strong>GET /api/Reporte/vida-ley?idEmpresa=2&soloActivos=true</strong></p>
      <p>Genera reporte Excel con información de empleados para el trámite de Vida Ley (seguro de vida).</p>

      <h4>Algoritmo de Generación (NPOI)</h4>
      <ol>
        <li>Ejecutar SP <code>spGenerarVidaLey</code> con filtros</li>
        <li>Cargar plantilla Excel desde carpeta Plantillas</li>
        <li>Abrir workbook con NPOI (HSSFWorkbook para .xls)</li>
        <li>Obtener hoja 'Trama Estándard'</li>
        <li>Copiar estilo de primera fila de datos</li>
        <li>Iterar sobre cada empleado y crear filas</li>
        <li>Llenar 12 columnas por empleado (TipoProducto, DNI, Nombres, Fechas, Sueldo, etc.)</li>
        <li>Aplicar estilos preservados</li>
        <li>Escribir workbook a MemoryStream</li>
        <li>Retornar archivo Excel</li>
      </ol>

      <h3>Módulo de Empleados</h3>
      <ul>
        <li><code>POST /api/empleados</code>: Crea empleado completo con historial laboral</li>
        <li><code>GET /api/empleados/listar</code>: Listado avanzado con múltiples filtros</li>
        <li><code>POST /api/empleados/gestionar-completo</code>: Gestión centralizada (Facade pattern)</li>
        <li><code>GET /api/empleados/{id}/detalle</code>: Información completa del empleado</li>
      </ul>

      <h3>Módulo de Dashboard</h3>
      <ul>
        <li><code>GET /api/Dashboard/metrics</code>: Métricas clave filtradas por fecha, empresa y sucursal</li>
      </ul>

      <h3>Otros Módulos</h3>
      <h4>Cargos</h4>
      <ul>
        <li><code>GET /api/cargos</code>: Lista todos los cargos con filtros</li>
        <li><code>POST /api/cargos</code>: Crea un nuevo cargo</li>
        <li><code>PATCH /api/cargos/{id}/alternar-estado</code>: Activa/Desactiva (borrado lógico)</li>
      </ul>

      <h4>Permisos y Seguridad (RBAC)</h4>
      <ul>
        <li>Gestión completa de Roles y Permisos</li>
        <li>Asignación masiva de permisos a roles</li>
        <li>Verificación granular de permisos por usuario</li>
      </ul>

      <h3>Arquitectura</h3>
      <p><strong>Patrón de Capas:</strong></p>
      <ul>
        <li><strong>Controllers:</strong> Reciben requests HTTP y validan datos</li>
        <li><strong>Services:</strong> Lógica de negocio (ContratoService, DocumentoService, ReporteService)</li>
        <li><strong>Repositories:</strong> Acceso a datos con Dapper</li>
        <li><strong>Database:</strong> SQL Server con Stored Procedures</li>
      </ul>

      <h3>Tecnologías</h3>
      <ul>
        <li><strong>Framework:</strong> ASP.NET Core</li>
        <li><strong>ORM:</strong> Dapper (micro-ORM)</li>
        <li><strong>Procesamiento Word:</strong> DocumentFormat.OpenXml</li>
        <li><strong>Procesamiento Excel:</strong> NPOI</li>
        <li><strong>Conversión Numérica:</strong> Humanizer</li>
        <li><strong>Autenticación:</strong> JWT (JSON Web Tokens)</li>
        <li><strong>Logging:</strong> ILogger para trazabilidad</li>
      </ul>
    `
  },
  {
    id: 3,
    name: "ExcelPlla - Sistema de Nómina VBA",
    category: "automation",
    shortDescription: "Sistema integral de planillas en Excel VBA con conexión SQL Server. Automatiza desde asistencia hasta liquidaciones.",
    description: "Solución empresarial en Excel VBA que gestiona el ciclo completo de nómina: asistencia, cálculo de pagos, planillas, reportes financieros y liquidaciones. Conexión directa a SQL Server vía ADO. Soporte multi-empresa con generación masiva de documentos (boletas, certificados, cartas CTS).",
    image: "assets/ExcelPlla/Logo.png",
    technologies: ["Excel VBA", "SQL Server", "ADO", "Macros"],
    github: "",
    demo: "",
    demoMessage: "Demo no disponible por privacidad",
    gallery: [
      { url: "assets/ExcelPlla/Asistencia.png", caption: "Hoja 1: Asistencia - Registro de marcaciones, faltas y observaciones" },
      { url: "assets/ExcelPlla/CalculoPago.png", caption: "Hoja 2: Cálculo de Pago - Procesamiento automático por trabajador" },
      { url: "assets/ExcelPlla/BaseDatos.png", caption: "Hoja 3: Base de Datos - Conexión ADO con datos de empleados" },
      { url: "assets/ExcelPlla/ReportePlanilla.png", caption: "Hoja 4: Reporte de Planilla - Consolidado con conceptos adicionales" },
      { url: "assets/ExcelPlla/ReportePagos.png", caption: "Hoja 5: Reporte de Pagos - Documento para Finanzas" },
      { url: "assets/ExcelPlla/Liquidaciones.png", caption: "Hoja 6: Liquidaciones - Ceses, certificados y carta CTS" },
      { url: "assets/ExcelPlla/Configuracion.png", caption: "Hoja 7: Configuración - Parámetros del sistema y empresa" },
      { url: "assets/ExcelPlla/CertificadoTrabajo.png", caption: "Documento: Certificado de Trabajo - Generación automática" },
      { url: "assets/ExcelPlla/CartaCTS.png", caption: "Documento: Carta CTS - Generación automática" },
      { url: "assets/ExcelPlla/BoletaPago.png", caption: "Documento: Boleta de Pago - Generación e impresion masiva de Boletas" }
    ],
    documentation: `
      <h3>Descripción General</h3>
      <p>ExcelPlla es un sistema integral de gestión de planillas desarrollado en <strong>Excel VBA</strong> que automatiza el flujo completo desde la asistencia hasta la generación de documentos de cese. Está organizado en 7 hojas que siguen el proceso natural de nómina.</p>

      <h3>Flujo de Negocio</h3>

      <h4>1. Hoja de Asistencia</h4>
      <p>Punto de entrada del sistema. Registra la asistencia diaria de cada trabajador:</p>
      <ul>
        <li><strong>Marcaciones:</strong> Entrada y salida.</li>
        <li><strong>Incidencias:</strong> Faltas, tardanzas y permisos.</li>
        <li><strong>Observaciones:</strong> Notas asociadas a cada registro.</li>
      </ul>
      <p>Esta información es la base para el cálculo posterior de pagos.</p>

      <h4>2. Hoja de Cálculo de Pago</h4>
      <p>A partir del reporte de asistencia, realiza el cálculo automático trabajador por trabajador:</p>
      <ul>
        <li>Días laborados</li>
        <li>Incidencias registradas</li>
        <li>Observaciones válidas para el cálculo</li>
      </ul>
      <p>El resultado es el monto de pago individual de cada empleado.</p>

      <h4>3. Hoja de Base de Datos</h4>
      <p>Conexión directa a SQL Server vía <strong>ADO</strong>. Contiene todos los datos necesarios:</p>
      <ul>
        <li>Datos personales</li>
        <li>Condiciones laborales</li>
        <li>Información contractual y salarial</li>
      </ul>
      <p>Los cálculos se realizan con esta información y los resultados se almacenan nuevamente en la BD para uso posterior.</p>

      <h4>4. Hoja de Reporte de Planilla</h4>
      <p>Consolida la información final de la planilla. Permite el ingreso manual de conceptos adicionales:</p>
      <ul>
        <li>Reintegros</li>
        <li>Vacaciones</li>
        <li>Gratificaciones</li>
        <li>Bonificaciones</li>
        <li>Adelantos</li>
      </ul>
      <p>Con esta información se genera la planilla completa del período.</p>

      <h4>5. Hoja de Reporte de Pagos</h4>
      <p>Basada en el reporte de planilla, genera el documento que se entrega al área de <strong>Finanzas</strong> para validación y ejecución de pagos.</p>

      <h4>6. Hoja de Liquidaciones</h4>
      <p>Aprovechando la flexibilidad de Excel, permite:</p>
      <ul>
        <li>Realizar liquidaciones de trabajadores cesados</li>
        <li>Liquidarlos en el mismo período de la planilla</li>
      </ul>
      <p>Desde esta hoja también se generan:</p>
      <ul>
        <li>Certificado de trabajo</li>
        <li>Carta CTS</li>
      </ul>

      <h4>7. Hoja de Configuración</h4>
      <p>Centraliza los parámetros generales del sistema:</p>
      <ul>
        <li>Gestión de observaciones válidas para el cálculo de pago</li>
        <li>Datos de la empresa</li>
        <li>Relación de trabajadores afectos a Renta de 5ta categoría</li>
        <li>Fecha de la planilla en proceso</li>
        <li>Porcentajes de aporte a los fondos de pensiones</li>
      </ul>

      <h3>Características Técnicas</h3>
      <ul>
        <li><strong>Conexión SQL:</strong> ADO para lectura/escritura en tiempo real.</li>
        <li><strong>Multi-Empresa:</strong> Cambio dinámico de contexto empresarial.</li>
        <li><strong>Generación Masiva:</strong> Boletas de pago, certificados y liquidaciones.</li>
        <li><strong>Automatización:</strong> Macros VBA para todo el flujo de procesamiento.</li>
      </ul>
    `
  }
];
