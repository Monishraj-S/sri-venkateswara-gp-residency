
/* =====================================
   SRI VENKATESWARA GP RESIDENCY
   JavaScript Functionality
===================================== */


/* BUSINESS CONFIGURATION */

// Replace with your actual WhatsApp number.
// Include country code 91, without + or spaces.
const WHATSAPP_NUMBER = "919585877677";

// Replace with the email address that should
// receive booking enquiries.
const BOOKING_EMAIL = "srivenketeswaragpresidency@gmail.com";


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close navigation after selecting a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* DATE VALIDATION */

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const today = new Date();

const localDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

checkin.min = localDate;
checkout.min = localDate;


// Checkout must be after check-in

checkin.addEventListener("change", function () {

    checkout.min = checkin.value;

    if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = "";
    }

});


/* WHATSAPP FUNCTION */

function openWhatsApp(message) {

    if (!/^91[6-9][0-9]{9}$/.test(WHATSAPP_NUMBER)) {

        alert("Please configure the residency WhatsApp number in script.js.");

        return;

    }

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

}


// Floating WhatsApp button

const floatingWhatsapp =
    document.getElementById("floatingWhatsapp");

floatingWhatsapp.addEventListener("click", function (event) {

    event.preventDefault();

    const message =
        "Hello! I would like to enquire about Sri Venkateswara GP Residency in Yercaud.";

    openWhatsApp(message);

});


// Contact section WhatsApp button

const contactWhatsapp =
    document.getElementById("contactWhatsapp");

contactWhatsapp.addEventListener("click", function (event) {

    event.preventDefault();

    const message =
        "Hello! I would like to know more about Sri Venkateswara GP Residency.";

    openWhatsApp(message);

});


/* BOOKING FORM */

const bookingForm =
    document.getElementById("bookingForm");

const bookingMessage =
    document.getElementById("bookingMessage");


bookingForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const arrival =
        checkin.value;

    const departure =
        checkout.value;

    const guests =
        document.getElementById("guests").value;
    const room =
    document.getElementById("roomType").value;

    const additionalMessage =
        document.getElementById("message").value.trim();


    // Validate mobile number

    if (!/^[6-9][0-9]{9}$/.test(phone)) {

        bookingMessage.textContent =
            "Please enter a valid 10-digit Indian mobile number.";

        return;

    }


    // Validate dates

    if (departure <= arrival) {

        bookingMessage.textContent =
            "Check-out date must be after check-in date.";

        return;

    }


    // Check email configuration

    

if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "91XXXXXXXXXX") {
    bookingMessage.textContent =
        "Please configure your WhatsApp number.";
    return;
}

const whatsappText =
    `NEW BOOKING ENQUIRY - SRI VENKATESWARA GP RESIDENCY

Customer Name: ${name}
Mobile Number: ${phone}
Room Type: ${room}
Check-in: ${arrival}
Check-out: ${departure}
Number of Guests: ${guests}
Additional Message: ${additionalMessage}`;

const whatsappURL =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(whatsappText);

bookingMessage.textContent =
    "Opening WhatsApp. Please send your enquiry.";

window.open(whatsappURL, "_blank");
submitButton.disabled = false;


});


/* DISPLAY CONTACT NUMBER */

const displayPhone =
    document.getElementById("displayPhone");

if (/^91[6-9][0-9]{9}$/.test(WHATSAPP_NUMBER)) {

    displayPhone.textContent =
        "+" + WHATSAPP_NUMBER.slice(0, 2) +
        " " + WHATSAPP_NUMBER.slice(2);

}




