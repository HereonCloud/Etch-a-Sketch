var gridButton = document.querySelector("#prompt")
var drawingSection = document.getElementsByClassName("drawingSection")
var penColor = 'black'

document.getElementById("black").addEventListener("click", () => {
    penColor = "black"
})

document.getElementById("random").addEventListener("click", () => {
    penColor = "random"
})

document.getElementById("eraser").addEventListener("click", () => {
    penColor = "whitesmoke"
})

gridButton.addEventListener('click', () => {
    drawingSection[0].innerHTML="";
    var input = document.getElementById("input")
    var container = document.createElement("div")
    container.classList.add("container")
    container.style.cssText = `display:grid; width:100%; height:100%;`
    drawingSection[0].appendChild(container)
    let parsedInput = parseInt(input.value).toFixed(0)
    if (isNaN(parsedInput)|| parsedInput == undefined || parsedInput > 100){
        alert("Invalid input - not number or greater than 100")
        window.location.reload()
    } 
    else {
        for(var x = 0; x<parsedInput; x++) {
            addContainer(parsedInput, container)
            var activeDiv = document.querySelectorAll(".box")
            activeDiv.forEach((d) => {
                d.addEventListener("mouseover", ()=>{
                    d.style.backgroundColor = penColor === "random" ? '#' + Math.random().toString(16).substring(9) : penColor
                })
            })
         }
    }
})

function addContainer(grid = 1, element) {
    var row = document.createElement("div")
    row.classList.add("container")
    row.style.cssText = `display:flex;width:100%; height:100%;`
    element.appendChild(row)

    for(var x = 0; x<grid; x++) {
        var div = document.createElement("div")
        div.classList.add("box")
        div.style.cssText = 'width:100%; border:thin solid gray;'
        row.appendChild(div)
    }
}