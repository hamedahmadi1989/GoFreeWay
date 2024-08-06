let currentIndex = 0;  
const slides = document.querySelectorAll('.slide');  
const dots = document.querySelectorAll('.dot');  

function showSlide(index) {  
    const totalSlides = slides.length;  
    currentIndex = (index + totalSlides) % totalSlides; // حلقه زدن در اسلایدها  
    const offset = -currentIndex * 100; // محاسبه Offset  
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;  

    dots.forEach(dot => dot.classList.remove('active'));  
    dots[currentIndex].classList.add('active');  
}  

function nextSlide() {  
    showSlide(currentIndex + 1);  
}  

setInterval(nextSlide, 3000); // تغییر اسلایدها هر 3 ثانیه  

// نمایش اولیه اولین اسلاید  
showSlide(currentIndex);