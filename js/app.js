const container = document.querySelector(".container")
const coffees = [
    {
        name : "50 aniversario de la aplicación del Plan Marina", image : "/pwa_monedas/images/1.png"
    },
    {
        name : "Quincuagésimo aniversario de la aplicación del Plan DN-III-E", image : "/pwa_monedas/images/2.png"
    },
    {
        name : "Centenario de la promulgación de la Constitución Política", image : "/pwa_monedas/images/3.png"
    },
    {
        name : "Bicentenario luctuoso del generalísimo José María Morelos y Pavón", image : "/pwa_monedas/images/4.png"
    },
    {
        name : "Centenario de la Fuerza Aérea Mexicana", image : "/pwa_monedas/images/5.png"
    },
    {
        name : "Centenario de la toma de Zacatecas", image : "/pwa_monedas/images/6.png"
    },
    {
        name : "Centenario de la gesta heroica de Veracruz", image : "/pwa_monedas/images/7.png"
    },
    {
        name : "150 aniversario del natalicio y 100 aniversario luctuoso de Belisario Domínguez", image : "/pwa_monedas/images/8.png"
    },
    {
        name : "Centenario del Ejército Mexicano", image : "/pwa_monedas/images/9.png"
    },
    {
        name : "Vigésimo aniversario de la entrega del Premio Nobel de Literatura a Octavio Paz", image : "/pwa_monedas/images/10.png"
    },
    {
        name : "Octavio Paz, cambio de milenio", image : "/pwa_monedas/images/11.png"
    }

]

const showCoffes = () => {
    let output = ""
    coffees.forEach(
        ({name,image}) => 
        (output += `
        <div class="card">
        <img class = "card--avatar" src=${image}>
        <h1 class="card--title"> ${name}</h1>
        <a class="card--link" href="#"> Detalles </a>
        </div>
        `)
    )
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded",showCoffes)

if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}