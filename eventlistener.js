var demo = document.getElementById("demo")
var container = document.getElementById("container")

function changeColor(){
    container.style.backgroundColor = 'red'
}

function changeBtnColor(){
    demo.style.background = 'orange'
}

demo.addEventListener('click', changeColor)
demo.addEventListener('click', changeBtnColor)