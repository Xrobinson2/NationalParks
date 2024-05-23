"use strict"



const outputDiv = document.getElementById("outputDiv")
const parkTypeDropdown = document.getElementById("parkTypeDropdown")
const locationDropdown = document.getElementById("locationDropdown")

//wired radio buttons

const locationRadio = document.getElementById("locationRadio")
const parkTypeRadio = document.getElementById("parkTypeRadio")


window.onload = () => {
    loadLocationDropdownData()
    loadParkTypeDropdownData()
    locationRadio.onchange = filterRadioBtn
    parkTypeRadio.onchange = filterRadioBtn
    locationDropdown.onchange = showLocationDataOnChange;
    parkTypeDropdown.onchange = showParkTypeDataOnChange;
}


// load data in dropdowns
function loadLocationDropdownData(){
    for(let location of locationsArray){
        let theOption = new Option(location, location)
        locationDropdown.appendChild(theOption)
        
        
    }
}

function loadParkTypeDropdownData(){
 for(let typeOfPark of parkTypesArray){
    let theOption = new Option(typeOfPark, typeOfPark)
    parkTypeDropdown.appendChild(theOption)
 }
}

//After you choose

function showLocationDataOnChange(){
    outputDiv.innerHTML = ""
    //console.log("activate")
    for(let nationalPark of nationalParksArray){
        console.log(locationDropdown.value)
        if(nationalPark.State == locationDropdown.value){
            let address = `${nationalPark.City}, ${nationalPark.State}`
            let contact = `${nationalPark.Phone}`
            outputDiv.appendChild(generateCard(nationalPark.LocationName, address, contact))
            console.log("state")
        }
        
    }

}

function showParkTypeDataOnChange(){
    outputDiv.innerHTML = ""
    for(let nationalPark of nationalParksArray){
        if(nationalPark.LocationName.includes(parkTypeDropdown.value) == true){
            //console.log("Hello Moto")
            let address = `${nationalPark.City}, ${nationalPark.State},`
            let contact = `${nationalPark.Phone}`
            outputDiv.appendChild(generateCard(nationalPark.LocationName, address, contact));
        };
    };
};


//filter radio function
function filterRadioBtn(){
    outputDiv.innerHTML = ""
    if(parkTypeRadio.checked == true){
        parkTypeDropdown.removeAttribute('disabled')
    } else {
        parkTypeDropdown.setAttribute("disabled","");
    }

    if(locationRadio.checked == true){
        locationDropdown.removeAttribute('disabled')
    } else {
        locationDropdown.setAttribute("disabled", "")
    }


    // if(parkRadio.checked == true){
    //     //set attribute
    // locationDropdown.setAttribute("diabled", "")
    // }
    // else if (locationRadio.checked == true){
    //     parkTypeDropdown == false
        
    // }
    console.log("true or false")
}



// Card generated with Park info

function generateCard (title, location, contact){
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

    let parkCardContact = document.createElement("h6");
    parkCardContact.classList.add("card-text");

    parkCardBody.appendChild(parkCardContact);


    parkCardTitle.innerHTML = title;

    parkCardLocation.innerHTML = location;

    parkCardContact.innerHTML = contact
        if(nationalParksArray.Phone == "0" ){
            
        }
    return parkListCard;
}













/*2. nationalParksArray[i].includes(parktype)

*/



































