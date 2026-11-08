//console.log("Hii")
const scroll = document.getElementById("scrollbar");
function leftScroll() {
    scroll.scrollBy({
        left: -390, // Card width (350px) + gap (~40px)
        behavior: 'smooth'
    });
}

function rightScroll() {
    scroll.scrollBy({
        left: 390, // Card width (350px) + gap (~40px)
        behavior: 'smooth'
    });
}