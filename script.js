// Attach a click event to the SVG
document.getElementById('scroll-button').addEventListener('click', () => {
    const overviewSection = document.getElementById('Overview');
    if (overviewSection) {
        overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const floorPlanBtn = document.getElementById("s4btn1");
    const unitPlanBtn = document.getElementById("s4btn2");
    const floorPlanSection = document.querySelector(".s4-2sc");
    const unitPlanSection = document.querySelector(".s4-3sc");

    // By default, FLOOR PLAN is active
    floorPlanBtn.classList.add("active");
    floorPlanSection.classList.add("active");

    // Event listener for FLOOR PLAN button
    floorPlanBtn.addEventListener("click", () => {
        floorPlanBtn.classList.add("active");
        unitPlanBtn.classList.remove("active");

        floorPlanSection.classList.add("active");
        unitPlanSection.classList.remove("active");
    });

    // Event listener for UNIT PLAN button
    unitPlanBtn.addEventListener("click", () => {
        unitPlanBtn.classList.add("active");
        floorPlanBtn.classList.remove("active");

        unitPlanSection.classList.add("active");
        floorPlanSection.classList.remove("active");
    });
});

