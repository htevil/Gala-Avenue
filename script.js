//Sidebar
const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menuIcon');
const menuButton = document.getElementById('menuButton');

function toggleSidebar() {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        menuIcon.src = './asset/menu-icon.png'; // Replace with the closed menu icon
    } else {
        sidebar.style.left = '0px';
        menuIcon.src = './asset/open_menu-icon.png'; // Replace with the opened menu icon
    }
}

function navigateToHome() {
    window.location.href = '/';
}


// Scroll-btn
document.querySelector('.s-c2').addEventListener('click', () => {
    const overviewSection = document.getElementById('Overview');
    if (overviewSection) {
        overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const floorPlanBtn = document.getElementById("s4btn1");
    const unitPlanBtn = document.getElementById("s4btn2");
    const floorPlanSection = document.querySelector(".s4-c2s2");
    const unitPlanSection = document.querySelector(".s4-c2s3");

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
const accordionSections = document.querySelectorAll('.s5-c2s2s');

// Add click event to each accordion button
accordionSections.forEach((section) => {
    const sec = section.querySelector('.s5-c2s2ss');
    const button = section.querySelector('.accordion-btn');
    const content = section.querySelector('.accordion-content');
    const icon = button.querySelector('img'); // Get the image inside the button

    sec.addEventListener('click', () => {
        // Close all other sections and reset their background and icon rotation
        accordionSections.forEach((otherSection) => {
            if (otherSection !== section) {
                const otherContent = otherSection.querySelector('.accordion-content');
                const otherIcon = otherSection.querySelector('.accordion-btn img');
                if (otherContent) {
                    otherContent.style.display = 'none'; // Hide content
                }
                otherSection.style.background = ''; // Reset background
                if (otherIcon) {
                    otherIcon.classList.remove('rotate'); // Reset rotation
                }
            }
        });

        // Toggle the current section visibility, background, and icon rotation
        if (content.style.display === 'flex') {
            content.style.display = 'none'; // Hide content
            section.style.background = ''; // Reset background
            icon.classList.remove('rotate'); // Reset rotation
        } else {
            content.style.display = 'flex'; // Show content
            section.style.background = 'linear-gradient(to bottom, #fcd46a, #b17400)'; // Apply gradient
            icon.classList.add('rotate'); // Apply rotation
        }
    });
});


document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Perform validation for all fields
    validateName();
    validateEmail();
    validateMobile();
    validateWhatsApp();

    // Check if all fields are valid
    if (isFormValid()) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const whatsappNo = document.getElementById('whatsappNo').value.trim();

        console.log({
            name: name,
            email: email,
            mobile: mobile,
            whatsappNo: whatsappNo // Optional field
        });
        alert('Form submitted successfully!');
        this.reset(); // Reset form fields
        clearErrors(); // Clear error messages
    }
});

// Real-time validation listeners
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('mobile').addEventListener('input', validateMobile);
document.getElementById('whatsappNo').addEventListener('input', validateWhatsApp);

// Validation functions
function validateName() {
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.textContent = '- Name is required';
        nameError.style.display = 'block';
        return false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = '- Name must contain letters only';
        nameError.style.display = 'block';
        return false;
    } else if (name.length < 3) {
        nameError.textContent = '- Name must be at least 3 characters long';
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    if (!email) {
        emailError.textContent = '- Email is required';
        emailError.style.display = 'block';
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = '- Invalid email format';
        emailError.style.display = 'block';
        return false;
    } else {
        emailError.style.display = 'none';
        return true;
    }
}

function validateMobile() {
    const mobile = document.getElementById('mobile').value.trim();
    const mobileError = document.getElementById('mobileError');
    if (!mobile) {
        mobileError.textContent = '- Mobile number is required';
        mobileError.style.display = 'block';
        return false;
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
        mobileError.textContent = '- Mobile number is Invalid';
        mobileError.style.display = 'block';
        return false;
    } else {
        mobileError.style.display = 'none';
        return true;
    }
}

function validateWhatsApp() {
    const whatsappNo = document.getElementById('whatsappNo').value.trim();
    const whatsappNoError = document.getElementById('whatsappNoError');
    if (!whatsappNo) {
        whatsappNoError.textContent = '- Whatsapp No is required';
        whatsappNoError.style.display = 'block';
        return false;
    }else if (whatsappNo && !/^[6-9]\d{9}$/.test(whatsappNo)) {
        whatsappNoError.textContent = '- WhatsApp number is Invalid';
        whatsappNoError.style.display = 'block';
        return false;
    } else {
        whatsappNoError.style.display = 'none';
        return true;
    }
}

// Check if the form is valid
function isFormValid() {
    return validateName() && validateEmail() && validateMobile() && validateWhatsApp();
}

// Clear all error messages
function clearErrors() {
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('mobileError').style.display = 'none';
    document.getElementById('whatsappNoError').style.display = 'none';
}


  














