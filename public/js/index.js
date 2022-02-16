console.log("Hej på dig")
var appElementet = document.getElementById("app")

appElementet.innerHTML="Hej Therese"
//appElementet.outerHTML="Hej Therese"

var ettElement = document.createElement("h1")
appElementet.appendChild(ettElement)

setTimeout(age, 3000)

function age() { 
    console.log("Ageing game")
    setTimeout(age, 3000)
}

function age() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json") 
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
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))
    aTable.appendChild(createRow(data[3].name, data[3].points))
}

function createRow(name, points) { 
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow
}

function createCell(content){ 
    var aCell = document.createElement("td") 
    aCell.innerHTML = content 
    return aCell;
}