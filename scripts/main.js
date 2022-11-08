function ru() {
	let home = document.getElementById('home');
	home.style.marginRight = "135px";
	home.textContent = 'Главная';

	let aboutMe1 = document.getElementById('aboutme1');
	aboutMe1.style.marginRight = "135px";
	aboutMe1.textContent = 'Обо мне'; 

	let skills1 = document.getElementById('skills1');
	skills1.style.marginRight = "135px";
	skills1.style.width = "250px";
	skills1.textContent = 'Технические навыки'

	let contacts1 = document.getElementById('contacts1');
	contacts1.style.marginRight = "135px";
	contacts1.textContent = 'Контакты';

	let name = document.getElementById('name');
	name.textContent = 'Александр';

	let surname = document.getElementById('surname');
	surname.textContent = 'Шпорт'

	let shortAbout1 = document.getElementById('shortAbout1');
	shortAbout1.textContent = 'Студент'

	let shortAbout2 = document.getElementById('shortAbout2');
	shortAbout2.textContent = '18 лет, Одесса';

	let aboutMe2 = document.getElementById('aboutme2')
	aboutMe2.textContent = 'Обо мне';

	let aboutMeText1 = document.getElementById('aboutMeText1');
	aboutMeText1.textContent = 'Привет, я Александр - студент из Одессы. Меня интересует программирование и все, что с ним связано.';

	let aboutMeText2 = document.getElementById('aboutMeText2');
	aboutMeText2.textContent = 'Я курсант ИСЗЗИ КПИ.';

	let AboutMeText3 = document.getElementById('aboutMeText3');
	AboutMeText3.textContent = 'Готов встретиться и начать реализовывать разные проекты с замечательными людьми.';

	let skills2 = document.getElementById('skills2');
	skills2.textContent = 'Технические навыки';

	let skillsText = document.getElementById('skillsText');
	skillsText.textContent = 'Я пишу на таких языках программирования, как';

	let contacts2 = document.getElementById('contacts2');
	contacts2.textContent = 'Контакты';

	let contactText1 = document.getElementById('contactText1');
	contactText1.textContent = 'Хотите узнать больше или просто поболтать?';

	let contactText2 = document.getElementById('contactText2');
	contactText2.textContent = 'Добро пожаловать!';

	let btnText = document.getElementById('btnText');
	btnText.style.marginLeft = '330px';
	btnText.textContent = 'Отправить сообщение';
}

function eng() {
	location.reload();
}
