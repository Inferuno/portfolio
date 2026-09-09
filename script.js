const sections = [...document.querySelectorAll("section")];
const links = [...document.querySelectorAll(".nav a")];
const modeBtn = document.querySelector("#mode");

// -------------- Nav Pill -------------- //
const thumb = document.querySelector(".nav-thumb");

/* Moves the pill behind a link.
   offsetWidth is how wide that link is on screen, offsetLeft how far it sits from .nav's left edge.
 */
function syncNav(link) {
    thumb.style.width = (link.offsetWidth + 12) + "px"; // `+12`, offset adjustment
    thumb.style.transform = `translateX(${link.offsetLeft - 6}px)`; // `-6` offset adjustment
    // Cancels .islands 6px padding so the pill reaches the island's edges.
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

    // current.id is "projects", the links are href="#projects."
    // The # is added so the two can be compared.
    // The matching link is the one the pill moves to.
    links.forEach((link) => {
        if (link.getAttribute("href") === "#" + current.id) syncNav(link);
    });

    // Changes the hue to the new current section (and runs the transition)
    document.documentElement.style.setProperty("--h", current.dataset.hue);
}


addEventListener("scroll", track);
addEventListener("load", track);


// -------------- Theme -------------- //

modeBtn.addEventListener("click", () => {
    document.documentElement.classList.add("theming");

    let mode = document.documentElement.dataset.mode;
    if (mode === "dark") {
        mode = "light";
    } else {
        mode = "dark";
    }

    document.documentElement.dataset.mode = mode;
    modeBtn.querySelector("span").textContent = mode === "dark" ? "dark_mode" : "light_mode";
    modeBtn.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");

    setTimeout(() => document.documentElement.classList.remove("theming"), 520);
})