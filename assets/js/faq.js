document.addEventListener("DOMContentLoaded", () => {
    // 1. Dữ liệu cho FAQ (Dựa trên HTML cũ)
    const faqData = [
        {
            id: 0,
            number: "/01",
            question: "Vợt này phù hợp với người chơi nào?",
            answer: "Leopard Wave X là lựa chọn hoàn hảo cho người chơi Pickleball tìm kiếm một cây vợt công thủ toàn diện, lý tưởng cho cả người chơi bán chuyên lẫn chuyên nghiệp muốn nâng cao hiệu suất thi đấu.",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png" // Ảnh màu tím
        },
        {
            id: 1,
            number: "/02",
            question: "Ưu điểm của Lõi Gen 4 & Carbon Toray?",
            answer: "Mặt Carbon Toray 3 lớp siêu bền, bám bóng tốt. Lõi Gen 4 + EVA giúp giảm rung, tăng độ êm và mở rộng điểm ngọt (sweet spot), mang lại cảm giác đánh chắc tay và ổn định ngay cả ở tốc độ cao.",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png" // Ảnh màu xanh
        },
        {
            id: 2,
            number: "/03",
            question: "Chip NFC để làm gì và sử dụng thế nào?",
            answer: "Chip NFC dùng để kiểm tra hàng chính hãng. Bạn chỉ cần bật NFC trên điện thoại thông minh và chạm vào vị trí có chip trên vợt, điện thoại sẽ tự động hiển thị thông tin xác thực sản phẩm.",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png" // Ảnh màu trắng
        }
    ];

    // 2. Chọn các phần tử DOM
    const questionButtons = document.querySelectorAll(".faq-list-button");
    const display_Number = document.getElementById("faq-display-number");
    const display_Image = document.getElementById("faq-display-image");
    const display_Question = document.getElementById("faq-display-question");
    const display_Answer = document.getElementById("faq-display-answer");

    // 3. Hàm để cập nhật nội dung
    function displayFAQ(id) {
        // Tìm dữ liệu tương ứng
        const data = faqData.find(item => item.id == id);
        if (!data) return; // Không tìm thấy

        // Cập nhật nội dung bên trái
        display_Number.textContent = data.number;
        display_Image.src = data.image;
        display_Question.textContent = data.question;
        display_Answer.textContent = data.answer;

        // Cập nhật trạng thái 'active' cho nút
        questionButtons.forEach(button => {
            if (button.dataset.faqId == id) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });
    }

    // 4. Gán sự kiện Click cho các nút
    questionButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.faqId;
            displayFAQ(id);
        });
    });

    // 5. Khởi tạo: Hiển thị FAQ đầu tiên khi tải trang
    displayFAQ(0);
});