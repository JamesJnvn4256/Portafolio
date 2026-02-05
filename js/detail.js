document.addEventListener('DOMContentLoaded', () => {
    // Check theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));

    const project = projects.find(p => p.id === projectId);

    const main = document.getElementById('main-content');

    if (!project) {
        main.innerHTML = `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h1>Proyecto no encontrado</h1>
                <a href="index.html" class="btn">Volver</a>
            </div>
        `;
        return;
    }

    // Logic to determine what images to show
    let imagesHtml = '';
    if (project.gallery && project.gallery.length > 0) {
        imagesHtml = `
            <section class="project-gallery">
                <div class="container">
                    <h3 style="margin-bottom: 2rem; color: var(--primary-red);">Galería</h3>
                    <div class="gallery-grid">
                        ${project.gallery.map(item => `
                            <div class="gallery-item">
                                <img src="${item.url}" class="gallery-img" alt="${item.caption}">
                                <p class="gallery-caption">${item.caption}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    } else if (project.image && project.image !== "") {
        imagesHtml = `
            <section class="project-gallery">
                <div class="container" style="text-align: center;">
                    <img src="${project.image}" class="gallery-img" style="max-width: 800px; width: 100%;" alt="${project.name}">
                </div>
            </section>
        `;
    }

    // Render Content
    main.innerHTML = `
        <section class="project-hero">
            <div class="container">
                <h1 class="project-title">${project.name}</h1>
                <div class="tech-stack">
                    ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <p style="max-width: 800px; margin: 0 auto; font-size: 1.1rem;">
                    ${project.description}
                </p>
                
                <div class="links-container">
                    ${project.github ? `<a href="${project.github}" class="btn btn-outline" target="_blank"><i class="fab fa-github"></i> Ver Código</a>` : ''}
                    ${project.demo ? `<a href="${project.demo}" class="btn" target="_blank"><i class="fas fa-external-link-alt"></i> Ver Demo</a>` : ''}
                </div>
                ${project.demoMessage ? `<span class="msg-info">${project.demoMessage}</span>` : ''}
            </div>
        </section>

        ${imagesHtml}

        <section class="content-section">
            <div class="container">
                <div class="documentation">
                    ${project.documentation || '<p>No hay documentación detallada disponible para este proyecto.</p>'}
                </div>
            </div>
        </section>
    `;

    // Lightbox Logic
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');

    if (modal && modalImg && captionText) {
        // Add click event to all gallery images
        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('click', () => {
                modal.classList.add('active');
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            });
        });

        // Close logic
        const closeModal = () => {
            modal.classList.remove('active');
        };

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Mouse-follow zoom effect
        let isZoomed = false;

        modalImg.addEventListener('click', (e) => {
            e.stopPropagation();
            isZoomed = !isZoomed;

            if (isZoomed) {
                modalImg.classList.add('zoomed');
            } else {
                modalImg.classList.remove('zoomed');
                modalImg.style.transformOrigin = 'center center';
            }
        });

        modalImg.addEventListener('mousemove', (e) => {
            if (isZoomed) {
                const rect = modalImg.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                modalImg.style.transformOrigin = `${x}% ${y}%`;
            }
        });

        modalImg.addEventListener('mouseleave', () => {
            if (isZoomed) {
                modalImg.style.transformOrigin = 'center center';
            }
        });

        // Reset zoom when closing modal
        const originalCloseModal = closeModal;
        closeModal = () => {
            isZoomed = false;
            modalImg.classList.remove('zoomed');
            modalImg.style.transformOrigin = 'center center';
            originalCloseModal();
        };
    }
});
