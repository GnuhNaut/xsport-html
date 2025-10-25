// Tailwind CSS configuration for CDN runtime
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Màu từ file mới của bạn
                'black': '#1F1F1F',
                
                // Thêm các màu theme "Đen huyền bí"
                'brand-cream': '#F5F5F5',      // Màu chữ chính (Trắng ngà)
                'brand-navy-light': '#1a1a1a', // Nền section (Xám Carbon)
                'brand-teal': '#14b8a6',       // Màu nhấn (Cyber Teal)
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
                'micho': ['Michroma', 'sans-serif'],
                'erica': ['Erica One', 'sans-serif']
            }
        }
    }
};