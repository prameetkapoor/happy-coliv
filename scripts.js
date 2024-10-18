function animateCounter(counterElement, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;
    const timer = setInterval(() => {
        counterElement.textContent = current;
        current += increment;
        if ((increment === 1 && current > end) || (increment === -1 && current < end)) {
            clearInterval(timer);
            counterElement.textContent = end;
        }
    }, stepTime);
}

const section = document.getElementById('tenants-and-landlords');
const counterContainers = document.querySelectorAll('.counterContainer');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterContainers.forEach(container => {
                const start = parseInt(container.dataset.start);
                const end = parseInt(container.dataset.end);
                const duration = parseInt(container.dataset.duration);

                animateCounter(container, start, end, duration);
            });
            observer.unobserve(section);
        }
    });
});

observer.observe(section);


  document.addEventListener('DOMContentLoaded', function() {
const textElement = document.querySelector('.animated-text');
const buttons = document.querySelectorAll('.animated-button');

// Animation for the text element
setTimeout(() => {
    textElement.classList.add('appear');
}, 200); // Delay for the text animation (adjust as needed)

// Animation for the buttons
buttons.forEach((button, index) => {
    const delay = 400 + (index * 200); // Delay after text animation + 200ms delay between each button

    setTimeout(() => {
        button.classList.add('appear');
    }, delay);
});


});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active");
}

console.log('hello')
