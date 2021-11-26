document.addEventListener('DOMContentLoaded', function () {

	const input = document.querySelector('.resume__main-info-input');

	input.addEventListener('click', changeLanguage);

	function changeLanguage() {
		let changePageLanguage = document.querySelector('.rus');
		let text = document.querySelectorAll('[text]');
		let rus = {
			hard_skills: 'Навыки',
			education: 'Образование',
			education_info: 'Харьковский государственный университет городского хозяйства им. О.М.Бекетова(2005-2010). Специальность: инженер по вентиляции и кондиционированию(специалист)',
			contacts: 'Контакты',
			name: 'Олег Роганин',
			profession: 'Front-end разработчик',
			about: 'Обо мне',
			about_text: 'Мне 33 года, живу в Харькове. С 2010 по 2014 годах работал инженером по подбору вентиляционного оборудования, с 2014 занимаюсь свадебной и семейной  фотографией.  Почти год назад я начал изучение веб-разработки, очень хочу попробовать себя в верстке сайтов и полноценной front-end разработке.',
			soft_skills: 'Личные качества',
			soft_skills_text: 'Ответственное отношение к работе, умеренный перфекционизм, внимательность к деталям, огромное желание обучаться и развиваться , коммуникабельность.',
			portfolio: 'Моё портфолио'
		};
		let eng = {
			hard_skills: 'Hard skills',
			education: 'Education',
			education_info: 'O.M. Beketov National University of Urban Economy in Kharkiv (2005 - 2010). 	Speciality: ventilation and air conditioning engineer(specialist)',
			contacts: 'Contacts',
			name: 'Oleg Roganin',
			profession: 'Front-end developer',
			about: 'About me',
			about_text: 'I am 33, I live in Kharkov. From 2010 to 2014 I worked as an engineer of the selection of ventilation equipment, since 2014 my occupation is wedding and family photography. Almost a year ago I started to learn web development, I really want to try myself in site layout and full-fledged front-end development.',
			soft_skills: 'Soft skills',
			soft_skills_text: 'Responsible attitude to work, moderate perfectionism, attention to details, great desire to learn and develop, communicability.',
			portfolio: 'My portfolio'
		};
		let language = lang.checked ? rus : eng;
		if (language === rus) {
			changePageLanguage.textContent = 'ENG'
			changePageLanguage.style.color = '#000'
			changePageLanguage.style.backgroundColor = '#fff'
			changePageLanguage.style.border = '1px solid #000'
		} else {
			changePageLanguage.textContent = 'RUS'
			changePageLanguage.style.color = '#fff'
			changePageLanguage.style.backgroundColor = '#000'
		}
		text.forEach(el => {
			el.innerHTML = language[el.getAttribute('text')];
		});
	};
});




