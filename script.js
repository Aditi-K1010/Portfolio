$(document).ready(function () {
    // sticky navbar on scroll script
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer", "Fresher", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Let's Connect and Work Together :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer", "Fresher", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Formspree submission handling
    const form = document.getElementById('contactForm');
    if (form) { // Check if the form element exists before adding the event listener
        form.addEventListener('submit', async (event) => {
            // Prevent the default form submission behavior (which causes the redirect)
            event.preventDefault();
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Submission was successful
                    alert('Message sent successfully! 😊');
                    form.reset(); // Clear the form fields
                } else {
                    // Submission failed
                    const data = await response.json();
                    if (data.errors) {
                        alert('Oops! There was a problem. ' + data.errors.map(err => err.message).join(', '));
                    } else {
                        alert('Oops! There was a problem. 😞');
                    }
                }
            } catch (error) {
                // Network or other unexpected error
                alert('An unexpected error occurred. Please try again later.');
                console.error('Error:', error);
            }
        });
    }
});