var para = document.querySelector("#table1")
var inputdate = document.querySelector("#date-inp")
var inputcity = document.querySelector("#city-inp")
var inputcountry = document.querySelector("#country-inp")
var inputstate = document.querySelector("#state-inp")
var inputshape = document.querySelector("#shape-inp")
var btn = document.querySelector("#search-btn")
var btn2 = document.querySelector("#refresh-btn")
var filteredList = dataSet
btn.addEventListener("click",handlesearch)
btn2.addEventListener("click",handlerefresh)

function render_table(){
    para.innerHTML ="";
    var tbody = document.createElement("tbody")
    para.appendChild(tbody)
    var header = ['date/time', 'city', 'state', 'country', 'shape','comment']
    var row = document.createElement('tr')
    tbody.appendChild(row)
    for (var i =0; i< header.length;i++){
        var colHeader = document.createElement('th')
        colHeader.innerHTML = header[i]
        row.appendChild(colHeader)
    }
    for (var i =0; i< filteredList.length;i++){
        var row = document.createElement('tr')
        tbody.appendChild(row)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].datetime
        row.appendChild(colHeader)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].city
        row.appendChild(colHeader)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].state
        row.appendChild(colHeader)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].country
        row.appendChild(colHeader)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].shape
        row.appendChild(colHeader)
        var colHeader = document.createElement('td')
        colHeader.innerHTML = filteredList[i].comment
        row.appendChild(colHeader)
    }
}

function handlesearch(){
        var inputDate = inputdate.value.trim()
        var inputCity = inputcity.value.trim().toUpperCase()
        var inputState = inputstate.value.trim().toUpperCase()
        var inputCountry = inputcountry.value.trim().toUpperCase()
        var inputShape = inputshape.value.trim().toUpperCase()
        filteredList = dataSet.filter(function(data) {
        var listdate = data.datetime;
        var listcity = data.city.toUpperCase();
        var liststate = data.state.toUpperCase();
        var listcountry = data.country.toUpperCase();
        var listshape = data.shape.toUpperCase();
        var criteria = ""
        if (inputDate) {
            criteria = criteria + " listdate === inputDate " + "&&"
        }
        if (inputCity) {
            criteria = criteria + " listcity === inputCity " + "&&"
        }
        if (inputState) {
            criteria = criteria + " liststate === inputState " + "&&"
        }   
        if (inputCountry){
            criteria = criteria + " listcountry === inputCountry " + "&&"
        }
        if (inputShape){
            criteria = criteria + " listshape === inputShape " +"&&"
        }
        criteria = criteria.slice(0,-2)
        
        return eval(criteria) ;   
        
      });

    render_table()
    
      
}

function handlerefresh(){
    filteredList = dataSet
    render_table() 
}

render_table()



