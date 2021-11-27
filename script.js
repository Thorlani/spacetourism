const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbars = document.getElementsByClassName('navbars')[0]

toggleButton.addEventListener('click', () => {
    navbars.classList.toggle('active')
})
