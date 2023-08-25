
const circulo_ativo = document.querySelectorAll(".circle_active")
let interval = 1000
const porcent = document.querySelectorAll('.porcentagem')


function iniciando() {
    if(circulo_ativo) {
        circulo_ativo[0].style.strokeDashoffset = 314 - (266.9)
        circulo_ativo[1].style.strokeDashoffset = 314 - (244.92)
        circulo_ativo[2].style.strokeDashoffset = 314 - (226.08)
        circulo_ativo[3].style.strokeDashoffset = 314 - (169.56)
        circulo_ativo[4].style.strokeDashoffset = 314 - (219.8)
        circulo_ativo[5].style.strokeDashoffset = 314 - (204.1)
        circulo_ativo[6].style.strokeDashoffset = 314 - (106.76)
        circulo_ativo[7].style.strokeDashoffset = 314 - (188.4)
        circulo_ativo[8].style.strokeDashoffset = 314 - (235.5)
    }

    porcent.forEach((porcent) => {
        let start = 0
        let end = parseInt(porcent.getAttribute("data-valor"))
        let time = end !== 0 ? Math.floor(interval / end) : 0;
        let delay = 0
        let contar = setTimeout(function animation() {
            start ++
            
            porcent.innerHTML = `${start}%`
            if(start !== end) {
                contar = setTimeout(animation, time)
            }
            
        }, delay) 
    });
}




const navLinks = document.querySelectorAll('div header nav a')

window.onscroll = () => {
        section_atual.forEach(sec => {
            let topo = window.scrollY
            let offset = sec.offsetTop - 100
            let altura = sec.offsetHeight
            let identificador = sec.getAttribute('id')
            if(topo >= offset && topo < offset + altura) {
            navLinks.forEach(links => {
                links.classList.remove('ativado')
                document.querySelector('header nav a[href*=' + identificador + ']').classList.add('ativado')
            })
        } 
    })
}

const section_atual = document.querySelectorAll('section')

const observer = new IntersectionObserver((entrando) => {
    entrando.forEach((dentro) => {
        let timer = 500
        if (dentro.isIntersecting) {
            dentro.target.classList.add('show')
        }
        else {
            dentro.target.classList.remove('show')
        }
    })
})

section_atual.forEach((elementos) => observer.observe(elementos))