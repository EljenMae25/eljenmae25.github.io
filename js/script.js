 /*====== toggle icon bar ======*/

/*======scroll sections active link ======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
    /*====== sticky navbar ======*/
    let header = document.querySelector('nav');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*====== remove toggle icon and navbar when click navbar link (scroll) ======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

  /*====== scroll reveal ======*/
  ScrollReveal({
     //reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading, .skills h2', { origin:'top'});
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .education, .experience, .skills-content, .carousel-inner', { origin:'bottom'});
     ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
     ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

      /*====== type js ======*/
      const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer','UI/UX Designer','Graphic Designer'],
        typeSpeed:100,
        backpeed:100,
        nackDelay:1000,
        loop: true

      });
/*====== carousel ======*/


