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

this.addEventListener('scroll', () => {
    if(window.pageYOffset == 0)
        document.querySelector('header').classList.remove('screen')
    else
        document.querySelector('header').classList.add('screen')
})

this.addEventListener('load', () => {
    let ano
    if((new Date().getFullYear()) == 2020)
        ano = 2020
    else
        ano = `2020 - ${(new Date().getFullYear())}`
    document.querySelector('footer>span').textContent = ano
})