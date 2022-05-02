// write js code here corresponding to matches.html
var matchesArr=JSON.parse(localStorage.getItem("schedule"))
displayData(matchesArr)

function handleFilter(){
    var selector=document.getElementById("filterVenue").value ;
   // console.log(selector)
    var filteredList=matchesArr.filter(function(el){
        return el.Venue==selector;
    })
    //console.log(filteredList)
    displayData(filteredList)
}

var favouritesArr=JSON.parse(localStorage.getItem("favourites"))||[]

function displayData(elem){
    document.querySelector("tbody").innerHTML=""
    elem.forEach(function(el){
        var tr=document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=el.Number;

        var td2=document.createElement("td")
        td2.innerText=el.TeamA;

        var td3=document.createElement("td")
        td3.innerText=el.TeamB;

        var td4=document.createElement("td")
        td4.innerText=el.Date;

        var td5=document.createElement("td")
        td5.innerText=el.Venue;

        var td6=document.createElement("td")
        td6.innerText="Favourite";
        td6.style.color="blue"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            addFavourites(el)
        })

        tr.append(td1, td2, td3, td4, td5, td6)

        document.querySelector("tbody").append(tr)
    })
}

function addFavourites(el){
    favouritesArr.push(el)
 //console.log(el)  
 localStorage.setItem("favourites",JSON.stringify(favouritesArr))
 window.location.href="favourites.html"     
}