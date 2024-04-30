const getStartedBtn = document.getElementById('getStartedBtn');
const firstTaskSection = document.getElementById('firstTaskSection');


getStartedBtn.addEventListener('click', () => firstTaskSection.scrollIntoView({behavior: 'smooth'}))