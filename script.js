const btn = document.getElementsByClassName("btn")[0]
const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('nav')

btn.addEventListener("click", function() {
    window.open("resume.pdf")
})

navToggle?.addEventListener('click', function() {
    nav.classList.toggle('nav-open')
})

window.addEventListener('resize', function() {
    if (window.innerWidth > 650) {
        nav.classList.remove('nav-open')
    }
})
