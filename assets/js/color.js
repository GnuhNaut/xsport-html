// Chạy code JavaScript sau khi toàn bộ cây DOM đã được tải
document.addEventListener("DOMContentLoaded", function() {

    // 1. Dữ liệu (giống hệt trong code React)
    const data = [
        {
            id: 0,
            name: "Campus 00s Gray White",
            color: "Gray White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#A54DCF"
        },
        {
            id: 1,
            name: "Campus 00s Burgundy White",
            color: "Burgundy White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png",
            colorHEX: "#F61F1F"
        },
        {
            id: 2,
            name: "Campus 00s Beige White",
            color: "Beige White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#93CEE6"
        },
        {
            id: 3,
            name: "Campus 00s Blue White",
            color: "Blue White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png",
            colorHEX: "#04AA3D"
        },
        {
            id: 4,
            name: "Campus 00s Gray White",
            color: "Gray White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png",
            colorHEX: "#E37097"
        },
        {
            id: 5,
            name: "Campus 00s Burgundy White",
            color: "Burgundy White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#FF8A00"
        },
        {
            id: 6,
            name: "Campus 00s Beige White",
            color: "Beige White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png",
            colorHEX: "#FFFFFF"
        },
        {
            id: 7,
            name: "Campus 00s Blue White",
            color: "Blue White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            colorHEX: "#95BE35"
        }
    ];

    // 2. Chọn phần tử container chính
    const heroSection = document.getElementById("hero-section");

    // 3. Tạo và chèn HTML từ mảng data
    // Đây là bước tương đương với hàm .map() trong React render
    const htmlContent = data.map((item) => {
        // Trả về một chuỗi HTML cho mỗi item
        // Màu nền (background-color) được đặt inline
        // vì nó là duy nhất cho mỗi panel, giống như code React
        return `
            <div
                class="hero-section__image-container"
                style="background-color: ${item.colorHEX};"
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
    }).join(""); // Gộp tất cả các chuỗi HTML lại thành một

    // Chèn toàn bộ chuỗi HTML đã tạo vào container chính
    heroSection.innerHTML = htmlContent;

    // 4. Thêm Event Listeners (Bộ lắng nghe sự kiện)
    // Phải chọn lại các panel SAU KHI chúng đã được chèn vào DOM
    const allContainers = heroSection.querySelectorAll(".hero-section__image-container");

    // Lặp qua từng panel để gán sự kiện
    allContainers.forEach((container) => {

        // Tương đương với onMouseEnter={() => setActiveIndex(i)}
        container.addEventListener("mouseenter", () => {
            // Xóa lớp 'active' khỏi TẤT CẢ các panel khác
            // Điều này mô phỏng việc React chỉ có MỘT activeIndex
            allContainers.forEach(c => c.classList.remove('active'));
            
            // Thêm lớp 'active' cho panel HIỆN TẠI đang được hover
            container.classList.add('active');
        });

        // Tương đương với onMouseLeave={() => setActiveIndex(null)}
        container.addEventListener("mouseleave", () => {
            // Xóa lớp 'active' khỏi TẤT CẢ các panel (bao gồm cả panel này)
            // Điều này mô phỏng việc set activeIndex về null, làm tất cả
            // các panel trở về trạng thái mặc định.
            allContainers.forEach(c => c.classList.remove('active'));
        });
    });

});