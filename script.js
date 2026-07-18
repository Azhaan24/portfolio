const skills = [
 ['fa-brands fa-java','Java','Languages'],
 ['fa-solid fa-hashtag','C#','Languages'],
 ['fa-brands fa-js','JavaScript','Languages'],
 ['fa-brands fa-python','Python','Languages'],
 ['fa-brands fa-angular','Angular','Frontend'],
 ['fa-brands fa-html5','HTML5','Frontend'],
 ['fa-brands fa-css3-alt','CSS3','Frontend'],
 ['fa-brands fa-bootstrap','Bootstrap','Frontend'],
 ['fa-solid fa-leaf','Spring Boot','Backend'],
 ['fa-solid fa-code','ASP.NET Core','Backend'],
 ['fa-brands fa-node-js','Node.js','Backend'],
 ['fa-solid fa-shield-halved','JWT / Security','Backend'],
 ['fa-brands fa-android','Android','Mobile'],
 ['fa-solid fa-mobile-screen','MVVM','Mobile'],
 ['fa-solid fa-cloud-arrow-down','Retrofit','Mobile'],
 ['fa-solid fa-database','SQL Server','Databases'],
 ['fa-solid fa-database','MySQL','Databases'],
 ['fa-solid fa-fire','Firebase','Databases'],
 ['fa-solid fa-leaf','MongoDB','Databases'],
 ['fa-brands fa-docker','Docker','Tools & Others'],
 ['fa-brands fa-git-alt','Git','Tools & Others'],
 ['fa-solid fa-code','VS Code','Tools & Others'],
 ['fa-brands fa-figma','Figma','Tools & Others']
];

const skillsGrid = document.querySelector('#skillsGrid');
function renderSkills(category = 'All') {
    const visible = category === 'All' ? skills : skills.filter(([, , skillCategory]) => skillCategory === category);
  skillsGrid.innerHTML = visible.map(([icon, name]) => `<div class="skill card"><i class="${icon}"></i><b>${name}</b></div>`).join('');
}

renderSkills();

document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .selected').classList.remove('selected');
  button.classList.add('selected');
  renderSkills(button.textContent.trim());
}));


const projects=[
 ['🍔','FastFood Ordering System','ASP.NET Core · Angular · SQL Server','Full-stack food ordering system with JWT authentication, role-based access, carts, reviews, Docker and a responsive UI.','FastFood-Ordering-System'],
 ['👔','Employee Management System','Java · Spring Boot · MySQL','Secure employee management with REST APIs, search, pagination, uploads, notifications and report exports.','Employee-Management-System'],
 ['☁️','Weather App','Java · Android · OpenWeather API','Android weather app with real-time API data and a responsive, friendly interface.','Weather-App'],
 ['❔','Quiz Game','Java · Firebase · Android','Quiz app with Google Sign-In, category selection, timed gameplay, score tracking and Firestore.','Quiz-Game']
];
document.querySelector('#projectGrid').innerHTML=projects.map(([icon,title,tags,desc,repo])=>`<article class="project card"><div class="project-icon">${icon}</div><h4>${title}</h4><div class="tags">${tags.split(' · ').map(x=>`<span>${x}</span>`).join('')}</div><p>${desc}</p><div><a target="_blank" href="https://github.com/Azhaan24/${repo}"><i class="fa-brands fa-github"></i> GitHub</a><a target="_blank" href="https://github.com/Azhaan24/${repo}"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Repo</a></div></article>`).join('');
document.querySelector('#heatmap').innerHTML=Array.from({length:91},(_,i)=>`<i class="l${(i*7+i%5)%5}"></i>`).join('');
document.querySelector('.menu-btn').onclick=()=>document.querySelector('nav').classList.toggle('open');
document.querySelector('.theme').onclick=()=>document.body.classList.toggle('light');

function sendMessage(e){
    e.preventDefault();
    const subject=e.target.querySelectorAll('input')[2].value||'Portfolio inquiry';
    const body=e.target.querySelector('textarea').value;
    location.href=`mailto:syedazhaanrizvi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
