/*
Andrew Deal
Professional Website
Presentation on 8/15/23
*/

"use strict"


/// Get Elements ///
const r = document.querySelector(':root'); //Get CSS root

// Home page
const greeting = document.getElementById("greeting"); //Each element is found and saved in a js variable
const myName = document.getElementById("name");
const intro = document.getElementById("intro");

//About me page
const aboutMeTitle = document.getElementById("aboutMeTitle");
const aboutMeParagraph = document.getElementById("aboutMeParagraph");

// Get Element Coordinates //
function getCoords() {

    r.style.setProperty('--greetingWidth', `${greeting.getBoundingClientRect().width}px`); //Width is saved in css variable
    r.style.setProperty('--greetingHeight', `${greeting.getBoundingClientRect().height}px`); //height is saved in css variable

    r.style.setProperty('--myNameWidth', `${myName.getBoundingClientRect().width}px`);
    r.style.setProperty('--myNameHeight', `${myName.getBoundingClientRect().height}px`);

    r.style.setProperty('--introWidth', `${intro.getBoundingClientRect().width}px`);
    r.style.setProperty('--introHeight', `${intro.getBoundingClientRect().height}px`);
    
    r.style.setProperty('--aboutMeTitleWidth', `${aboutMeTitle.getBoundingClientRect().width}px`);
    r.style.setProperty('--aboutMeTitleHeight', `${aboutMeTitle.getBoundingClientRect().height}px`);

    r.style.setProperty('--aboutMeParagraphWidth', `${aboutMeParagraph.getBoundingClientRect().width}px`);
    r.style.setProperty('--aboutMeParagraphHeight', `${aboutMeParagraph.getBoundingClientRect().height}px`);
}
getCoords();

// Folders //
const allFolders = document.getElementsByClassName("folder");
  const homeFolder = allFolders[0];
  const aboutMeFolder = allFolders[1];
  const projectsFolder = allFolders[2];
  const resumeFolder = allFolders[3];
  const contactFolder = allFolders[4];

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
    };
};

function findAboutMeFolder(direction) {
    //Get box around folder coords
    let rect = aboutMeFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--aboutMeFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--aboutMeFolderY', `${(rect.top + rect.bottom) / 2}px`);

    //Update element coordinates
    if (direction === "shrink") {
        getCoords();
    };
};

// Variable to keep track of which folder is currently open //
let currentFolder = "home";


/// Functions ///
function shrinkHome() {
    //Get home folder coordinates, then apply the animation for each element
    findHomeFolder("shrink");

    //Animations
    greeting.style.animation = "shrinkAndMoveGreeting 1s forwards"; 
    myName.style.animation = "shrinkAndMoveName 1s forwards"; 
    intro.style.animation = "shrinkAndMoveIntro 1s forwards"; 
}

function shrinkAboutMe() {
    //Get about me folder coordinates, then apply the animation for each element
    findAboutMeFolder("shrink");

    //Animations
    aboutMeTitle.style.animation = "shrinkAndMoveAboutMeTitle 1s forwards"; 
    aboutMeParagraph.style.animation = "shrinkAndMoveAboutMeParagraph 1s forwards";
}

function growHome() {
    console.log("working");

    //Shrink whichever folder is open
    switch (currentFolder) {
        case "home": 
            return;
        case "aboutMe":
            shrinkAboutMe();
            break;
        case "projects":
            shrinkProjects();
            break;
        case "resume":
            shrinkResume();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //Tell program that home folder is being opened
    currentFolder = "home";

    //Get home folder coordinates, then apply the animation for each element    
    findHomeFolder("grow");

    //Animations
    greeting.style.animation = "growAndMoveGreeting 1s forwards"; 
    myName.style.animation = "growAndMoveName 1s forwards"; 
    intro.style.animation = "growAndMoveIntro 1s forwards"
}

function growAboutMe() {
    //Shrink whichever folder is open
    switch (currentFolder) {
        case "home": 
            shrinkHome();
            break;
        case "aboutMe":
            return;
        case "projects":
            shrinkProjects();
            break;
        case "resume":
            shrinkResume();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //Tell program that home folder is being opened
    currentFolder = "aboutMe";

    //Get home folder coordinates, then apply the animation for each element    
    findAboutMeFolder("grow");

    //Animations
    aboutMeTitle.style.animation = "growAndMoveAboutMeTitle 1s forwards"; 
    aboutMeParagraph.style.animation = "growAndMoveAboutMeParagraph 1s forwards";
}


/// Add ondblclick events to each folder ///
homeFolder.ondblclick = growHome;
aboutMeFolder.ondblclick = growAboutMe; //Or the updated grow (any folder) function if I figure out how to do that sooner than later
//projectsFolder.ondblclick = growProjects;
//resumeFolder.ondblclick = growResume;
//contactsFolder.ondlbclick = growContacts;


