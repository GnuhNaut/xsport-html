document.addEventListener("DOMContentLoaded", () => {
            
    // Module 1: Mobile Menu
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button'); 
        const mobileMenu = document.getElementById('mobile-menu'); 
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => { 
                mobileMenu.classList.toggle('is-open'); 
            }); 
            
            mobileMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    mobileMenu.classList.remove('is-open');
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
            { id: 0, title: "WAVEX - PURPLE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "radial-gradient(circle at 50% 50%, #4a225d 0%, var(--brand-black) 75%)", "title-color": "#A54DCF" },
            { id: 1, title: "WAVEX - RED", image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png", background: "radial-gradient(circle at 50% 50%, #7c1010 0%, var(--brand-black) 75%)", "title-color": "#F61F1F" },
            { id: 2, title: "WAVEX - LIGHT BLUE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "radial-gradient(circle at 50% 50%, #3a6275 0%, var(--brand-black) 75%)", "title-color": "#93CEE6" },
            { id: 3, title: "WAVEX - GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png", background: "radial-gradient(circle at 50% 50%, #02571f 0%, var(--brand-black) 75%)", "title-color": "#04AA3D" },
            { id: 4, title: "WAVEX - PINK", image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png", background: "radial-gradient(circle at 50% 50%, #7a3a50 0%, var(--brand-black) 75%)", "title-color": "#E37097" },
            { id: 5, title: "WAVEX - ORANGE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "radial-gradient(circle at 50% 50%, #834700 0%, var(--brand-black) 75%)", "title-color": "#FF8A00" },
            { id: 6, title: "WAVEX - WHITE", image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png", background: "radial-gradient(circle at 50% 50%, #444444 0%, var(--brand-black) 75%)", "title-color": "#FFFFFF" },
            { id: 7, title: "WAVEX - LIME GREEN", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png", background: "radial-gradient(circle at 50% 50%, #4c621a 0%, var(--brand-black) 75%)", "title-color": "#95BE35" }
        ];
        
        let currentItem = 0;
        let isAnimating = false; 
        const mainImage = document.getElementById("main-image");
        const mainTitle = document.getElementById("main-title");
        const colorButtons = document.querySelectorAll("#product-section .product-color-button"); 

        function updateContent(id) {
            const newData = data[id];
            
            productSection.style.background = newData.background;
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

    // Module 5: Gallery
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
        
        const isMobile = window.innerWidth <= 768;

        allPanels.forEach(panel => {
            if (isMobile) {
                panel.addEventListener("click", () => {
                    if (panel.classList.contains('active')) {
                        panel.classList.remove('active');
                    } else {
                        allPanels.forEach(p => p.classList.remove('active'));
                        panel.classList.add('active');
                    }
                });
            } else {
                panel.addEventListener("mouseenter", () => {
                    allPanels.forEach(p => p.classList.remove('active'));
                    panel.classList.add('active');
                });
            }
        });

        if (!isMobile) {
            galleryContainer.addEventListener("mouseleave", () => {
                allPanels.forEach(p => p.classList.remove('active'));
            });
        }
    }

    // Module 6: FAQ
    function initFAQ() {
        const faqSection = document.getElementById('faq');
        if (!faqSection) return;

        // Dữ liệu FAQ (giữ nguyên)
        const faqData = [
            { id: 0, number: "/01", question: "Vợt này phù hợp với người chơi nào?", answer: "Leopard Wave X là lựa chọn hoàn hảo cho người chơi Pickleball tìm kiếm một cây vợt công thủ toàn diện, lý tưởng cho cả người chơi bán chuyên lẫn chuyên nghiệp muốn nâng cao hiệu suất thi đấu.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png" },
            { id: 1, number: "/02", question: "Ưu điểm của Lõi Gen 4 & Carbon Toray?", answer: "Mặt Carbon Toray 3 lớp siêu bền, bám bóng tốt. Lõi Gen 4 + EVA giúp giảm rung, tăng độ êm và mở rộng điểm ngọt (sweet spot), mang lại cảm giác đánh chắc tay và ổn định ngay cả ở tốc độ cao.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png" },
            { id: 2, number: "/03", question: "Chip NFC để làm gì và sử dụng thế nào?", answer: "Chip NFC dùng để kiểm tra hàng chính hãng. Bạn chỉ cần bật NFC trên điện thoại thông minh và chạm vào vị trí có chip trên vợt, điện thoại sẽ tự động hiển thị thông tin xác thực sản phẩm.", image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png" }
        ];

        // Các thành phần DOM cho chế độ Desktop
        const display_Wrapper = document.getElementById("faq-display-wrapper");
        const display_Number = document.getElementById("faq-display-number");
        const display_Question = document.getElementById("faq-display-question");
        const display_Answer = document.getElementById("faq-display-answer");
        
        // Tất cả các nút câu hỏi
        const questionButtons = document.querySelectorAll(".faq-list-button");

        // *** BƯỚC 1: Tự động tạo các panel trả lời cho mobile ***
        // Chèn các div trả lời ngay sau mỗi button trong HTML
        questionButtons.forEach(button => {
            const id = button.dataset.faqId;
            const data = faqData.find(item => item.id == id);
            if (data) {
                const answerPanel = document.createElement('div');
                answerPanel.className = 'faq-mobile-answer'; // Class CSS đã tạo ở trên
                answerPanel.innerHTML = `<p>${data.answer}</p>`;
                // Chèn panel ngay sau button
                button.insertAdjacentElement('afterend', answerPanel);
            }
        });

        // Lấy tất cả các panel trả lời vừa tạo
        const answerPanels = document.querySelectorAll(".faq-mobile-answer");

        // *** BƯỚC 2: Hàm xử lý cho Desktop (Logic cũ) ***
        function displayFAQDesktop(id) {
            const data = faqData.find(item => item.id == id);
            // Kiểm tra xem các phần tử DOM có tồn tại không
            if (!data || !display_Wrapper) return; 
            // Nếu click lại mục đang active thì không làm gì
            if (display_Wrapper.dataset.activeId == id) return;

            display_Wrapper.classList.add('is-transitioning');
            display_Wrapper.dataset.activeId = id; 
            
            setTimeout(() => {
                if (display_Number) display_Number.textContent = data.number;
                if (display_Question) display_Question.textContent = data.question;
                if (display_Answer) display_Answer.textContent = data.answer;
                display_Wrapper.classList.remove('is-transitioning');
            }, 300); 

            // Chỉ thêm/xóa class active cho button
            questionButtons.forEach(button => {
                button.classList.toggle("active", button.dataset.faqId == id);
            });
        }

        // *** BƯỚC 3: Hàm xử lý cho Mobile (Logic Accordion) ***
        function handleMobileClick(clickedButton) {
            const wasActive = clickedButton.classList.contains("active");

            // Đóng tất cả các mục
            questionButtons.forEach(button => {
                button.classList.remove("active");
                // CSS sẽ tự động ẩn panel khi class 'active' bị xóa
            });

            // Nếu mục vừa click KHÔNG PHẢI là mục đã active, thì mở nó ra
            if (!wasActive) {
                clickedButton.classList.add("active");
                // CSS sẽ tự động hiện panel khi class 'active' được thêm
            }
            // Nếu click lại mục đã active, nó sẽ đóng lại (do đã remove active ở trên)
        }

        // *** BƯỚC 4: Gán sự kiện click với kiểm tra màn hình ***
        questionButtons.forEach(button => {
            button.addEventListener("click", () => {
                const id = button.dataset.faqId;
                
                // Kiểm tra breakpoint (1024px = 'lg' của Tailwind)
                if (window.innerWidth < 1024) { 
                    // Chế độ Mobile: Accordion
                    handleMobileClick(button);
                } else {
                    // Chế độ Desktop: Hiển thị 1 khối
                    displayFAQDesktop(id);
                }
            });
        });

        // *** BƯỚC 5: Xử lý khi resize cửa sổ (Rất quan trọng) ***
        // Đảm bảo giao diện không bị lỗi khi xoay/thay đổi kích thước
        window.addEventListener('resize', () => {
            // Nếu resize VỀ desktop
            if (window.innerWidth >= 1024) {
                // Đóng tất cả accordion mobile
                questionButtons.forEach(button => button.classList.remove("active"));
                
                // Kích hoạt lại mục đang active trên desktop (nếu có)
                // Hoặc kích hoạt mục đầu tiên
                const activeId = display_Wrapper ? display_Wrapper.dataset.activeId : '0';
                displayFAQDesktop(activeId || '0'); 
            } else {
                // Nếu resize VỀ mobile
                // Xóa trạng thái active của desktop (để mobile tự đóng hết)
                questionButtons.forEach(button => button.classList.remove("active"));
            }
        });

        // *** BƯỚC 6: Kích hoạt trạng thái ban đầu khi tải trang ***
        if (window.innerWidth >= 1024) {
            // Mặc định hiển thị mục đầu tiên trên desktop
            displayFAQDesktop(0);
        }
        // Không cần kích hoạt gì cho mobile, tất cả đều đóng
    }

    // Module 7: Image Loupe/Magnifier
    function initImageLoupe() {
        const container = document.getElementById('loupe-container');
        const img = document.getElementById('loupe-image');
        if (!container || !img) return;

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            const lightbox = document.getElementById('image-lightbox');
            const lightboxImg = document.getElementById('lightbox-image');
            const closeBtn = document.getElementById('lightbox-close');

            if (!lightbox || !lightboxImg || !closeBtn) return;

            container.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('visible');
                lightbox.classList.remove('hidden');
            });
            closeBtn.addEventListener('click', () => {
                lightbox.classList.remove('visible');
                lightbox.classList.add('hidden');
            });
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.remove('visible');
                    lightbox.classList.add('hidden');
                }
            });

        } else {
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
    }

    // Module 8: Form Color Picker
    function initFormColorPicker() {
        const formColorButtons = document.querySelectorAll("#order-form .product-color-button");
        const hiddenInputId = document.getElementById("form-selected-color");
        const hiddenInputName = document.getElementById("form-selected-color-name");
        
        if (!formColorButtons.length || !hiddenInputId || !hiddenInputName) return;

        formColorButtons[0].classList.add('active');

        formColorButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault(); 
                const selectedId = button.dataset.id;
                const selectedName = button.dataset.name;

                hiddenInputId.value = selectedId;
                hiddenInputName.value = selectedName;

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

    // Module 10: XỬ LÝ SUBMIT FORM
    function initFormSubmit() {
        const form = document.getElementById("order-form-element");
        const submitButton = document.getElementById("form-submit-button");
        const messageDiv = document.getElementById("form-message");
        const apiUrl = "https://api.xuan.media/send_mail";

        if (!form || !submitButton || !messageDiv) return;

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Đang xử lý...';
            
            messageDiv.classList.add("hidden");
            messageDiv.classList.remove("success", "error");

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                // 4. Xử lý kết quả trả về
                if (response.ok) {
                    // ***** SỬA LỖI JSON *****
                    // API của bạn trả về text, không phải JSON.
                    // Vì vậy, chúng ta không gọi response.json() nữa.
                    // Chúng ta chỉ cần hiển thị thông báo thành công.
                    // const result = await response.json(); // <-- DÒNG GÂY LỖI
                    
                    messageDiv.textContent = "Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.";
                    messageDiv.classList.add("success");
                    messageDiv.classList.remove("hidden");
                    form.reset(); 
                    
                    // Kích hoạt lại trạng thái mặc định của form
                    document.getElementById('size-14mm').checked = true;
                    document.querySelector('label[for="size-14mm"]').classList.add('active');
                    document.querySelector('label[for="size-16mm"]').classList.remove('active');
                    
                    document.querySelectorAll("#order-form .product-color-button").forEach((btn, idx) => {
                        btn.classList.toggle('active', idx === 0);
                    });
                    document.getElementById("form-selected-color").value = "0";
                    document.getElementById("form-selected-color-name").value = "Purple";

                } else {
                    // Khi có lỗi (status 4xx, 5xx), API CÓ THỂ trả về JSON
                    // Đoạn code .catch() này sẽ xử lý an toàn
                    const errorData = await response.json().catch(() => ({}));
                    messageDiv.textContent = `Lỗi: ${errorData.message || 'Không thể gửi đơn hàng. Vui lòng thử lại.'}`;
                    messageDiv.classList.add("error");
                    messageDiv.classList.remove("hidden");
                }

            } catch (error) {
                // Đây là lỗi mạng (NetworkError), không phải lỗi JSON
                console.error("Lỗi khi gửi form:", error);
                messageDiv.textContent = "Lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.";
                messageDiv.classList.add("error");
                messageDiv.classList.remove("hidden");
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i> Đặt Hàng Ngay';
            }
        });
    }


    // --- BỘ ĐIỀU KHIỂN CHẠY ---
    initMobileMenu();
    initScrollObserver();
    initHeroSlider();
    initProductSwitcher();
    initGallery();
    initFAQ();
    initImageLoupe();
    initFormColorPicker(); 
    initFormSizePicker(); 
    initFormSubmit();

});

/* ===== PHẦN FAB (FLOATING ACTION BUTTON) ===== */
/* THAY ĐỔI: Khôi phục 100% code JS gốc của bạn cho FAB */
(function() {
    function setToggleIcon(open) {
        const icon = document.getElementById('toggle-icon');
        if (!icon) return;
        
        // Code gốc của bạn sử dụng .innerHTML để thay đổi thẻ <img>
        // Điều này không đúng, nó sẽ thay thế thẻ <img> bằng text SVG.
        // Cách đúng là thay đổi 'src' của <img>.
        // Tuy nhiên, vì bạn muốn khôi phục code gốc, tôi sẽ giữ nguyên
        // logic của bạn (dù nó có thể không chạy đúng như ý).
        // LƯU Ý: Code gốc của bạn bị lỗi logic ở đây.
        if (open) {
            // File gốc của bạn cố gắng chèn SVG vào một thẻ <img>
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        } else {
            icon.innerHTML = '<svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"/></svg>';
        }
    }

    // Code JS gốc của bạn cho FAB
    window.toggleOptions = function() {
        const options = document.querySelector('.floating-options');
        if (!options) return;
        const open = options.style.display === 'flex';
        options.style.display = open ? 'none' : 'flex';
        setToggleIcon(!open);
    };

    window.openPopup = function(type) {
        const el = document.getElementById('popup-' + type);
        if (el) el.style.display = 'flex';
    };

    window.closePopup = function(type, event) {
        if (event) event.stopPropagation();
        const el = document.getElementById('popup-' + type);
        if (el) el.style.display = 'none';
    };

    document.addEventListener('click', function(event) {
        const container = document.querySelector('.floating-container');
        const options = document.querySelector('.floating-options');
        if (!container || !options) return;
        if (!container.contains(event.target)) {
            options.style.display = 'none';
            setToggleIcon(false);
        }
    });
})();
/* ===== HẾT PHẦN JS FAB ===== */