document.addEventListener('DOMContentLoaded', function() {
    showOnScroll('.sec-ts', checkProjectsVisibility);
});

window.addEventListener('scroll', function() {
    showOnScroll('.animation-projects', checkProjectsVisibility);
    showOnScroll('.animation-skills', checkSkillsVisibility);
});

function showOnScroll(selector, callback) {
    const element = document.querySelector(selector);
    if (!element) return;

    const top = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.8) {
        callback(element);
    } else {
        hideElement(element);
    }
}

function checkSkillsVisibility(element) {
    animateElement(element, 'translateY(0)', '1');
}

function checkProjectsVisibility(element) {
    animateElement(element, 'translateX(0)', '1');
}

function hideElement(element) {
    element.style.opacity = '0';
    if (element.classList.contains('animation-projects')) {
        element.style.transform = 'translateX(-100px)';
    }else{
        element.style.transform = 'translateY(-50px)';
    }
}

function animateElement(element, visibleTransform, visibleOpacity) {
    element.style.transition = 'opacity 0.3s, transform 1.5s';
    element.style.opacity = visibleOpacity;
    element.style.transform = visibleTransform;
}