// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Navigation Functionality
const navLinks = document.querySelectorAll('.nav-links a');
const iconLinks = document.querySelectorAll('.icon-item');
const sections = document.querySelectorAll('.content-section');

function changeSection(targetId) {
    // සක්‍රීය කොටස් ඉවත් කිරීම
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    // නව කොටස පෙන්වීම
    const targetSection = document.querySelector(targetId);
    if(targetSection) {
        targetSection.classList.add('active');
    }
}

// වම්පස මෙනුව සඳහා
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        changeSection(id);
        link.classList.add('active');
    });
});

// දකුණු පස Icons සඳහා
iconLinks.forEach(icon => {
    icon.addEventListener('click', () => {
        const id = icon.getAttribute('data-target');
        changeSection(id);
        
        // අදාළ වම්පස මෙනුවද සක්‍රීය කිරීම
        navLinks.forEach(link => {
            if(link.getAttribute('href') === id) link.classList.add('active');
        });
    });
});