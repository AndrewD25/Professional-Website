/*
Andrew Deal
HTML/CSS Capstone Project
August 31, 2023
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
const projectsInstructions = document.getElementById("projectsInstructions");
const projectsGallery = document.getElementById("projectsGallery");

//Experience page
const experienceTitle = document.getElementById("experienceTitle");
const experienceDescription = document.getElementById("experienceDescription");
const myResume = document.getElementById("myResume");

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
    r.style.setProperty('--projectsInstructionsWidth', `${projectsInstructions.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--projectsInstructionsHeight', `${projectsInstructions.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--projectsGalleryWidth', `${projectsGallery.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--projectsGalleryHeight', `${projectsGallery.getBoundingClientRect().height / 2}px`);

    //Experience
    r.style.setProperty('--experienceTitleWidth', `${experienceTitle.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--experienceTitleHeight', `${experienceTitle.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--experienceDescriptionWidth', `${experienceDescription.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--experienceDescriptionHeight', `${experienceDescription.getBoundingClientRect().height / 2}px`);
    r.style.setProperty('--myResumeWidth', `${myResume.getBoundingClientRect().width / 2}px`);
    r.style.setProperty('--myResumeHeight', `${myResume.getBoundingClientRect().height / 2}px`);

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
  const experienceFolder = allFolders[3];
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

function findExperienceFolder(direction) {
    //Get box around folder coords
    let rect = experienceFolder.getBoundingClientRect();

    //Save center x and y to CSS (finding avg x and y)
    r.style.setProperty('--experienceFolderX', `${(rect.left + rect.right) / 2}px`);
    r.style.setProperty('--experienceFolderY', `${(rect.top + rect.bottom) / 2}px`);

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

    //By setting default scales to 1 here, it ensures that the animation delay does not make them disappear from the page
    greeting.style.transform = "scale(1)";
    myName.style.transform = "scale(1)";
    intro.style.transform = "scale(1)";
    instructions.style.transform = "scale(1)";

    //Animations
    greeting.style.animation = "shrinkAndMoveGreeting 1s 0.6s forwards";
    myName.style.animation = "shrinkAndMoveName 1s 0.9s forwards";
    intro.style.animation = "shrinkAndMoveIntro 1s 0.3s forwards";
    instructions.style.animation = "shrinkAndMoveInstructions 1s forwards";
}

function shrinkAboutMe() {
    //Get about me folder coordinates, then apply the animation for each element
    findAboutMeFolder("shrink");

    //By setting default scales to 1 here, it ensures that the animation delay does not make them disappear from the page
    aboutMeTitle.style.transform = "scale(1)";
    aboutMeParagraph.style.transform = "scale(1)";
    me.style.transform = "scale(1)";

    //Animations
    aboutMeTitle.style.animation = "shrinkAndMoveAboutMeTitle 1s 0.6s forwards"; 
    aboutMeParagraph.style.animation = "shrinkAndMoveAboutMeParagraph 1s forwards";
    me.style.animation = "shrinkAndMoveMe 1s 0.4s forwards";
}

function shrinkProjects() {
    //Get projects folder coordinates, then apply the animation for each element
    findProjectsFolder("shrink");

    //By setting default scales to 1 here, it ensures that the animation delay does not make them disappear from the page
    projectsTitle.style.transform = "scale(1)";
    projectsInstructions.style.transform = "scale(1)";
    projectsGallery.style.transform = "scale(1)";

    //Scroll window back to left side so that the project gallery shrinking animation is more smooth
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    //Animations
    projectsTitle.style.animation = "shrinkAndMoveProjectsTitle 1s 0.6s forwards";
    projectsInstructions.style.animation = "shrinkAndMoveProjectsInstructions 1s 0.4s forwards";
    projectsGallery.style.animation = "shrinkAndMoveProjectsGallery 1s 0.2s forwards";

    //Deactivate Tabindex
    let galleryImages = document.getElementsByClassName("galleryImg"); //Get array of all gallery images
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].setAttribute("tabindex", "-1"); //Disable tabindex for each, on shrink
    };

    //Reset cursor
    document.documentElement.style.cursor = "auto";
}

function shrinkExperience() {
    //Get projects folder coordinates, then apply the animation for each element
    findExperienceFolder("shrink");

    //By setting default scales to 1 here, it ensures that the animation delay does not make them disappear from the page
    experienceTitle.style.transform = "scale(1)";
    experienceDescription.style.transform = "scale(1)";
    myResume.style.transform = "scale(1)";

    //Animations
    experienceTitle.style.animation = "shrinkAndMoveExperienceTitle 1s 0.6s forwards";
    experienceDescription.style.animation = "shrinkAndMoveExperienceDescription 1s 0.3s forwards";
    myResume.style.animation = "shrinkAndMoveMyResume 1s forwards";

    //Deactivate Tabindex
    myResume.children[2].setAttribute("tabindex", "-1"); //Diable tab index on resume link
}

function shrinkContact() {
    //Get projects folder coordinates, then apply the animation for each element
    findContactFolder("shrink");

    //By setting default scales to 1 here, it ensures that the animation delay does not make them disappear from the page
    contactTitle.style.transform = "scale(1)";
    contactBox.style.transform = "scale(1)";

    //Animations
    contactTitle.style.animation = "shrinkAndMoveContactTitle 1s 0.6s forwards";
    contactBox.style.animation = "shrinkAndMoveContactBox 1s 0.3s forwards";

    //Deactivate Tabindex
     //Form elements
     document.getElementById("nameInput").setAttribute("tabindex", "-1");
     document.getElementById("emailInput").setAttribute("tabindex", "-1");
     document.getElementById("messageInput").setAttribute("tabindex", "-1");
     document.getElementById("submitContactForm").setAttribute("tabindex", "-1");
      //Links to contact info
     let contactLinks = document.getElementsByClassName("contactLink"); //Get array of all contact info links
     for (let i = 0; i < contactLinks.length; i++) {
         contactLinks[i].setAttribute("tabindex", "-1"); //Make each element in the array tab-able
     };
}

async function growHome() {
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
        case "experience":
            shrinkExperience();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //0.6s pause
    await new Promise(resolve => setTimeout(resolve, 1200));

    //Change the page title
    document.title = "Hi, I'm Andrew Deal";

    //Tell program that home folder is being opened
    currentFolder = "home";

    //Get home folder coordinates, then apply the animation for each element    
    findHomeFolder("grow");

    //Set default scales to 0 to avoid visual glitches
    greeting.style.transform = "scale(0)";
    myName.style.transform = "scale(0)";
    intro.style.transform = "scale(0)";
    instructions.style.transform = "scale(0)";

    //Animations
    greeting.style.animation = "growAndMoveGreeting 1s 0.3s forwards";
    myName.style.animation = "growAndMoveName 1s forwards";
    intro.style.animation = "growAndMoveIntro 1s 0.6s forwards"
    instructions.style.animation = "growAndMoveInstructions 1s 0.9s forwards"
}

async function growAboutMe() {
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
        case "experience":
            shrinkExperience();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //0.6s pause
    await new Promise(resolve => setTimeout(resolve, 1200));

    //Change the page title
    document.title = "About Me";

    //Tell program that home folder is being opened
    currentFolder = "aboutMe";

    //Get home folder coordinates, then apply the animation for each element    
    findAboutMeFolder("grow");

    //Set default scales to 0 to avoid visual glitches
    aboutMeTitle.style.transform = "scale(0)";
    aboutMeParagraph.style.transform = "scale(0)";
    me.style.transform = "scale(0)";

    //Animations
    aboutMeTitle.style.animation = "growAndMoveAboutMeTitle 1s 0s forwards"; 
    aboutMeParagraph.style.animation = "growAndMoveAboutMeParagraph 1s 0.6s forwards";
    me.style.animation = "growAndMoveMe 1s 0.3s forwards";
}

async function growProjects() {
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
        case "experience":
            shrinkExperience();
            break;
        case "contact":
            shrinkContact();
            break;
    };

    //0.6s pause
    await new Promise(resolve => setTimeout(resolve, 1200));

    //Change the page title
    document.title = "My Portfolio";

    //Tell program that home folder is being opened
    currentFolder = "projects";

    //Get home folder coordinates, then apply the animation for each element    
    findProjectsFolder("grow");

    //Set default scales to 0 to avoid visual glitches
    projectsTitle.style.transform = "scale(0)";
    projectsInstructions.style.transform = "scale(0)";
    projectsGallery.style.transform = "scale(0)";

    //Animations
    projectsTitle.style.animation = "growAndMoveProjectsTitle 1s forwards"; 
    projectsInstructions.style.animation = "growAndMoveProjectsInstructions 1s 0.3s forwards"; 
    projectsGallery.style.animation = "growAndMoveProjectsGallery 1s 0.6s forwards"; 

    //Active tabindex for keyboard users
    let galleryImages = document.getElementsByClassName("galleryImg"); //Get array of all gallery images
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].setAttribute("tabindex", "0"); //Make each element in the array tab-able
    };

    //Set cursor to grab
    document.documentElement.style.cursor = "grab";
}

async function growExperience() {
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
        case "experience":
            return;
        case "contact":
            shrinkContact();
            break;
    };

    //0.6s pause
    await new Promise(resolve => setTimeout(resolve, 1200));

    //Change the page title
    document.title = "Experience and Resume";
    
    //Tell program that home folder is being opened
    currentFolder = "experience";

    //Get home folder coordinates, then apply the animation for each element    
    findExperienceFolder("grow");

    //Set default scales to 0 to avoid visual glitches
    experienceTitle.style.transform = "scale(0)";
    experienceDescription.style.transform = "scale(0)";
    myResume.style.transform = "scale(0)";

    //Animations
    experienceTitle.style.animation = "growAndMoveExperienceTitle 1s forwards"; 
    experienceDescription.style.animation = "growAndMoveExperienceDescription 1s 0.6s forwards"; 
    myResume.style.animation = "growAndMoveMyResume 1s 0.3s forwards"; 

    //Active tabindex for keyboard users
    myResume.children[2].setAttribute("tabindex", "0"); //Add tab index to resume link
}

async function growContact() {
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
        case "experience":
            shrinkExperience();
            break;
        case "contact":
            return;
    };
    //0.6s pause
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    //Change the page title
    document.title = "Contact Me!";

    //Tell program that home folder is being opened
    currentFolder = "contact";

    //Get home folder coordinates, then apply the animation for each element    
    findContactFolder("grow");

    //Set default scales to 0 to avoid visual glitches
    contactTitle.style.transform = "scale(0)";
    contactBox.style.transform = "scale(0)";

    //Animations
    contactTitle.style.animation = "growAndMoveContactTitle 1s forwards";
    contactBox.style.animation = "growAndMoveContactBox 1s 0.4s forwards"; 

    //Active tabindex for keyboard users
     //Form elements
    document.getElementById("nameInput").setAttribute("tabindex", "0");
    document.getElementById("emailInput").setAttribute("tabindex", "0");
    document.getElementById("messageInput").setAttribute("tabindex", "0");
    document.getElementById("submitContactForm").setAttribute("tabindex", "0");
     //Links to contact info
    let contactLinks = document.getElementsByClassName("contactLink"); //Get array of all contact info links
    for (let i = 0; i < contactLinks.length; i++) {
        contactLinks[i].setAttribute("tabindex", "0"); //Make each element in the array tab-able
    };
}

/// Add ondblclick events to each folder ///
homeFolder.ondblclick = growHome;
aboutMeFolder.ondblclick = growAboutMe; //Or the updated grow (any folder) function if I figure out how to do that sooner than later
projectsFolder.ondblclick = growProjects; //Or the updated grow (any folder) function if I figure out how to do that sooner than later
experienceFolder.ondblclick = growExperience;
contactFolder.ondblclick = growContact;

///Add on-enter-press event to each folder for accessibilty///
homeFolder.addEventListener('keydown', (event) => {if (event.key === 'Enter') {growHome();}});
aboutMeFolder.addEventListener('keydown', (event) => {if (event.key === 'Enter') {growAboutMe();}});
projectsFolder.addEventListener('keydown', (event) => {if (event.key === 'Enter') {growProjects();}});
experienceFolder.addEventListener('keydown', (event) => {if (event.key === 'Enter') {growExperience();}});
contactFolder.addEventListener('keydown', (event) => {if (event.key === 'Enter') {growContact();}});

/// Give myName an event that keeps its animation ///
//Temporarily disabled because it's buggy
/*
myName.addEventListener('mouseenter', function () {
    myName.style.animation = "background-pan 2.5s linear infinite"
});

myName.addEventListener('mouseleave', function () {
    myName.style.animation = "none"
});
*/

/// Projects Gallery Scrolling Events ///
let isDragging = false;
let startX = 0;


document.addEventListener('mousedown', (event) => {
    if (currentFolder === "projects") {
        if (event.button === 0) { // Left mouse button
            isDragging = true;
            startX = event.clientX;
            event.preventDefault();// Prevents text selection during drag
            document.documentElement.style.cursor = "grabbing";
        } 
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    if (currentFolder === 'projects') {
        document.documentElement.style.cursor = "grab";
    } else {
        document.documentElement.style.cursor = "auto";
    }
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const deltaX = startX - event.clientX;
    window.scrollBy(deltaX, 0);
    startX = event.clientX;
  }
});

