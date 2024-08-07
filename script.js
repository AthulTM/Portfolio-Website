const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

emailjs.init('1qFZO2oYoxLzYAsQL'); //email js user id/public key

document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault();

	// Fetch form values
	let form = this;
	console.log(form)
	let formData = {
		from_name: form.email.value,
		to_name: 'Athul Tom Mathew', // Replace with recipient's name
		subject: `new message from ${form.name.value}`,
		message: form.message.value
	};

	// Send email
	emailjs.send(/*your_service_id*/'service_athultm16' ,/*your_template_id*/ 'template_athultm16', formData)
		.then(function(response) {
			console.log('Email sent!', response);
			alert('Email sent successfully!');
			form.reset();
		}, function(error) {
			console.error('Error sending email:', error);
			alert('Error sending email! Please try again later.');
		});
});
document.addEventListener('DOMContentLoaded', () => {
	const sections = document.querySelectorAll('.section');
  
	const options = {
	  root: null,
	  rootMargin: '0px',
	  threshold: 0.1 // Trigger animation when 10% of the section is visible
	};
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  const section = entry.target;
  
		  // Apply animation based on section index
		  const index = Array.from(sections).indexOf(section);
		  if (index % 2 === 0) {
			section.classList.add('section--animate-right');
		  } else {
			section.classList.add('section--animate-left');
		  }
  
		  // Stop observing the section after it becomes visible
		  observer.unobserve(section);
		}
	  });
	}, options);
  
	sections.forEach(section => {
	  observer.observe(section);
	});
  });
