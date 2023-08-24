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
const instructions = document.getElementById("instructions")

//About me page
const aboutMeTitle = document.getElementById("aboutMeTitle");
const aboutMeParagraph = document.getElementById("aboutMeParagraph");
const me = document.getElementById("me");

//Projects page
const projectsTitle = document.getElementById("projectsTitle");
const projectsGallery = document.getElementById("projectsGallery");

//Resume page
const resumeTitle = document.getElementById("resumeTitle");

//Contact page
const contactTitle = document.getElementById("contactTitle");
const contactBox = document.getElementById("contactBox");

// Get Element Coordinates //
function getCoords() {

    //Home
    r.style.setProperty('--greetingWidth', `${greeting.getBoundingClientRect().width / 2}px`); //Width is saved in css variable
    r.style.setProperty('--greetingHeight', `${greeting.getBoundingClientRect().height / 2}px`); //height is saved in css variable
    r.style.setProperty('--myNameWidth', `${myName.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--myNameHeight', `${myName.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--introWidth', `${intro.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--introHeight', `${intro.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--instructionsWidth', `${intro.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--instructionsHeight', `${intro.getBoundingClientRect().height / 2}px`);
    
    //About Me
    r.style.setProperty('--aboutMeTitleWidth', `${aboutMeTitle.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--aboutMeTitleHeight', `${aboutMeTitle.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--aboutMeParagraphWidth', `${aboutMeParagraph.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--aboutMeParagraphHeight', `${aboutMeParagraph.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--meWidth', `${me.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--meHeight', `${me.getBoundingClientRect().height / 2}px`);

    //Projects
    r.style.setProperty('--projectsTitleWidth', `${projectsTitle.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--projectsTitleHeight', `${projectsTitle.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--projectsGalleryWidth', `${projectsGallery.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--projectsGalleryHeight', `${projectsGallery.getBoundingClientRect().height / 2}px`);

    //Resume
    r.style.setProperty('--resumeTitleWidth', `${resumeTitle.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--resumeTitleHeight', `${resumeTitle.getBoundingClientRect().height / 2}px`);

    //Contact
    r.style.setProperty('--contactTitleWidth', `${contactTitle.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--contactTitleHeight', `${contactTitle.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--contactBoxWidth', `${contactBox.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--contactBoxHeight', `${contactBox.getBoundingClientRect().height / 2}px`);
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

function findProjectsFolder(direction) {
    //Get box around folder coords
    let rect = projectsFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--projectsFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--projectsFolderY', `${(rect.top + rect.bottom) / 2}px`);

    //Update element coordinates
    if (direction === "shrink") {
        getCoords();
    };
};

function findResumeFolder(direction) {
    //Get box around folder coords
    let rect = resumeFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--resumeFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--resumeFolderY', `${(rect.top + rect.bottom) / 2}px`);

    //Update element coordinates
    if (direction === "shrink") {
        getCoords();
    };
};

function findContactFolder(direction) {
    //Get box around folder coords
    let rect = contactFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--contactFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--contactFolderY', `${(rect.top + rect.bottom) / 2}px`);

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
    instructions.style.animation = "shrinkAndMoveInstructions 1s forwards"; 
}

function shrinkAboutMe() {
    //Get about me folder coordinates, then apply the animation for each element
    findAboutMeFolder("shrink");

    //Animations
    aboutMeTitle.style.animation = "shrinkAndMoveAboutMeTitle 1s forwards"; 
    aboutMeParagraph.style.animation = "shrinkAndMoveAboutMeParagraph 1s forwards";
    me.style.animation = "shrinkAndMoveMe 1s forwards";
}

function shrinkProjects() {
    //Get projects folder coordinates, then apply the animation for each element
    findProjectsFolder("shrink");

    //Animations
    projectsTitle.style.animation = "shrinkAndMoveProjectsTitle 1s forwards";
    projectsGallery.style.animation = "shrinkAndMoveProjectsGallery 1s forwards";
}

function shrinkResume() {
    //Get projects folder coordinates, then apply the animation for each element
    findResumeFolder("shrink");

    //Animations
    resumeTitle.style.animation = "shrinkAndMoveResumeTitle 1s forwards";
}

function shrinkContact() {
    //Get projects folder coordinates, then apply the animation for each element
    findContactFolder("shrink");

    //Animations
    contactTitle.style.animation = "shrinkAndMoveContactTitle 1s forwards";
    contactBox.style.animation = "shrinkAndMoveContactBox 1s forwards";
}

function growHome() {
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
    instructions.style.animation = "growAndMoveInstructions 1s forwards"
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
    me.style.animation = "growAndMoveMe 1s forwards";
}

function growProjects() {
    //Shrink whichever folder is open
    switch (currentFolder) {
        case "home": 
            shrinkHome();
            break;
        case "aboutMe":
            shrinkAboutMe();
            break;
        case "projects":
            return;
        case "resume":
            shrinkResume();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //Tell program that home folder is being opened
    currentFolder = "projects";

    //Get home folder coordinates, then apply the animation for each element    
    findProjectsFolder("grow");

    //Animations
    projectsTitle.style.animation = "growAndMoveProjectsTitle 1s forwards"; 
    projectsGallery.style.animation = "growAndMoveProjectsGallery 1s forwards"; 
}

function growResume() {
    //Shrink whichever folder is open
    switch (currentFolder) {
        case "home": 
            shrinkHome();
            break;
        case "aboutMe":
            shrinkAboutMe();
            break;
        case "projects":
            shrinkProjects();
            break;
        case "resume":
            return;
        case "contact":
            shrinkContact();
            break;
    };

    //Tell program that home folder is being opened
    currentFolder = "resume";

    //Get home folder coordinates, then apply the animation for each element    
    findResumeFolder("grow");

    //Animations
    resumeTitle.style.animation = "growAndMoveResumeTitle 1s forwards"; 
}

function growContact() {
    //Shrink whichever folder is open
    switch (currentFolder) {
        case "home": 
            shrinkHome();
            break;
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
            return;
    };

    //Tell program that home folder is being opened
    currentFolder = "contact";

    //Get home folder coordinates, then apply the animation for each element    
    findContactFolder("grow");

    //Animations
    contactTitle.style.animation = "growAndMoveContactTitle 1s forwards";
    contactBox.style.animation = "growAndMoveContactBox 1s forwards"; 
}


/// Add ondblclick events to each folder ///
homeFolder.ondblclick = growHome;
aboutMeFolder.ondblclick = growAboutMe; //Or the updated grow (any folder) function if I figure out how to do that sooner than later
projectsFolder.ondblclick = growProjects; //Or the updated grow (any folder) function if I figure out how to do that sooner than later
resumeFolder.ondblclick = growResume;
contactFolder.ondblclick = growContact;


