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


// Get all accordion sections
const accordionSections = document.querySelectorAll('.s5-ss2c');

// Add click event to each accordion button
accordionSections.forEach((section) => {
    const button = section.querySelector('.accordion-btn');
    const content = button.nextElementSibling;

    button.addEventListener('click', () => {
        // Close all other sections and reset their background
        accordionSections.forEach((otherSection) => {
            if (otherSection !== section) {
                const otherContent = otherSection.querySelector('.accordion-content');
                if (otherContent) {
                    otherContent.style.display = 'none';
                }
                otherSection.style.background = ''; // Reset background
            }
        });

        // Toggle the current section visibility and background
        if (content.style.display === 'flex') {
            content.style.display = 'none'; // Hide content
            section.style.background = ''; // Reset background
        } else {
            content.style.display = 'flex'; // Show content
            section.style.background = 'linear-gradient(to bottom, #fcd46a, #b17400)'; // Apply gradient
        }
    });
});





