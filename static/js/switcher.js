const themeSwitcher = document.getElementById("theme-switch-checkbox");
const themeName = document.getElementById("theme-switch-name");
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
	body.classList.add(savedTheme);
	if (savedTheme === 'dark') {
		themeSwitcher.checked = true;
		themeName.innerHTML = '<i class="uil uil-moon"></i>';
	} else {
		themeName.innerHTML = '<i class="uil uil-sun"></i>';
	}
}

themeSwitcher.addEventListener('click', () => {
	body.classList.toggle('dark');
	const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
	
	if (currentTheme === 'dark') {
		themeName.innerHTML = '<i class="uil uil-moon"></i>';
	} else {
		themeName.innerHTML = '<i class="uil uil-sun"></i>';
	}

	localStorage.setItem('theme', currentTheme)
});
