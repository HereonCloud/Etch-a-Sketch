var button = document.querySelector("#prompt")
var activeDiv = document.querySelectorAll("div")
button.addEventListener('click', () => {
    document.body.innerHTML = ""
    var container = document.createElement("div")
    container.classList.add("container")
    container.style.cssText = `display:grid; background-color:whitesmoke; width:100%; height:100%;`
    document.body.append(container)
    let input = parseInt(prompt("Insert Grid")).toFixed(0)
    if (isNaN(input)|| input == undefined){
        alert("Input is not an integer")
    } else {
        for(var x = 0; x<input; x++) {
            addContainer(input, container)
            
         }
    }
})


function addContainer(grid = 1, element) {
    var row = document.createElement("div")
    row.classList.add("container")
    row.style.cssText = `display:flex; background-color:whitesmoke; width:100%; height:100%;`
    element.appendChild(row)

    for(var x = 0; x<grid; x++) {
        var div = document.createElement("div")
        div.style.width = "100%";
        row.appendChild(div)
    }
}