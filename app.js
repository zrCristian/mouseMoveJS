const body = document.querySelector("body")
const container = document.querySelector(".container")
const containerEyes = document.querySelectorAll(".container__eye") 
const eyes = document.querySelectorAll(".eye") 
const menuBurger = document.querySelector(".menu")
const header = document.querySelector("#header")



document.addEventListener("mousemove", moveEye)
menuBurger.addEventListener("click", toggleMenuBurger)


function moveEye(e) {
    eyes.forEach( (eye) => {

        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);


        let angleRadians = Math.atan2(y - e.clientY, x - e.clientX);
        let angleDeg = angleRadians * 180 / Math.PI
        
        if (!eye.classList.contains("piña")) {
            eye.style.transform = `rotate(${angleDeg}deg)`
        }
    })
}

function toggleMenuBurger () {
    header.classList.toggle("move") 
    menuBurger.children[0].classList.toggle("fa-bars")
    menuBurger.children[0].classList.toggle("fa-arrow-right")
}


containerEyes.forEach( (e, i) => {
    e.addEventListener("click", () => piña(e, i))
})

function piña (e, i) {
    eyes[i].style.transform = "rotate(0deg)"
    eyes[i].classList.toggle("piña")

}








