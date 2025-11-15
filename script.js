// Form validation and custom functionality
(function() {
    'use strict'

    // Form validation
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault()
                    alert('Спасибо за подписку! Теперь вы будете первыми узнавать о новинках и акциях.')
                    form.reset()
                    form.classList.remove('was-validated')
                }
                form.classList.add('was-validated')
            }, false)
        })

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    })

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar')
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(25, 135, 84, 0.95)'
            navbar.style.transition = 'background-color 0.3s ease'
        } else {
            navbar.style.backgroundColor = '#198754'
        }
    })

    // Back to top button functionality
    const backToTopButton = document.createElement('a')
    backToTopButton.href = '#'
    backToTopButton.className = 'back-to-top'
    backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>'
    document.body.appendChild(backToTopButton)

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex'
        } else {
            backToTopButton.style.display = 'none'
        }
    })

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    // Plant modal content (could be expanded)
    document.querySelectorAll('[data-bs-target="#plantModal"]').forEach(button => {
        button.addEventListener('click', function() {
            const plantName = this.closest('.card').querySelector('.card-title').textContent
            const plantPrice = this.closest('.card').querySelector('.card-text').textContent
            
            const modalBody = document.querySelector('#plantModal .modal-body')
            modalBody.innerHTML = `
                <h4>${plantName}</h4>
                <p class="text-success fw-bold">${plantPrice}</p>
                <p>Это красивое комнатное растение идеально подходит для вашего дома. 
                Легкое в уходе и прекрасно очищает воздух.</p>
                <ul>
                    <li>Высота: 30-40 см</li>
                    <li>Освещение: рассеянный свет</li>
                    <li>Полив: умеренный</li>
                    <li>Температура: 18-25°C</li>
                </ul>
            `
        })
    })

    console.log('Green Vibes website loaded successfully!')
})()