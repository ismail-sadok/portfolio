// إخفاء أو إظهار الزر بناءً على التمرير
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';  // عرض الزر بعد التمرير 300px
    } else {
        scrollToTopButton.style.display = 'none';  // إخفاء الزر إذا لم يتم التمرير بما فيه الكفاية
    }
});

// التمرير إلى أعلى الصفحة عند النقر على الزر
document.querySelector('.scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',  // إضافة تأثير التمرير السلس
    });
});
