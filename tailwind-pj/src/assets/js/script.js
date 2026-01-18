const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});


const mailBtn = document.getElementById("mailBtn");
const mailBox = document.getElementById("mailBox");

mailBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mailBox.classList.toggle("hidden");
});

document.addEventListener("click", () => {
    mailBox.classList.add("hidden");
});


const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

function activateTab(tabName) {
    tabButtons.forEach(btn => {
        btn.classList.remove("text-orange-500", "border-b-2", "border-orange-500");
        btn.classList.add("text-gray-500");
    });

    tabContents.forEach(c => c.classList.add("hidden"));

    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    const activeContent = document.getElementById(tabName);

    if (activeBtn && activeContent) {
        activeBtn.classList.add("text-orange-500", "border-b-2", "border-orange-500");
        activeBtn.classList.remove("text-gray-500");
        activeContent.classList.remove("hidden");
    }
}

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        activateTab(btn.dataset.tab);
    });
});

activateTab("overview");

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");

        content.classList.toggle("hidden");

        if (content.classList.contains("hidden")) {
            icon.textContent = "+";
        } else {
            icon.textContent = "−";
        }
    });
});