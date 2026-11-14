
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navProjects: "Projects",
        navContact: "Contact",

        available: "Available for projects",
        heroEyebrow: "WEB DESIGN & DEVELOPMENT",
        heroTitle: "Building digital",
        heroTitleGreen: "experiences.",
        heroDescription: "I create modern, clean and responsive websites that help businesses grow online.",
        viewWork: "View my work →",
        contactMe: "Contact me",

        aboutTitle: "More than just a website.",
        aboutDescription: "I'm a passionate web developer focused on creating beautiful digital experiences. My goal is to help businesses establish a strong online presence.",

        servicesTitle: "What I can do.",
        service1Title: "Web Design",
        service1Description: "Modern and attractive website layouts.",
        service2Title: "Web Development",
        service2Description: "Responsive websites built with HTML and CSS.",
        service3Title: "Responsive Design",
        service3Description: "Websites that work on phones, tablets and computers.",

        projectsTitle: "Selected projects.",
        project1Title: "Restaurant Website",
        project1Description: "A modern restaurant presentation website.",
        project2Title: "Gym Website",
        project2Description: "A powerful landing page for a fitness club.",
        project3Title: "Fashion Store",
        project3Description: "A clean presentation for a clothing brand.",
        demoNote: "These are demonstration concepts created for my portfolio.",

        contactTitle: "Have a project in mind?",
        contactDescription: "Let's work together and build something great.",
        emailMe: "Email me →",
        rights: "All rights reserved."
    },

    fr: {
        navHome: "Accueil",
        navAbout: "À propos",
        navServices: "Services",
        navProjects: "Projets",
        navContact: "Contact",

        available: "Disponible pour vos projets",
        heroEyebrow: "DESIGN & DÉVELOPPEMENT WEB",
        heroTitle: "Créer des",
        heroTitleGreen: "expériences digitales.",
        heroDescription: "Je crée des sites web modernes, élégants et responsives pour aider les entreprises à se développer en ligne.",
        viewWork: "Voir mes projets →",
        contactMe: "Me contacter",

        aboutTitle: "Bien plus qu'un simple site web.",
        aboutDescription: "Je suis un développeur web passionné par la création d'expériences digitales modernes. Mon objectif est d'aider les entreprises à développer leur présence en ligne.",

        servicesTitle: "Mes services.",
        service1Title: "Web Design",
        service1Description: "Des designs web modernes et attractifs.",
        service2Title: "Développement Web",
        service2Description: "Des sites responsives créés avec HTML et CSS.",
        service3Title: "Design Responsive",
        service3Description: "Des sites adaptés aux téléphones, tablettes et ordinateurs.",

        projectsTitle: "Projets sélectionnés.",
        project1Title: "Site de Restaurant",
        project1Description: "Un site moderne pour présenter un restaurant.",
        project2Title: "Site de Salle de Sport",
        project2Description: "Une page d'accueil dynamique pour un club de fitness.",
        project3Title: "Boutique de Mode",
        project3Description: "Une présentation élégante pour une marque de vêtements.",
        demoNote: "Ces projets sont des démonstrations créées pour mon portfolio.",

        contactTitle: "Vous avez un projet en tête ?",
        contactDescription: "Travaillons ensemble pour créer quelque chose d'exceptionnel.",
        emailMe: "M'envoyer un email →",
        rights: "Tous droits réservés."
    }
};

let currentLanguage = "en";

const languageBtn = document.getElementById("languageBtn");

function changeLanguage() {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[currentLanguage][key];
    });

    document.documentElement.lang = currentLanguage;

    languageBtn.textContent = currentLanguage === "en" ? "FR" : "EN";
}

languageBtn.addEventListener("click", changeLanguage);
