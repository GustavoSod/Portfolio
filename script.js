document.addEventListener('DOMContentLoaded', function() {
    showPerson(); //função para renderizar o primeiro component antes de carregar a pagina.
});

window.addEventListener('scroll', function() {
    showPerson();
    checkSkillsVisibility();
    showProjects();
});

function showPerson(){
    const sectionPerson = document.querySelector('.sec-ts');

    const sectionTop = sectionPerson.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
        sectionPerson.style.opacity = '1';
        sectionPerson.style.transform = 'translateX(0)';
    }
}

function checkSkillsVisibility(){
    const sectionSkill = document.querySelector('.animation-skills');
        const sectionTop = sectionSkill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            sectionSkill.style.opacity = '1';
            sectionSkill.style.transform = 'translateY(30px)';
        }
}

function showProjects(){
    const sectionProjects = document.querySelector('.animation-projects');
    const sectionTop = sectionProjects.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(sectionTop < windowHeight * 0.8){
        sectionProjects.style.opacity = '1';
        sectionProjects.style.transform = 'translateX(0px)';
    }

}