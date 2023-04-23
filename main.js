const openNav = document.querySelector(".open-nav");
const nav = document.querySelector("nav");
openNav.addEventListener("click", function() {
    if(nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

//
const btns = Array.from(document.querySelectorAll(".btn"));
const comments = Array.from(document.querySelectorAll(".comments p"));
switchContent(btns, comments);

// reviews
const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
switchContent(bullets, reviews);

function switchContent(btns, boxes) {
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            for(let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
            }
            boxes.forEach(box => {
                if(this.id == box.dataset.id){
                    box.classList.remove("hide");
                } else {
                    box.classList.add("hide");
                }
            });
            this.classList.add("active");
        });
    });
}

// https://preview.uideck.com/items/proton/default.html

let id = 0;
function act () {
    const btns = Array.from(document.querySelectorAll(".bullet"));
    const boxes = Array.from(document.querySelectorAll(".review"));
    for(let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
        boxes[i].classList.add("hide");
    }
    if(id == (btns.length)) {
        btns[0].classList.add("active");
        boxes[0].classList.remove("hide");
        id = 0;
    } 
    else {
        btns[id].classList.add("active");
        boxes[id].classList.remove("hide");
        id++;
    }
}

setInterval(act, 3000);

const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        goUp.style.opacity = "0";
    } else if(this.scrollY >= 200) {
        goUp.style.opacity = "1";
    }
});
