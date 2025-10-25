document.addEventListener("DOMContentLoaded", () => {
            
    // Module 1: Mobile Menu
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button'); 
        const mobileMenu = document.getElementById('mobile-menu'); 
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); }); 
            mobileMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }

    // Module 2: Scroll Animations
    function initScrollObserver() {
        const revealElements = document.querySelectorAll(".reveal");
        if (revealElements.length === 0) return;
        const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        revealElements.forEach(el => observer.observe(el));
    }

    // Module 3: Hero Slider
    function initHeroSlider() {
        const heroSection = document.getElementById('hero');
        if (!heroSection) return;
        const slides = [
            { image: 'https://pickleplay.vn/cdn/shop/files/z7037608699618_1d61e51545892718911f8d9e81ac5b81.jpg?v=1758519364&width=1600', title: 'CÔNG THỦ TOÀN DIỆN', subtitle: 'LỰA CHỌN LÝ TƯỞNG', paragraph: 'Mạnh mẽ trong tấn công, chính xác trong kiểm soát. Hiệu suất vượt trội cho người chơi bán chuyên và chuyên nghiệp.' },
            { image: 'https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png', title: 'CÔNG NGHỆ VẬT LIỆU CAO CẤP', subtitle: 'CARBON TORAY 3 LỚP TỪ NHẬT BẢN', paragraph: 'Độ bền vượt trội, khả năng bám bóng cao và phản hồi ổn định, giúp kiểm soát bóng chính xác hơn.' },
            { image: 'https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png', title: 'LÕI GEN 4 TIÊN TIẾN', subtitle: 'TÍCH HỢP 2 VIỀN FOAM + LỚP EVA', paragraph: 'Giảm rung, tăng độ êm và mở rộng điểm ngọt, mang lại cảm giác đánh chắc tay và ổn định.' },
            { image: 'https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png', title: 'THIẾT KẾ HIỆN ĐẠI', subtitle: 'TỐI ƯU LỐI CHƠI', paragraph: 'Độ dày 14mm, cán dài 14cm và mặt vợt 19.5x29cm giúp cân bằng lý tưởng giữa sức mạnh và kiểm soát.' }
        ];
        const slices = document.querySelectorAll('.slice');
        const contentOverlay = document.getElementById('content');
        const titleEl = document.getElementById('title');
        const subtitleEl = document.getElementById('subtitle');
        const paragraphEl = document.getElementById('paragraph');
        let currentSlide = 0;
        let timer; 
        function updateBackgroundSize() {
            const isMobile = window.innerWidth <= 768;
            const visibleCount = isMobile ? 3 : 5; 
            const size = `${visibleCount * 100}% 100%`;
            slices.forEach(slice => { slice.style.backgroundSize = size; });
        }
        function showSlide(index) {
            if (timer) clearTimeout(timer); 
            const slide = slides[index];
            slices.forEach(slice => {
                slice.style.backgroundImage = `url('${slide.image}')`;
                slice.classList.remove('active');
            });
            contentOverlay.classList.remove('show');
            setTimeout(() => {
                slices.forEach(slice => {
                    if (window.innerWidth <= 768 && (slice === slices[3] || slice === slices[4])) { return; }
                    slice.classList.add('active');
                });
                setTimeout(() => {
                    titleEl.textContent = slide.title;
                    subtitleEl.textContent = slide.subtitle;
                    paragraphEl.textContent = slide.paragraph;
                    contentOverlay.classList.add('show');
                    timer = setTimeout(() => {
                        currentSlide = (currentSlide + 1) % slides.length;
                        showSlide(currentSlide);
                    }, 8000);
                }, 2100);
            }, 100);
        }
        updateBackgroundSize();
        showSlide(0);
        window.addEventListener('resize', updateBackgroundSize);
    }

    // Module 4: Product Switcher
    function initProductSwitcher() {
        const productSection = document.getElementById('product-section');
        if (!productSection) return;
        const data = [
            { id: 0, title: "WAVEX - PURPLE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "linear-gradient(to left, #7d3a9e, #A54DCF, #7d3a9e)", "font-color": "white", "title-color": "#eee" },
            { id: 1, title: "WAVEX - RED", image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png", background: "linear-gradient(to left, #c41818, #F61F1F, #c41818)", "font-color": "white", "title-color": "#eee" },
            { id: 2, title: "WAVEX - LIGHT BLUE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "linear-gradient(to left, #6faac2, #93CEE6, #6faac2)", "font-color": "black", "title-color": "#555" },
            { id: 3, title: "WAVEX - GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png", background: "linear-gradient(to left, #03832f, #04AA3D, #03832f)", "font-color": "white", "title-color": "#eee" },
            { id: 4, title: "WAVEX - PINK", image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png", background: "linear-gradient(to left, #d64c7b, #E37097, #d64c7b)", "font-color": "white", "title-color": "#eee" },
            { id: 5, title: "WAVEX - ORANGE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "linear-gradient(to left, #d97600, #FF8A00, #d97600)", "font-color": "black", "title-color": "#555" },
            { id: 6, title: "WAVEX - WHITE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png", background: "linear-gradient(to left, #ccc, #FFFFFF, #ccc)", "font-color": "black", "title-color": "#555" },
            { id: 7, title: "WAVEX - LIME GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "linear-gradient(to left, #7ca02c, #95BE35, #7ca02c)", "font-color": "black", "title-color": "#555" }
        ];
        let currentItem = 0;
        let isAnimating = false; 
        const mainImage = document.getElementById("main-image");
        const mainTitle = document.getElementById("main-title");
        const colorButtons = document.querySelectorAll("#product-section .product-color-button"); 

        function updateContent(id) {
            const newData = data[id];
            productSection.style.background = newData.background;
            productSection.style.color = newData["font-color"];
            productSection.style.setProperty("--title-color", newData["title-color"]);
            mainTitle.style.color = newData["title-color"]; 
            mainImage.src = newData.image;
            mainImage.alt = newData.title;
            currentItem = id;
        }
        function animateIn() {
            isAnimating = true;
            mainImage.classList.remove('animate-image-out');
            mainTitle.classList.remove('animate-title-out');
            mainImage.classList.add('animate-image-in');
            mainTitle.classList.add('animate-title-in');
            Promise.all([
                new Promise(resolve => mainImage.addEventListener('animationend', resolve, { once: true })),
                new Promise(resolve => mainTitle.addEventListener('animationend', resolve, { once: true }))
            ]).then(() => {
                isAnimating = false;
            });
        }
        function animateOut() {
            isAnimating = true;
            mainImage.classList.remove('animate-image-in');
            mainTitle.classList.remove('animate-title-in');
            mainImage.classList.add('animate-image-out');
            mainTitle.classList.add('animate-title-out');
        }
        function handleButtonClick(id) {
            if (id === currentItem || isAnimating) { return; }
            animateOut();
            mainImage.addEventListener('animationend', () => {
                updateContent(id);
                animateIn();
            }, { once: true });
        }
        colorButtons.forEach(button => {
            const id = parseInt(button.dataset.id, 10);
            button.addEventListener("click", (e) => {
                e.preventDefault(); 
                handleButtonClick(id);
            });
        });
        updateContent(0);
        requestAnimationFrame(() => {
            animateIn();
        });
    }

    // *** MỚI: Module 5: Gallery (Đã thêm lại) ***
    function initGallery() {
        const galleryContainer = document.getElementById("expanding-gallery");
        if (!galleryContainer) return;

        const data = [
            { id: 0, name: "WAVEX - PURPLE", color: "PURPLE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", colorHEX: "#A54DCF" },
            { id: 1, name: "WAVEX - RED", color: "RED", image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png", colorHEX: "#F61F1F" },
            { id: 2, name: "WAVEX - LIGHT BLUE", color: "LIGHT BLUE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", colorHEX: "#93CEE6" },
            { id: 3, name: "WAVEX - GREEN", color: "GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png", colorHEX: "#04AA3D" },
            { id: 4, name: "WAVEX - PINK", color: "PINK", image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png", colorHEX: "#E37097" },
            { id: 5, name: "WAVEX - ORANGE", color: "ORANGE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", colorHEX: "#FF8A00" },
            { id: 6, name: "WAVEX - WHITE", color: "WHITE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png", colorHEX: "#FFFFFF" },
            { id: 7, name: "WAVEX - LIME GREEN", color: "LIME GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", colorHEX: "#95BE35" }
        ];

        const fragment = document.createDocumentFragment();
        data.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'gallery-panel';
            panel.style.setProperty('--accent-color', item.colorHEX);
            
            panel.innerHTML = `
                <img class="gallery-panel-image" src="${item.image}" alt="${item.name}" />
                <h1 class="gallery-panel-title">${item.color}</h1>
            `;
            fragment.appendChild(panel);
        });

        galleryContainer.innerHTML = "";
        galleryContainer.appendChild(fragment);

        const allPanels = galleryContainer.querySelectorAll(".gallery-panel");
        
        allPanels.forEach(panel => {
            panel.addEventListener("mouseenter", () => {
                allPanels.forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            });
        });

        galleryContainer.addEventListener("mouseleave", () => {
            allPanels.forEach(p => p.classList.remove('active'));
        });
    }

    // Module 6: FAQ
    function initFAQ() {
        const faqSection = document.getElementById('faq');
        if (!faqSection) return;
        const faqData = [
            { id: 0, number: "/01", question: "Vợt này phù hợp với người chơi nào?", answer: "Leopard Wave X là lựa chọn hoàn hảo cho người chơi Pickleball tìm kiếm một cây vợt công thủ toàn diện, lý tưởng cho cả người chơi bán chuyên lẫn chuyên nghiệp muốn nâng cao hiệu suất thi đấu.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png" },
            { id: 1, number: "/02", question: "Ưu điểm của Lõi Gen 4 & Carbon Toray?", answer: "Mặt Carbon Toray 3 lớp siêu bền, bám bóng tốt. Lõi Gen 4 + EVA giúp giảm rung, tăng độ êm và mở rộng điểm ngọt (sweet spot), mang lại cảm giác đánh chắc tay và ổn định ngay cả ở tốc độ cao.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png" },
            { id: 2, number: "/03", question: "Chip NFC để làm gì và sử dụng thế nào?", answer: "Chip NFC dùng để kiểm tra hàng chính hãng. Bạn chỉ cần bật NFC trên điện thoại thông minh và chạm vào vị trí có chip trên vợt, điện thoại sẽ tự động hiển thị thông tin xác thực sản phẩm.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png" }
        ];
        const questionButtons = document.querySelectorAll(".faq-list-button");
        const display_Wrapper = document.getElementById("faq-display-wrapper");
        const display_Number = document.getElementById("faq-display-number");
        const display_Image = document.getElementById("faq-display-image");
        const display_Question = document.getElementById("faq-display-question");
        const display_Answer = document.getElementById("faq-display-answer");
        function displayFAQ(id) {
            const data = faqData.find(item => item.id == id);
            if (!data || display_Wrapper.dataset.activeId == id) return; 
            display_Wrapper.classList.add('is-transitioning');
            display_Wrapper.dataset.activeId = id; 
            setTimeout(() => {
                display_Number.textContent = data.number;
                display_Image.src = data.image;
                display_Question.textContent = data.question;
                display_Answer.textContent = data.answer;
                display_Wrapper.classList.remove('is-transitioning');
            }, 300); 
            questionButtons.forEach(button => {
                if (button.dataset.faqId == id) {
                    button.classList.add("active");
                } else {
                    button.classList.remove("active");
                }
            });
        }
        questionButtons.forEach(button => {
            button.addEventListener("click", () => {
                const id = button.dataset.faqId;
                displayFAQ(id);
            });
        });
    }

    // Module 7: Image Loupe/Magnifier
    function initImageLoupe() {
        const container = document.getElementById('loupe-container');
        const img = document.getElementById('loupe-image');
        if (!container || !img) return;

        const loupe = document.createElement('div');
        loupe.id = 'loupe-glass';
        container.appendChild(loupe);
        const zoom = 2.5; 

        function showLoupe() {
            const imgWidth = img.clientWidth;
            const imgHeight = img.clientHeight;
            loupe.style.backgroundImage = `url(${img.src})`;
            loupe.style.backgroundSize = `${imgWidth * zoom}px ${imgHeight * zoom}px`;
            loupe.classList.add('visible');
        }

        function hideLoupe() {
            loupe.classList.remove('visible');
        }

        function moveLoupe(e) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const loupeWidth = loupe.offsetWidth;
            const loupeHeight = loupe.offsetHeight;
            
            loupe.style.left = `${x - loupeWidth / 2}px`;
            loupe.style.top = `${y - loupeHeight / 2}px`;

            const xRatio = x / img.clientWidth;
            const yRatio = y / img.clientHeight;
            const bgWidth = img.clientWidth * zoom;
            const bgHeight = img.clientHeight * zoom;
            const bgX = -((bgWidth * xRatio) - (loupeWidth / 2));
            const bgY = -((bgHeight * yRatio) - (loupeHeight / 2));

            loupe.style.backgroundPosition = `${bgX}px ${bgY}px`;
        }

        container.addEventListener('mouseenter', showLoupe);
        container.addEventListener('mouseleave', hideLoupe);
        container.addEventListener('mousemove', moveLoupe);
    }

    // Module 8: Form Color Picker
    function initFormColorPicker() {
        const formColorButtons = document.querySelectorAll("#order-form .product-color-button");
        const hiddenInput = document.getElementById("form-selected-color");
        
        if (!formColorButtons.length || !hiddenInput) return;

        formColorButtons[0].classList.add('active'); 

        formColorButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault(); 
                const selectedId = button.dataset.id;
                hiddenInput.value = selectedId;
                formColorButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Module 9: Form Size Picker
    function initFormSizePicker() {
        const radioInputs = document.querySelectorAll('#order-form input[name="selected_size"]');
        const labels = document.querySelectorAll('#order-form .size-selector-label');

        if (!radioInputs.length || !labels.length) return;

        radioInputs.forEach(radio => {
            radio.addEventListener('change', () => {
                labels.forEach(label => label.classList.remove('active'));
                const activeLabel = document.querySelector(`label[for="${radio.id}"]`);
                if (activeLabel) {
                    activeLabel.classList.add('active');
                }
            });
        });
    }


    // --- BỘ ĐIỀU KHIỂN CHẠY ---
    initMobileMenu();
    initScrollObserver();
    initHeroSlider();
    initProductSwitcher();
    initGallery(); // *** ĐÃ THÊM LẠI ***
    initFAQ();
    initImageLoupe();
    initFormColorPicker(); 
    initFormSizePicker(); 

});