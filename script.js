/* =================================
   LANGUAGE SWITCHING
================================= */

function setLanguage(lang) {

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {

        element.textContent = element.getAttribute("data-" + lang);

    });

    document.documentElement.lang = lang;

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("arabic", lang === "ar");

    localStorage.setItem("preferredLanguage", lang);
}


/* =================================
   REMEMBER LANGUAGE SELECTION
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

    setLanguage(savedLanguage);

});


/* =================================
   SCROLL REVEAL ANIMATIONS
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach(function (section) {

        section.classList.add("reveal");

        observer.observe(section);

    });

});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
function setLanguage(lang) {

    document.querySelectorAll("[data-en][data-ar]").forEach(element => {
        element.textContent = element.getAttribute("data-" + lang);
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle("arabic", lang === "ar");

    localStorage.setItem("preferredLanguage", lang);
}

// Remember the selected language
document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    setLanguage(savedLanguage);
});