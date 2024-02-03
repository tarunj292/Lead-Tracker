let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads(){
    let listItems = "" //using listTems to first have all element and then as loop executes manupulate dom at end because DOM Manupulation inside loop cost us higher
    for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a href=" + myLeads[i] + ">" + myLeads[i] + "</a></li>"
    listItems += `
        <li>
            <a href= ${myLeads[i]} >
                ${myLeads[i]} 
            </a>
        </li>
    `
    // create element
    // set text content
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems
}