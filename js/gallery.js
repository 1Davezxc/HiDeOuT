document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Array of your 100+ images
    const galleryImages = [
        { src: 'images/geb1.jpg', caption: 'GEB' },
        { src: 'images/geb2.jpg', caption: 'GEB' },
        { src: 'images/geb3.jpg', caption: 'GEB' },
        { src: 'images/geb4.jpg', caption: 'GEB' },
        { src: 'images/geb5.jpg', caption: 'GEB' },
        { src: 'images/geb6.jpg', caption: 'GEB' },
        { src: 'images/geb7.jpg', caption: 'GEB' },
        { src: 'images/geb8.jpg', caption: 'GEB' },
        { src: 'images/geb9.jpg', caption: 'GEB' },
        { src: 'images/geb10.jpg', caption: 'GEB' },
        { src: 'images/geb11.jpg', caption: 'GEB' },
        { src: 'images/geb12.jpg', caption: 'GEB' },
        // Add your 100+ images here in the same format
        // { src: 'images/geb9.jpg', caption: 'Guild Event 9' },
        // { src: 'images/geb10.jpg', caption: 'Guild Event 10' },
        // ... continue for all images
    ];

    // Load gallery images
    function loadGallery() {
        galleryGrid.innerHTML = '';
        
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'full-gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.caption}" data-index="${index}">
                <div class="full-gallery-caption">${image.caption}</div>
            `;
            galleryGrid.appendChild(galleryItem);
        });

        // Add click event to images
        document.querySelectorAll('.full-gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openLightbox(index);
            });
        });
    }

    // Lightbox functionality (same as before)
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentImageIndex = 0;

    function openLightbox(index) {
        currentImageIndex = index;
        const img = galleryImages[currentImageIndex];
        lightboxImage.src = img.src;
        lightboxCaption.textContent = img.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        const img = galleryImages[currentImageIndex];
        lightboxImage.src = img.src;
        lightboxCaption.textContent = img.caption;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        const img = galleryImages[currentImageIndex];
        lightboxImage.src = img.src;
        lightboxCaption.textContent = img.caption;
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
            showPrevImage();
        } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
            showNextImage();
        }
    });

    // Initialize gallery
    loadGallery();
});