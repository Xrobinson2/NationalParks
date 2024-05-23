"use strict"



const outputDiv = document.getElementById("outputDiv")
const locationDropdown = document.getElementById("locationDropdown")
const onDropdownChange = document.getElementById("onDropdownChange")


window.onload = () => {
    loadDropdownData()
    locationDropdown.onchange = onDropdownChange
}


// load data in dropdowns
function loadLocationDropdownData(){
    for(let location of locationsArray){
        let theOption = new Option(location, location)
        locationDropdown.appendChild(theOption)
        
        
    }
}

function loadParkTypeDropdownData(){
 
}



function onLocationDropdownChange(){
    for(let state of locationsArray){
        if(state == locationDropdown.value){
          console.log("state")
        }
            
    }

}





/*
1. Location == nationalParksArray[i].state








2. nationalParksArray[i].includes(parktype)

*/











function createCard (title, location){
    let parkListCard = document.createElement("div");
    parkListCard.classList.add("card", "parkcard");

    let parkCardBody = document.createElement("div");
    parkCardBody.classList.add("card-body");

    parkListCard.appendChild(parkCardBody);

    let parkCardTitle = document.createElement("h5");
    parkCardTitle.classList.add("card-title");

    parkCardBody.appendChild(parkCardTitle);

 

    let parkCardText = document.createElement("p");
    parkCardText.classList.add("card-text");

    parkCardBody.appendChild(parkCardText);

    let parkCardLocation = document.createElement("p");
    parkCardLocation.classList.add("cardLocation");

    parkCardText.appendChild(parkCardLocation);


    parkCardTitle.innerHTML = title;

    parkCardLocation.innerHTML = location;

    return parkListCard;
}
























