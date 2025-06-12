// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    const fnm = document.getElementById("fname").value;
    const lnm = document.getElementById("lname").value;
    const eml = document.getElementById("email").value;
    const phn = document.getElementById("phonenumber").value;

    const fnmErr = document.getElementById("fname-error");
    const lnmErr = document.getElementById("lname-error");
    const emlErr = document.getElementById("email-error");
    const phnErr = document.getElementById("phonenumber-error");

    fnmErr.textContent = "";
    lnmErr.textContent = "";
    emlErr.textContent = "";
    phnErr.textContent = "";

    let isValid = true;
    if (fnm === "" || /\d/.test(fnm)) {
        fnmErr.textContent = "Please enter your first name.";
        isValid = false;
    }
    if (lnm === "" || /\d/.test(lnm)) {
        lnmErr.textContent = "Please enter your last name.";
        isValid = false;
    }
    if (eml === "" || !eml.includes("@") || !eml.includes(".")) {
        emlErr.textContent = "Please enter your email.";
        isValid = false;
    }
    if (phn === "" || !regExp.test(_mobile)) {
        phnErr.textContent = "Please enter your phone number.";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        return false;
    }

    function resetErrors() {
        document.getElementById("fname-error").textContent = "";
        document.getElementById("lname-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("phonenumber-error").textContent = "";
    }
}