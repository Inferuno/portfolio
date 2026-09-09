const sections = [...document.querySelectorAll("section")];
const links = [...document.querySelectorAll(".nav a")];

// -------------- Nav Pill -------------- //
const thumb = document.querySelector(".nav-thumb");

function syncNav(link) {
    thumb.style.width = (link.offsetWidth + 12) + "px";
    thumb.style.transform = `translateX(${link.offsetLeft - 6}px)`;
}
// -------------- Color Shift Tracking -------------- //

let currentSection = "";

function track() {
    // Color shift happens when the new section's top passes 34% down the screen. 
    // This is based off of the `0.34​`, feel free to change it.
    const line = scrollY + innerHeight * 0.34;
    let current = sections[0];

    // Every section above the `line` overwrites `current`, so the last overwrite is the one you're on.
    sections.forEach((s) => {
        if (s.offsetTop <= line) current = s;
    });

    // Prevents `setProperty` from running every scroll event. (which would reset the hue transition constantly.)
    if (currentSection === current.id) return;

    // Sets the current section if every other check passes.
    currentSection = current.id;

    links.forEach((link) => {
        if (link.getAttribute("href") === "#" + current.id) syncNav(link);
    });

    // Changes the hue to the new current section (and runs the transition)
    document.documentElement.style.setProperty("--h", current.dataset.hue);
}

track();

addEventListener("scroll", track);