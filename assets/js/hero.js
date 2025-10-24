const slides = [
    {
        image: 'https://albertofreelance.com/img/slider-vertical/slider1.webp',
        title: 'Explora el Mundo',
        subtitle: 'Descubre lugares increíbles',
        paragraph: 'Vive experiencias únicas en los destinos más espectaculares del planeta'
    },
    {
        image: 'https://albertofreelance.com/img/slider-vertical/slider2.webp',
        title: 'Naturaleza Salvaje',
        subtitle: 'Conecta con lo esencial',
        paragraph: 'Sumérgete en la belleza de paisajes vírgenes y bosques milenarios'
    },
    {
        image: 'https://albertofreelance.com/img/slider-vertical/slider3.webp',
        title: 'Paraíso Tropical',
        subtitle: 'Tu escape perfecto',
        paragraph: 'Relájate en las playas más hermosas bajo el sol del Caribe'
    },
    {
        image: 'https://albertofreelance.com/img/slider-vertical/slider4.webp',
        title: 'Horizonte Infinito',
        subtitle: 'Libertad sin límites',
        paragraph: 'Déjate llevar por las olas y siente la inmensidad del océano'
    }
];

const slices = document.querySelectorAll('.slice');
const contentOverlay = document.getElementById('content');
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const paragraphEl = document.getElementById('paragraph');

let currentSlide = 0;

function updateBackgroundSize() {
  const isMobile = window.innerWidth <= 768;
  const visibleCount = isMobile ? 3 : 5; // 3 en móvil, 5 en desktop
  const size = `${visibleCount * 100}% 100%`;
  slices.forEach(slice => {
  slice.style.backgroundSize = size;   // 300% 100% (móvil) o 500% 100% (desktop)
  // ¡No tocar backgroundPosition! Lo controla el CSS por nth-child
  });
  }

function showSlide(index) {
    const slide = slides[index];
    
    // Actualizar imagen en todos los slices
    slices.forEach(slice => {
        slice.style.backgroundImage = `url('${slide.image}')`;
        slice.classList.remove('active');
    });

    // Ocultar contenido
    contentOverlay.classList.remove('show');
    
    // Pequeño delay para resetear
    setTimeout(() => {
        // Iniciar animación de caída
        slices.forEach(slice => {
            if (window.innerWidth <= 768 && (slice === slices[3] || slice === slices[4])) {
                return; // No animar los slices 4 y 5 en móviles
            }
            slice.classList.add('active');
        });

        // Mostrar contenido después de que termine la animación (2.1s)
        setTimeout(() => {
            titleEl.textContent = slide.title;
            subtitleEl.textContent = slide.subtitle;
            paragraphEl.textContent = slide.paragraph;
            contentOverlay.classList.add('show');

            // Siguiente slide después de 3 segundos
            setTimeout(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 10000);
        }, 3000);
    }, 100);
}

// Iniciar el slider
updateBackgroundSize();
showSlide(0);

// Ajustar el tamaño de fondo al redimensionar
window.addEventListener('resize', updateBackgroundSize);