
// ===== HEADER: MENU HAMBURGUER ===== //
const navToggle = document.querySelector(".header__nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".header__nav-link");

function closeMenu(){
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
}

function openMenu(){
    navToggle.setAttribute("aria-expanded", "true");
    navMenu.classList.add("is-open");
}

if(navToggle && navMenu){
    navToggle.addEventListener("click", () => {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

        if(isExpanded){
            closeMenu();
        }else{
            openMenu();
        }
    });

    navLinks.forEach(link =>{
        link.addEventListener("click", closeMenu);
    });
}

