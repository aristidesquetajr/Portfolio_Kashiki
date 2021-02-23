const link = document.querySelectorAll('header a')
link.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        const element = event.target
        const id = element.getAttribute('href')
        const to = document.querySelector(id).offsetTop

        window.scroll({
            top: to - 20,
            behavior: "smooth"
        })
    })
})