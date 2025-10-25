document.addEventListener("DOMContentLoaded", function() {

    // 1. Dữ liệu (Sửa tên)
    const data = [
        {
            id: 0,
            name: "WAVEX - PURPLE",
            color: "PURPLE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#A54DCF"
        },
        {
            id: 1,
            name: "WAVEX - RED",
            color: "RED",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png",
            colorHEX: "#F61F1F"
        },
        {
            id: 2,
            name: "WAVEX - LIGHT BLUE",
            color: "LIGHT BLUE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#93CEE6"
        },
        {
            id: 3,
            name: "WAVEX - GREEN",
            color: "GREEN",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png",
            colorHEX: "#04AA3D"
        },
        {
            id: 4,
            name: "WAVEX - PINK",
            color: "PINK",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png",
            colorHEX: "#E37097"
        },
        {
            id: 5,
            name: "WAVEX - ORANGE",
            color: "ORANGE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#FF8A00"
        },
        {
            id: 6,
            name: "WAVEX - WHITE",
            color: "WHITE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png",
            colorHEX: "#FFFFFF"
        },
        {
            id: 7,
            name: "WAVEX - LIME GREEN",
            color: "LIME GREEN",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#95BE35"
        }
    ];

    // 2. Chọn container (Sửa ID)
    const heroSection = document.getElementById("hero-section-gallery"); // Đã đổi ID trong HTML

    // 3. Tạo và chèn HTML (ĐÃ THAY ĐỔI LOGIC)
    const htmlContent = data.map((item) => {
        // *** THAY ĐỔI QUAN TRỌNG ***
        // Không set 'background-color' nữa (để giữ nền đen)
        // Thay vào đó, set biến '--accent-color' để CSS mới (style.css) xử lý
        return `
            <div
                class="hero-section__image-container"
                style="--accent-color: ${item.colorHEX};" 
            >
                <img
                    class="hero-section__image"
                    src="${item.image}"
                    alt="${item.name}"
                />
                <h1 class="hero-section__title">
                    ${item.color}
                </h1>
            </div>
        `;
    }).join(""); 

    heroSection.innerHTML = htmlContent;

    // 4. Thêm Event Listeners (Giữ nguyên)
    const allContainers = heroSection.querySelectorAll(".hero-section__image-container");

    allContainers.forEach((container) => {
        container.addEventListener("mouseenter", () => {
            allContainers.forEach(c => c.classList.remove('active'));
            container.classList.add('active');
        });
        container.addEventListener("mouseleave", () => {
            allContainers.forEach(c => c.classList.remove('active'));
        });
    });

});