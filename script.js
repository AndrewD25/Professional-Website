/*
Andrew Deal
Professional Website
Presentation on 8/15/23
*/

"use strict"


/// Get Elements ///
const r = document.querySelector(':root'); //Get CSS root

const greeting = document.getElementById("greeting"); //Each element is found and saved in a js variable
const myName = document.getElementById("name");
const intro = document.getElementById("intro");


// Get Element Coordinates //
function getCoords() {

    r.style.setProperty('--greetingWidth', `${greeting.getBoundingClientRect().width}px`); //Width is saved in css variable
    r.style.setProperty('--greetingHeight', `${greeting.getBoundingClientRect().height}px`); //height is saved in css variable

    r.style.setProperty('--nameWidth', `${myName.getBoundingClientRect().width}px`);
    r.style.setProperty('--nameHeight', `${myName.getBoundingClientRect().height}px`);

    r.style.setProperty('--introWidth', `${intro.getBoundingClientRect().width}px`);
    r.style.setProperty('--introHeight', `${intro.getBoundingClientRect().height}px`);
}
getCoords();

// Folders //
const homeFolder = document.getElementById("home");


/// Get Folder Positions ///
function findHomeFolder(direction) {
    //Get box around folder coords
    let rect = homeFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--homeFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--homeFolderY', `${(rect.top + rect.bottom) / 2}px`);

    //Update element coordinates
    if (direction === "shrink") {
        getCoords();
    }
}


/// Functions ///
function shrinkHome() {
    //Get home folder coordinates, then apply the animation for each element
    findHomeFolder("shrink");

    greeting.style.animation = "shrinkAndMoveGreeting 1s forwards"; 
    myName.style.animation = "shrinkAndMoveName 1s forwards"; 
    intro.style.animation = "shrinkAndMoveIntro 1s forwards"; 
}

function growHome() {
    //Get home folder coordinates, then apply the animation for each element    
    findHomeFolder("grow");

    greeting.style.animation = "growAndMoveGreeting 1s forwards"; 
    myName.style.animation = "growAndMoveName 1s forwards"; 
    intro.style.animation = "growAndMoveIntro 1s forwards"
}


