const sections = [...document.querySelectorAll("section")];
let currentSection = ""
function track() {
    const line = scrollY + innerHeight * 0.34;
    let current = sections[0];

    sections.forEach(function (s) {
        if (s.offsetTop <= line) current = s;
    });

    if (currentSection == current.id) return;

    currentSection = current.id;

    document.documentElement.style.setProperty("--h", current.dataset.hue);
}

addEventListener("scroll", track);