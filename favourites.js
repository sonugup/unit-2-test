// write js code here corresponding to favourites.html
var favouritesArr=JSON.parse(localStorage.getItem("favourites"))

displayData(favouritesArr)


function displayData(elem){
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
        td6.innerText="Delete";
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            event.target.parentNode.remove()
            Deleteitem(el, "index")
        })

        tr.append(td1, td2, td3, td4, td5, td6)

        document.querySelector("tbody").append(tr)
    })

}
function Deleteitem(el, index){
    console.log(index, el)
    favouritesArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favouritesArr))
    window.location.reload()
}
