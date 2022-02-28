/*console.log("Hej på dig")
var anElementet = document.getElementById("app")

//appElementet.innerHTML="Hello World"
//appElementet.outerHTML="Hello World"

var anElement = document.createElement("h1")
appElementet.appendChild(ettElement)
var app = document.getElementById("app")
app.appendChild(an)

setTimeout(age, 3000)

function age() { 
    console.log("Ageing game")
    setTimeout(age, 3000)
}*/
age()

function age() {
    var xhr = new XMLHttpRequest()
    //xhr.open("GET", "/js/data.json") 
    xhr.open("GET", "http://localhost:3000")
    xhr.onload=function() { 
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data) { 
    var appElementet = document.getElementById("app")
    var aTable = document.createElement("table")
    appElementet.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points, data[0].logo))
    aTable.appendChild(createRow(data[1].name, data[1].points, data[1].logo))
    aTable.appendChild(createRow(data[2].name, data[2].points, data[2].logo))
    aTable.appendChild(createRow(data[3].name, data[3].points, data[3].logo))
}

function createRow(name, points, url) { 
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    aRow.appendChild(createCells(url))

    return aRow
}

function createCell(content){ 
    var aCell = document.createElement("td") 
    aCell.innerHTML = content 
    return aCell;
}
function createImageCell(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src=url
    anImage.classList.add("tableLogo")
    aCell.appendChild(anImage)
    return aCell;
}