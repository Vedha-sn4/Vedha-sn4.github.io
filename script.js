/* ==============================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==============================
   SKILL EXPLORER
================================ */

const skillTabs = document.querySelectorAll(".skill-tab");
const skillContents = document.querySelectorAll(".skill-content");

skillTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.skill;

        skillTabs.forEach(item => {
            item.classList.remove("active");
        });

        skillContents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        const targetContent = document.getElementById(target);

        if (targetContent) {
            targetContent.classList.add("active");
        }

    });

});


/* ==============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ==============================
   SCROLL PROGRESS
================================ */

const scrollProgress =
    document.getElementById("scrollProgress");

function updateProgress() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = `${progress}%`;

}

window.addEventListener("scroll", updateProgress);


/* ==============================
   CURRENT YEAR
================================ */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ==============================
   REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(
    ".project-card, .small-project, .cert-card, .highlight-box, .education-card"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});