
/* =====================================
   FARIS ARRAFI - PORTFOLIO JAVASCRIPT
===================================== */

// ELEMENTS
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");

// =====================================
// DARK MODE & LIGHT MODE
// =====================================

const savedTheme = localStorage.getItem("faris-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀";
} else {
    themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLight ? "☀" : "☾";

    localStorage.setItem(
        "faris-theme",
        isLight ? "light" : "dark"
    );
});

// =====================================
// LANGUAGE INDONESIA & ENGLISH
// =====================================

const translations = {
    id: {
        home: "Beranda",
        about: "Tentang",
        skills: "Keahlian",
        projects: "Proyek",
        experience: "Pengalaman",
        contact: "Kontak",

        welcome: "SELAMAT DATANG DI PORTOFOLIO SAYA",
        greeting: "Halo, saya <span>Faris Arrafi.</span>",
        profession: "Pelajar & Penggemar Teknologi",
        intro: "Menjelajahi teknologi, belajar coding, dan membangun sesuatu yang bermakna.",

        viewProjects: "Lihat Proyek",
        contactMe: "Hubungi Saya",

        aboutTitle: "Tentang Saya",
        aboutText: "Halo! Saya Faris Arrafi, seorang pelajar yang tertarik pada dunia komputer dan teknologi. Saat ini saya sedang mempelajari JavaScript, dasar-dasar komputer, komunikasi, GitHub, Virtual Machine, WebSocket, dan WebRTC. Saya selalu ingin tahu dan bersemangat mempelajari hal-hal baru.",

        skillsTitle: "Keahlian & Teknologi",
        projectsTitle: "Proyek Pilihan Saya",
        experienceTitle: "Perjalanan Belajar",

        contactTitle: "Mari Terhubung",
        contactText: "Jangan ragu untuk terhubung dengan saya dan mengikuti perjalanan belajar saya."
    },

    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",

        welcome: "WELCOME TO MY PORTFOLIO",
        greeting: "Hello, I'm <span>Faris Arrafi.</span>",
        profession: "Student & Technology Enthusiast",
        intro: "Exploring technology, learning to code, and building something meaningful.",

        viewProjects: "View Projects",
        contactMe: "Contact Me",

        aboutTitle: "About Me",
        aboutText: "Hello! I'm Faris Arrafi, a student interested in computers and technology. I'm currently learning JavaScript, computer fundamentals, communication, GitHub, Virtual Machines, WebSocket, and WebRTC. I'm always curious and excited to learn new things.",

        skillsTitle: "Skills & Technologies",
        projectsTitle: "Selected Projects",
        experienceTitle: "Learning Journey",

        contactTitle: "Let's Connect",
        contactText: "Feel free to connect with me and follow my learning journey."
    }
};

// =====================================
// CHANGE LANGUAGE
// =====================================

let currentLanguage = localStorage.getItem("faris-language") || "id";

function changeLanguage(language) {

    currentLanguage = language;

    // Update navigation and text
    document.querySelectorAll("[data-id]").forEach(element => {

        const key = element.getAttribute("data-id");

        if (translations[language][key]) {

            // Keep HTML formatting in greeting
            element.innerHTML = translations[language][key];

        }
    });

    // Update language button
    languageToggle.textContent =
        language === "id" ? "ID / EN" : "EN / ID";

    // Update document language
    document.documentElement.lang = language;

    // Save language preference
    localStorage.setItem("faris-language", language);
}

// Toggle between Indonesian and English
languageToggle.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "id" ? "en" : "id";

    changeLanguage(newLanguage);

});

// Load saved language
changeLanguage(currentLanguage);

// =====================================
// CURRENT YEAR
// =====================================

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Faris Arrafi.
        Built with curiosity.</p>
    `;
}

// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
    "%c Welcome to Faris Arrafi Portfolio!",
    "color: #c5a46d; font-size: 16px; font-weight: bold;"
);

console.log("Portfolio successfully loaded.");
