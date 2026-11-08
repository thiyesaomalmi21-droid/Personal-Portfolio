//console.log("Hii")
const scroll = document.getElementById("scrollbar");
function leftScroll() {
    scroll.scrollBy({
        left: -390, 
        behavior: 'smooth'
    });
}

function rightScroll() {
    scroll.scrollBy({
        left: 390, 
        behavior: 'smooth'
    });
}