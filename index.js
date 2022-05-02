// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",masaiFun)

var matchesArr=JSON.parse(localStorage.getItem("schedule"))||[]
function masaiFun(){
    event.preventDefault()
    var data={
        Number:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamB.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value,

    }
    
    matchesArr.push(data)
    console.log(matchesArr)
    localStorage.setItem("schedule",JSON.stringify(matchesArr))
    window.location.href="matches.html"
}
