// Navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// typing effect
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".hero-name-col");
    const fullText = "Sivuyiso Mvani";
    let index = 0;

    function typeEffect() {
        if (index < fullText.length) {
            textElement.textContent = fullText.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, 150); // Adjust speed here
        } else {
            // Remove the cursor after typing is done
            textElement.classList.remove("typing");
        }
    }

    // Initially add the cursor effect
    textElement.classList.add("typing");

    // Start typing effect
    textElement.textContent = ""; // Clear text initially
    setTimeout(typeEffect, 500); // Delay before starting
});


// Qualification tabs
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            const category = this.getAttribute('data-tab');
            
            // Filter cards
            cards.forEach(card => {
                // Remove animation class to reset
                card.classList.remove('fade-in');
                
                // Force reflow to restart animation
                void card.offsetWidth;
                
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Initial animation
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 300);
});