"use strict"

// variables wired up
const mountainDropdown = document.getElementById("mountainDropdown")
const outputDiv = document.getElementById("outputDiv")
const nameTextBox = document.getElementById("nameTextBox")
const elevationTextBox = document.getElementById("elevationTextBox")
const descriptionTextBox = document.getElementById("descriptionTextBox")
const effortTextBox = document.getElementById("effortTextBox")
const mountainImage = document.getElementById("mountainImage")
const latAndLngTextbox = document.getElementById("latAndLngTextbox")
const outputSunriseSunsetDiv = document.getElementById("outputSunriseSunsetDiv")



window.onload = () => {
    loadDropdownData()
    mountainDropdown.onchange = onDropdownChange
}
// load dropdown from data


// becoming each object 
function loadDropdownData(){
    for(let mountain of mountainsArray ){
        let theOption = new Option(mountain.name, mountain.name)
        mountainDropdown.appendChild(theOption)
    }
}

//figure out when you select data from dropdown

function onDropdownChange(){
   // console.log(mountainDropdown.value)
    for(let mountain of mountainsArray){
        if(mountain.name == mountainDropdown.value){
         console.log("name")

            nameTextBox.innerHTML = mountain.name
            elevationTextBox.innerHTML = mountain.elevation
            descriptionTextBox.innerHTML = mountain.desc
            effortTextBox.innerHTML = mountain.effort
            mountainImage.src = `/images/${mountain.img}`;
        }
        
    }
}

//output from data given





// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}

