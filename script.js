const starContainer = document.getElementById("stars-background");
const starCount = 200; // Жұлдыздардың жалпы саны

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    // Жұлдыздың кездейсоқ позициясы
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * -100 + "vh";
    // Анимация кешігуі мен ұзақтығы кездейсоқ
    star.style.animationDelay = Math.random() * 8 + "s";
    star.style.animationDuration = Math.random() * 5 + 5 + "s";
    starContainer.appendChild(star);
}
