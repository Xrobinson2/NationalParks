"use strict"



const outputDiv = document.getElementById("outputDiv")
const locationDropdown = document.getElementById("locationDropdown")




window.onload = () => {
    loadDropdownData()
    locationDropdown.onchange = onDropdownChange
}


// load data in dropdown
function loadDropdownData(){
    for(let state of locationsArray){
        let theOption = new Option(state.name, state.name)
        locationDropdown.appendChild(theOption)
    }
}


function onDropdownChange(){
    for(let state of locationsArray){
        if(state == locationDropdown.value)
            
    }

}

















































// Creates card & injects information to each card
function createStudentColumnElement(student){
    let studentColumnDiv = document.createElement("div");

    studentColumnDiv.className = "col";

    let studentCardDiv = document.createElement("div");
    studentCardDiv.className = "card studentcard";

    studentColumnDiv.appendChild(studentCardDiv);

    let studentImage = document.createElement("img");
    studentImage.src = student.imageurl;
    studentImage.className = "card-img-top";
    studentImage.alt = student.name;

    studentCardDiv.appendChild(studentImage);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    studentCardDiv.appendChild(cardBodyDiv);

    let studentHeadedTag = document.createElement("h5");
    studentHeadedTag.innerHTML = student.name;

    cardBodyDiv.appendChild(studentHeadedTag);


    let paraEmail = document.createElement("p");
    paraEmail.className = "card-text";

    cardBodyDiv.appendChild(paraEmail);


    let aEmail = document.createElement("a");
    aEmail.href = "mailto://" + student.email;
    aEmail.innerHTML = student.email;

    paraEmail.appendChild(aEmail);


    let paraGithub = document.createElement("p");
    cardBodyDiv.appendChild(paraGithub);

    let aGithub = document.createElement("a");
    aGithub.href = student.githuburl;
    aGithub.innerHTML = student.githuburl;
    paraGithub.appendChild(aGithub);


    let aButton = document.createElement("a");
    aButton.className = "btn btn-primary";
    aButton.innerHTML = "Learn more about " + student.name;
    aButton.href = "#";

    cardBodyDiv.appendChild(aButton);




    return studentColumnDiv;
}