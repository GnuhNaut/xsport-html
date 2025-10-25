document.addEventListener("DOMContentLoaded", () => {

    // 1. Dữ liệu (Sửa tên title)
    const data = [
        {
            id: 0,
            title: "WAVEX - PURPLE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #7d3a9e, #A54DCF, #7d3a9e)",
            color: "#A54DCF",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 1,
            title: "WAVEX - RED",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u6_b57ef00a-6e62-48f6-97d6-32363e17e5c0.png",
            background: "linear-gradient(to left, #c41818, #F61F1F, #c41818)",
            color: "#F61F1F",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 2,
            title: "WAVEX - LIGHT BLUE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #6faac2, #93CEE6, #6faac2)",
            color: "#93CEE6",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 3,
            title: "WAVEX - GREEN",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u1_1a78adc0-77c9-4cca-974d-e6f8b70d2dfb.png",
            background: "linear-gradient(to left, #03832f, #04AA3D, #03832f)",
            color: "#04AA3D",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 4,
            title: "WAVEX - PINK",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u2_451c2715-43ec-4171-a66f-6912e6ff6dfc.png",
            background: "linear-gradient(to left, #d64c7b, #E37097, #d64c7b)",
            color: "#E37097",
            "font-color": "white",
            "title-color": "#eee"
        },
        {
            id: 5,
            title: "WAVEX - ORANGE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #d97600, #FF8A00, #d97600)",
            color: "#FF8A00",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 6,
            title: "WAVEX - WHITE",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u3_58c92a3a-1cc8-434b-b656-1f73937204cc.png",
            background: "linear-gradient(to left, #ccc, #FFFFFF, #ccc)",
            color: "#FFFFFF",
            "font-color": "black",
            "title-color": "#555"
        },
        {
            id: 7,
            title: "WAVEX - LIME GREEN",
            image: "https://pickleplay.vn/cdn/shop/files/product_m_u_d79824d0-1f54-43ce-899d-126f44d42604.png",
            background: "linear-gradient(to left, #7ca02c, #95BE35, #7ca02c)",
            color: "#95BE35",
            "font-color": "black",
            "title-color": "#555"
        }
    ];

    // --- PHẦN LOGIC BÊN DƯỚI GIỮ NGUYÊN ---
    // (Giữ nguyên toàn bộ logic `updateContent`, `animateIn`, `animateOut`...)
    let currentItem = 0;
    let isAnimating = false; 

    const section = document.getElementById("product-section");
    const mainImage = document.getElementById("main-image");
    const mainTitle = document.getElementById("main-title");
    const colorButtons = document.querySelectorAll(".product-section__color-button");

    function updateContent(id) {
        const newData = data[id];
        section.style.background = newData.background;
        section.style.color = newData["font-color"];
        section.style.setProperty("--title-color", newData["title-color"]);
        mainImage.src = newData.image;
        mainImage.alt = newData.title;
        currentItem = id;
    }

    function animateIn() {
        mainImage.style.animation = "image-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards";
        mainTitle.style.animation = "title-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards";
        mainImage.addEventListener('animationend', () => { isAnimating = false; }, { once: true });
    }

    function animateOut() {
        isAnimating = true;
        mainImage.style.animation = "image-out 0.8s ease-in-out forwards";
        mainTitle.style.animation = "title-out 0.6s ease-in forwards";
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
        button.addEventListener("click", () => {
            handleButtonClick(id);
        });
    });

    // Chạy lần đầu
    updateContent(0); // Set nội dung cho item 0
    mainImage.style.opacity = 0;
    mainTitle.style.opacity = 0;
    mainImage.style.transform = "translate(500px, -400px) scale(0)";
    mainTitle.style.transform = "scale(0)";
    setTimeout(animateIn, 100);
});