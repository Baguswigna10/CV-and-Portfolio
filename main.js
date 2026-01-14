import { profile, skills, experience, projects } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Populate Profile Data
    document.getElementById('page-title').textContent = `${profile.name} | Portfolio`;
    document.getElementById('meta-description').content = `Professional Portfolio of ${profile.name} - ${profile.title}`;
    document.getElementById('hero-name').textContent = profile.name;
    document.getElementById('hero-description').textContent = `${profile.title} based in ${profile.location}. Specialized in crafting minimal & high-end digital experiences.`;
    document.getElementById('about-text').textContent = profile.about;

    const contactEmail = document.getElementById('contact-email');
    contactEmail.href = `mailto:${profile.email}`;
    contactEmail.textContent = profile.email;

    document.getElementById('footer-copyright').textContent = `© ${new Date().getFullYear()} ${profile.name}. All Rights Reserved.`;

    // Populate Skills
    const skillsContainer = document.getElementById('skills-container');
    Object.entries(skills).forEach(([category, list]) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4 class="font-bold text-sm uppercase tracking-widest mb-4">${category}</h4>
            <ul class="text-gray-500 text-sm space-y-2">
                ${list.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        `;
        skillsContainer.appendChild(div);
    });

    // Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach((project, index) => {
        const div = document.createElement('div');
        div.className = 'group cursor-pointer';
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', index * 100);
        div.innerHTML = `
            <div class="overflow-hidden mb-8 relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span class="text-white text-sm font-bold tracking-widest uppercase border-2 border-white px-8 py-3">View Details</span>
                </div>
            </div>
            <div class="flex justify-between items-start">
                <div>
                    <p class="text-xs text-gray-400 uppercase tracking-widest mb-2">${project.category}</p>
                    <h3 class="text-2xl font-bold group-hover:underline decoration-1 underline-offset-8">${project.title}</h3>
                </div>
                <i data-lucide="arrow-up-right" class="text-gray-300 group-hover:text-dark transition-colors"></i>
            </div>
        `;
        projectsContainer.appendChild(div);
    });

    // Populate Experience
    const experienceContainer = document.getElementById('experience-container');
    experience.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'border-b border-white/10 pb-12 group';
        div.setAttribute('data-aos', 'fade-up');
        div.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 class="text-2xl font-bold group-hover:text-gray-400 transition-colors">${exp.role}</h3>
                <span class="text-sm tracking-widest uppercase text-gray-400">${exp.period}</span>
            </div>
            <p class="text-lg text-gray-500 font-light mb-4">${exp.company}</p>
            <p class="text-gray-400 leading-relaxed max-w-2xl">${exp.description}</p>
        `;
        experienceContainer.appendChild(div);
    });

    // Populate Socials
    const socialsContainer = document.getElementById('socials-container');
    Object.entries(profile.socials).forEach(([name, url]) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.className = 'text-sm font-bold tracking-widest uppercase hover:text-gray-400 transition-colors';
        a.textContent = name;
        socialsContainer.appendChild(a);
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize Lucide Icons
    lucide.createIcons();

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(2)');
        el.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(2)', ''));
    });

    // Smooth Scroll Fix for Safari/Other
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
