const facesContainer = document.querySelector('.The-faces');
const images = document.querySelectorAll('.The-faces img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;

function updateSlider() {
    facesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    updateSlider();
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

var michelinDiv = document.querySelector('.MICHELIN');
michelinDiv.addEventListener('mouseover', function() {
    michelinDiv.classList.add('show');
});

var aboutDiv = document.querySelector('.About');
aboutDiv.addEventListener('mouseover', function() {
    aboutDiv.classList.add('showw');
});

aboutDiv.addEventListener('mouseleave', function() {});

var img44Div = document.querySelector('.img44');
img44Div.addEventListener('mouseover', function() {
    img44Div.classList.add('show');
});

img44Div.addEventListener('mouseleave', function() {});

var imgDiv = document.querySelector('.img22');
imgDiv.addEventListener('mouseover', function() {
    imgDiv.classList.add('shows');
});

imgDiv.addEventListener('mouseleave', function() {});

var img11Div = document.querySelector('.img11');
img11Div.addEventListener('mouseover', function() {
    img11Div.classList.add('showx');
});

img11Div.addEventListener('mouseleave', function() {});

var gaultMillauDiv = document.querySelector('.GaultMillau');
gaultMillauDiv.addEventListener('mouseover', function() {
    gaultMillauDiv.classList.add('showo');
});

gaultMillauDiv.addEventListener('mouseleave', function() {});

var img50Div = document.querySelector('.img50');
img50Div.addEventListener('mouseover', function() {
    img50Div.classList.add('showv');
});

img50Div.addEventListener('mouseleave', function() {});

var ourFoodDiv = document.querySelector('.Our-Food');
ourFoodDiv.addEventListener('mouseover', function() {
    ourFoodDiv.classList.add('showq');
});

ourFoodDiv.addEventListener('mouseleave', function() {});

var img60Div = document.querySelector('.img60');
img60Div.addEventListener('mouseover', function() {
    img60Div.classList.add('showy');
});

img60Div.addEventListener('mouseleave', function() {});

var img90Div = document.querySelector('.img90');
img90Div.addEventListener('mouseover', function() {
    img90Div.classList.add('showb');
});

img90Div.addEventListener('mouseleave', function() {});

var experienceDiv = document.querySelector('.Experience');
experienceDiv.addEventListener('mouseover', function() {
    experienceDiv.classList.add('showz');
});

experienceDiv.addEventListener('mouseleave', function() {});

var img80Div = document.querySelector('.img80');
img80Div.addEventListener('mouseover', function() {
    img80Div.classList.add('showm');
});

img80Div.addEventListener('mouseleave', function() {});

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = emailInput.value.trim();
        var phone = phoneInput.value.trim();
        var valid = true;

        if (!email) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError.textContent = 'Invalid email format.';
            valid = false;
        } else {
            emailError.textContent = '';
        }

        if (!phone) {
            phoneError.textContent = 'Phone number is required.';
            valid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            phoneError.textContent = 'Phone number must be 10 digits.';
            valid = false;
        } else {
            phoneError.textContent = '';
        }

        if (valid) {
            alert('Login successful!');
        }
    });
});

const slider = document.querySelector('.The-faces');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});
