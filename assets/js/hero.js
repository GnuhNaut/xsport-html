const slides = [
    {
        // Ảnh từ file hero.js mới
        image: 'https://pickleplay.vn/cdn/shop/files/z7037608699618_1d61e51545892718911f8d9e81ac5b81.jpg?v=1758519364&width=1600',
        title: 'CÔNG THỦ TOÀN DIỆN',
        subtitle: 'LỰA CHỌN LÝ TƯỞNG',
        paragraph: 'Mạnh mẽ trong tấn công, chính xác trong kiểm soát. Hiệu suất vượt trội cho người chơi bán chuyên và chuyên nghiệp.'
    },
    {
        // Ảnh từ file product.js mới
        image: 'https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png',
        title: 'CÔNG NGHỆ VẬT LIỆU CAO CẤP',
        subtitle: 'CARBON TORAY 3 LỚP TỪ NHẬT BẢN',
        paragraph: 'Độ bền vượt trội, khả năng bám bóng cao và phản hồi ổn định, giúp kiểm soát bóng chính xác hơn.'
    },
    {
        // Ảnh từ file product.js mới
        image: 'https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png',
        title: 'LÕI GEN 4 TIÊN TIẾN',
        subtitle: 'TÍCH HỢP 2 VIỀN FOAM + LỚP EVA',
        paragraph: 'Giảm rung, tăng độ êm và mở rộng điểm ngọt, mang lại cảm giác đánh chắc tay và ổn định.'
    },
    {
        // Ảnh từ file product.js mới
        image: 'https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png',
        title: 'THIẾT KẾ HIỆN ĐẠI',
        subtitle: 'TỐI ƯU LỐI CHƠI',
        paragraph: 'Độ dày 14mm, cán dài 14cm và mặt vợt 19.5x29cm giúp cân bằng lý tưởng giữa sức mạnh và kiểm soát.'
    }
];

// --- PHẦN LOGIC BÊN DƯỚI GIỮ NGUYÊN ---
// (Giữ nguyên toàn bộ logic `showSlide`, `updateBackgroundSize`...)
const slices = document.querySelectorAll('.slice');
const contentOverlay = document.getElementById('content');
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const paragraphEl = document.getElementById('paragraph');

let currentSlide = 0;

function updateBackgroundSize() {
  const isMobile = window.innerWidth <= 768;
  const visibleCount = isMobile ? 3 : 5; 
  const size = `${visibleCount * 100}% 100%`;
  slices.forEach(slice => {
  slice.style.backgroundSize = size; 
  });
  }

function showSlide(index) {
    const slide = slides[index];
    
    slices.forEach(slice => {
        slice.style.backgroundImage = `url('${slide.image}')`;
        slice.classList.remove('active');
    });

    contentOverlay.classList.remove('show');
    
    setTimeout(() => {
        slices.forEach(slice => {
            if (window.innerWidth <= 768 && (slice === slices[3] || slice === slices[4])) {
                return; 
            }
            slice.classList.add('active');
        });

        setTimeout(() => {
            titleEl.textContent = slide.title;
            subtitleEl.textContent = slide.subtitle;
            paragraphEl.textContent = slide.paragraph;
            contentOverlay.classList.add('show');

            setTimeout(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 8000); // 8 giây
        }, 2100); // 2.1 giây
    }, 100);
}

updateBackgroundSize();
showSlide(0);
window.addEventListener('resize', updateBackgroundSize);