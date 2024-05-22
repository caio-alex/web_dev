let fsList = document.querySelectorAll(".multiple-field")
for(let i=0; i<fsList.length; i++){
    initMultipleFieldSet(fsList[i])
}
function initMultipleFieldSet(fs){
        let addButton = document.createElement("button")
        addButton.textContent="adicionar"
        addButton.type ="button"

        fs.appendChild(addButton)

        let firstInput = fs.querySelector("input")

        addButton.addEventListener("click", function(){
            let div = document.createElement("div")
            let newInput = document.createElement("input")
            newInput.name= firstInput.name
            newInput.type=firstInput.type

            let deleteButton = document.createElement("button")
            deleteButton.textContent = "Excluir"
            deleteButton.type = "button"

            div.appendChild(newInput)
            div.appendChild(deleteButton)

            deleteButton.addEventListener("click", function(){
                div.remove()

            })
            fs.insertBefore(div, addButton)
        })
    }
