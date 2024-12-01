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
        currentIndex = images.length - 1; // العودة إلى آخر صورة
    }
    updateSlider();
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // العودة إلى أول صورة
    }
    updateSlider();
});

// // الحصول على جميع الصور
// const imagess = document.querySelectorAll('.image-wrapper3 img');

// // إضافة أحداث التفاعل على الحاوية
// const imageWrapper3 = document.querySelector('.image-wrapper3');

// imageWrapper3.addEventListener('mouseover', () => {
//     // تحريك الصور بعيداً عن بعضها عند المرور
//     imagess[0].style.transform = 'translateX(-100px) translateY(-50px)';
//     imagess[1].style.transform = 'translateX(100px) translateY(50px)';
//     imagess[2].style.transform = 'translateX(0px) translateY(100px)';
// });

// imageWrapper3.addEventListener('mouseout', () => {
//     // إعادة الصور إلى مواقعها الأصلية عند إزالة الماوس
//     imagess.forEach(img => {
//         img.style.transform = 'translateX(0) translateY(0)';
//     });
// });
// هذا السكربت ليس ضروريًا للتأثيرات الحالية، لكنه مثال على كيفية إضافة تأثيرات أخرى


// الحصول على العنصر
var michelinDiv = document.querySelector('.MICHELIN');

// إضافة الفئة "show" عند مرور الماوس على العنصر
michelinDiv.addEventListener('mouseover', function() {
    michelinDiv.classList.add('show');
});


// الحصول على العنصر
var aboutDiv = document.querySelector('.About');

// إضافة الفئة "show" عند مرور الماوس على العنصر
aboutDiv.addEventListener('mouseover', function() {
    aboutDiv.classList.add('showw');
});

// منع إزالة الفئة "show" عند إزالة الماوس
aboutDiv.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// التعامل مع العنصر .img44
var img44Div = document.querySelector('.img44');

img44Div.addEventListener('mouseover', function() {
    img44Div.classList.add('show');
});

// لا نفعل شيئًا عند إزالة الماوس
img44Div.addEventListener('mouseleave', function() {
    // النص يبقى ظاهرًا
});


// الحصول على العنصر
var imgDiv = document.querySelector('.img22');

// إضافة الفئة "show" عند مرور الماوس على العنصر
imgDiv.addEventListener('mouseover', function() {
    imgDiv.classList.add('shows');
});

// منع إزالة الفئة "show" عند إزالة الماوس
imgDiv.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// الحصول على العنصر
var img11Div = document.querySelector('.img11');

// إضافة الفئة "show" عند مرور الماوس على العنصر
img11Div.addEventListener('mouseover', function() {
    img11Div.classList.add('showx');
});

// منع إزالة الفئة "show" عند إزالة الماوس
img11Div.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// الحصول على العنصر
var gaultMillauDiv = document.querySelector('.GaultMillau');

// إضافة الفئة "show" عند مرور الماوس على العنصر
gaultMillauDiv.addEventListener('mouseover', function() {
    gaultMillauDiv.classList.add('showo');
});

// منع إزالة الفئة "show" عند إزالة الماوس
gaultMillauDiv.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// الحصول على العنصر
var img50Div = document.querySelector('.img50');

// إضافة الفئة "show" عند مرور الماوس على العنصر
img50Div.addEventListener('mouseover', function() {
    img50Div.classList.add('showv');
});

// منع إزالة الفئة "show" عند إزالة الماوس
img50Div.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// الحصول على العنصر
var ourFoodDiv = document.querySelector('.Our-Food');

// إضافة الفئة "show" عند مرور الماوس على العنصر
ourFoodDiv.addEventListener('mouseover', function() {
    ourFoodDiv.classList.add('showq');
});

// منع إزالة الفئة "show" عند إزالة الماوس
ourFoodDiv.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// الحصول على العنصر
var img60Div = document.querySelector('.img60');

// إضافة الفئة "show" عند مرور الماوس على العنصر
img60Div.addEventListener('mouseover', function() {
    img60Div.classList.add('showy');
});
// الحصول على العنصر
var img90Div = document.querySelector('.img90');

// إضافة الفئة "show" عند مرور الماوس على العنصر
img90Div.addEventListener('mouseover', function() {
    img90Div.classList.add('showb');
});

// منع إزالة الفئة "show" عند إزالة الماوس
img90Div.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

// منع إزالة الفئة "show" عند إزالة الماوس
img60Div.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});
// الحصول على العنصر
var experienceDiv = document.querySelector('.Experience');

// إضافة الفئة "show" عند مرور الماوس على العنصر
experienceDiv.addEventListener('mouseover', function() {
    experienceDiv.classList.add('showz');
});

// منع إزالة الفئة "show" عند إزالة الماوس
experienceDiv.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});
// الحصول على العنصر
var img80Div = document.querySelector('.img80');

// إضافة الفئة "show" عند مرور الماوس على العنصر
img80Div.addEventListener('mouseover', function() {
    img80Div.classList.add('showm');
});

// منع إزالة الفئة "show" عند إزالة الماوس
img80Div.addEventListener('mouseleave', function() {
    // لا نفعل شيئًا هنا لمنع إزالة الفئة "show"
});

document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // منع الإرسال الفعلي للنموذج

      var email = emailInput.value.trim();
      var phone = phoneInput.value.trim();
      var valid = true;

      // التحقق من البريد الإلكتروني
      if (!email) {
          emailError.textContent = 'Email is required.';
          valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          emailError.textContent = 'Invalid email format.';
          valid = false;
      } else {
          emailError.textContent = '';
      }

      // التحقق من الهاتف
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
          // هنا يمكنك تنفيذ الإجراءات بعد نجاح تسجيل الدخول، مثل إرسال البيانات إلى الخادم
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
    if (!isDown) return; // لا شيء يحدث إذا لم يكن اللمس نشطًا
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // سرعة التحريك
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});