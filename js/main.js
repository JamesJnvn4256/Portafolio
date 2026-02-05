// ============================================
// CÁLCULO DE EDAD AUTOMÁTICO
// ============================================


// ============================================
// GESTIÓN DE PROYECTOS (SHARED DATA)
// ============================================

// 'projects' variable is loaded from js/projects.js

// Renderizar proyectos en el grid
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    if (filteredProjects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1/-1;">No hay proyectos en esta categoría.</p>';
        return;
    }

    container.innerHTML = filteredProjects.map(project => `
    <div class="card project-card fade-in" style="cursor: pointer;" onclick="window.location.href='project-detail.html?id=${project.id}'">
      <div class="project-image">
        ${project.image
            ? `<img src="${project.image}" alt="${project.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-laptop-code\\'></i>';">`
            : `<i class="fas fa-${getCategoryIcon(project.category)}"></i>`
        }
      </div>
      <div class="project-content">
        <h3>${project.name}</h3>
        ${project.technologies.length > 0 ? `
          <div class="project-tags">
            ${project.technologies.slice(0, 3).map(tech => `<span class="project-tag">${tech}</span>`).join('')}
            ${project.technologies.length > 3 ? `<span class="project-tag">+${project.technologies.length - 3}</span>` : ''}
          </div>
        ` : ''}
        <p>${project.shortDescription || project.description.substring(0, 100) + '...'}</p>
        <div class="project-links">
          <button class="btn btn-outline" style="width: 100%; margin-top: auto;">Ver Detalles</button>
        </div>
      </div>
    </div>
  `).join('');

    // Aplicar animación
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    }, 100);
}

// Obtener icono según categoría
function getCategoryIcon(category) {
    const icons = {
        web: 'globe',
        desktop: 'laptop-code',
        automation: 'robot'
    };
    return icons[category] || 'laptop-code';
}

// Filtrar proyectos
function filterProjects(category) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderProjects(category);
}

// ============================================
// TEMA OSCURO/CLARO
// ============================================
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeIcon.className = "fas fa-moon";
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.className = "fas fa-sun";
        localStorage.setItem("theme", "dark");
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeIcon = document.getElementById("theme-icon");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.className = "fas fa-sun";
    }
}

// ============================================
// MENÚ MÓVIL
// ============================================
function toggleMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// ============================================
// DESPLAZAMIENTO SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        document.querySelector(".nav-links").classList.remove("active");
    });
});

// ============================================
// EFECTO SCROLL HEADER
// ============================================
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.background = "var(--bg-card)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "var(--bg-card)";
        header.style.backdropFilter = "none";
    }
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();
    renderProjects();

    // Año en footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // Observar elementos para animación
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
});
