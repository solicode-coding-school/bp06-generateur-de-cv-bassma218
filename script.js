// Sélection des éléments principaux
const addEducationBtn = document.getElementById('add-btn1');
const addExperienceBtn = document.getElementById('add-btn3');
const addSkillBtn = document.getElementById('add-btn4');
const generateCVBtn = document.getElementById('generate-btn');

// Fonction pour ajouter une entrée de formation
addEducationBtn.addEventListener('click', function () {
    const educationSection = document.querySelector('.education-section');
    const newEducationDiv = document.createElement('div');
    newEducationDiv.classList.add('education-entry');
    newEducationDiv.innerHTML = `
        <label>School Name</label>
        <input type="text" placeholder="Your School Name">
        <label>Start Date</label>
        <input type="date">
        <label>End Date</label>
        <input type="date">
        <button class="remove-btn" type="button">Remove</button>
    `;
    educationSection.appendChild(newEducationDiv);

    // Bouton pour supprimer une entrée
    newEducationDiv.querySelector('.remove-btn').addEventListener('click', function () {
        educationSection.removeChild(newEducationDiv);
    });
});

// Fonction pour ajouter une entrée d'expérience
addExperienceBtn.addEventListener('click', function () {
    const experienceSection = document.querySelector('.professional-info2');
    const newExperienceDiv = document.createElement('div');
    newExperienceDiv.classList.add('experience-entry');
    newExperienceDiv.innerHTML = `
        <label>Job/Role</label>
        <input type="text" placeholder="Your Job or Role">
        <button class="remove-btn" type="button">Remove</button>
    `;
    experienceSection.appendChild(newExperienceDiv);

    // Bouton pour supprimer une entrée
    newExperienceDiv.querySelector('.remove-btn').addEventListener('click', function () {
        experienceSection.removeChild(newExperienceDiv);
    });
});

// Fonction pour ajouter une compétence
addSkillBtn.addEventListener('click', function () {
    const skillsSection = document.querySelector('.professional-info3');
    const newSkillDiv = document.createElement('div');
    newSkillDiv.classList.add('skill-entry');
    newSkillDiv.innerHTML = `
        <label>Skill</label>
        <input type="text" placeholder="Your Skill">
        <button class="remove-btn" type="button">Remove</button>
    `;
    skillsSection.appendChild(newSkillDiv);

    // Bouton pour supprimer une entrée
    newSkillDiv.querySelector('.remove-btn').addEventListener('click', function () {
        skillsSection.removeChild(newSkillDiv);
    });
});

// Fonction pour générer le CV
generateCVBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const birthday = document.getElementById('birthday').value;
    const objective = document.getElementById('info-section').value;

    let cvPreview = `
        <h1>${name}</h1>
        <p>${jobTitle}</p>
        <p>Phone: ${contact} | Email: ${email}</p>
        <p>Address: ${address} | Date of Birth: ${birthday}</p>
        <h3>Objective</h3>
        <p>${objective}</p>
    `;

    cvPreview += `<h3>Education</h3>`;
    document.querySelectorAll('.education-entry').forEach(entry => {
        const inputs = entry.querySelectorAll('input');
        cvPreview += `<p>${inputs[0].value} (${inputs[1].value} - ${inputs[2].value})</p>`;
    });

    cvPreview += `<h3>Work Experience</h3>`;
    document.querySelectorAll('.experience-entry').forEach(entry => {
        const input = entry.querySelector('input');
        cvPreview += `<p>${input.value}</p>`;
    });

    cvPreview += `<h3>Skills</h3>`;
    document.querySelectorAll('.skill-entry').forEach(entry => {
        const input = entry.querySelector('input');
        cvPreview += `<p>${input.value}</p>`;
    });

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><body>${cvPreview}</body></html>`);
    newWindow.document.close();
});
