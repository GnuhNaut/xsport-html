// Chờ cho toàn bộ tài liệu HTML được tải xong
document.addEventListener("DOMContentLoaded", () => {

    // 1. Dữ liệu (giống hệt trong code React)
    const data = [
        {
            id: 0,
            title: "Campus 00s Gray White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #7d3a9e, #A54DCF, #7d3a9e)",
            color: "#A54DCF",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 1,
            title: "Campus 00s Burgundy White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png",
            background: "linear-gradient(to left, #c41818, #F61F1F, #c41818)",
            color: "#F61F1F",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 2,
            title: "Campus 00s Beige White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #6faac2, #93CEE6, #6faac2)",
            color: "#93CEE6",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 3,
            title: "Campus 00s Blue White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png",
            background: "linear-gradient(to left, #03832f, #04AA3D, #03832f)",
            color: "#04AA3D",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 4,
            title: "Campus 00s Gray White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png",
            background: "linear-gradient(to left, #d64c7b, #E37097, #d64c7b)",
            color: "#E37097",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 5,
            title: "Campus 00s Burgundy White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #d97600, #FF8A00, #d97600)",
            color: "#FF8A00",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 6,
            title: "Campus 00s Beige White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png",
            background: "linear-gradient(to left, #ccc, #FFFFFF, #ccc)",
            color: "#FFFFFF",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 7,
            title: "Campus 00s Blue White",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #7ca02c, #95BE35, #7ca02c)",
            color: "#95BE35",
            "font-color": "black",
            "title-color": "#555"
        }
    ];

    // 2. Biến trạng thái (tương đương useState)
    let currentItem = 0;
    // Cờ để ngăn click đúp khi animation đang chạy
    let isAnimating = false; 

    // 3. Chọn các phần tử DOM cần thiết
    const section = document.getElementById("product-section");
    const mainImage = document.getElementById("main-image");
    const mainTitle = document.getElementById("main-title");
    const colorButtons = document.querySelectorAll(".product-section__color-button");

    // 4. Hàm chỉ cập nhật nội dung (không animation)
    function updateContent(id) {
        const newData = data[id];
        
        // Cập nhật style cho container chính
        section.style.background = newData.background;
        section.style.color = newData["font-color"];
        section.style.setProperty("--title-color", newData["title-color"]);

        // Cập nhật ảnh
        mainImage.src = newData.image;
        mainImage.alt = newData.title;
        
        // Cập nhật trạng thái
        currentItem = id;
    }

    // 5. Hàm kích hoạt animation "VÀO"
    function animateIn() {
        // Tái tạo lại animation "spring" và "ease"
        mainImage.style.animation = "image-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards";
        mainTitle.style.animation = "title-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards";

        // Sau khi animation "vào" kết thúc, cho phép click lại
        mainImage.addEventListener('animationend', () => {
            isAnimating = false;
        }, { once: true });
    }

    // 6. Hàm kích hoạt animation "RA"
    function animateOut() {
        isAnimating = true; // Bắt đầu animation, cấm click
        // Tái tạo duration và ease từ Framer Motion
        mainImage.style.animation = "image-out 0.8s ease-in-out forwards";
        mainTitle.style.animation = "title-out 0.6s ease-in forwards";
    }

    // 7. Hàm xử lý chính khi click nút
    function handleButtonClick(id) {
        // Nếu click vào item đang active, hoặc đang animation thì không làm gì cả
        if (id === currentItem || isAnimating) {
            return;
        }

        // 1. Chạy animation "RA"
        animateOut();

        // 2. Lắng nghe sự kiện animation "RA" kết thúc
        // Chúng ta lắng nghe 'mainImage' vì nó có thời gian animation "ra" dài nhất (0.8s)
        mainImage.addEventListener('animationend', () => {
            // 3. Cập nhật nội dung (khi đã bị ẩn)
            updateContent(id);
            
            // 4. Chạy animation "VÀO"
            animateIn();
        }, { once: true }); // {once: true} để sự kiện này chỉ chạy 1 lần
    }

    // 8. Khởi tạo (Gán sự kiện cho các nút)
    colorButtons.forEach(button => {
        // Lấy 'data-id' từ HTML (đã chuyển thành số nguyên)
        const id = parseInt(button.dataset.id, 10);
        
        button.addEventListener("click", () => {
            handleButtonClick(id);
        });
    });

    // 9. Chạy animation "VÀO" lần đầu tiên khi tải trang
    // Đặt trạng thái ban đầu (ẩn) trước khi chạy animation "vào"
    mainImage.style.opacity = 0;
    mainTitle.style.opacity = 0;
    mainImage.style.transform = "translate(500px, -400px) scale(0)";
    mainTitle.style.transform = "scale(0)";
    
    // Dùng setTimeout nhỏ để trình duyệt "bắt kịp"
    // và áp dụng animation một cách chính xác
    setTimeout(animateIn, 100);
});