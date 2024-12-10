'use strict';

//
// VARIABLE DECLARATIONS
//

let isSidebarOpened = true;
// * Change this to set preset selected on page load !!!
let currentPreset = 1;

const btnSidebar = document.querySelector(`.sidebar-button`);
const sidebar = document.querySelector(`.sidebar`);
const btnsPreset = document.querySelectorAll(`.sidebar-btn`);

const canvas = document.querySelector(`.canvas`);
const canvasWidgets = document.querySelectorAll(`.widget`);
const cnvsHeader2 = document.querySelector(`.header2`);

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnYes = document.querySelector(`.yes`);
const btnNo = document.querySelector(`.no`);


//
// FUNCTIONS
//

const init = function () {
    console.table(canvasWidgets);

    selectSidebarButton(currentPreset);
    updateCanvas(currentPreset);
    registerSbBtnsEvents();
}; 

const closeSidebar = function() {
    sidebar.classList.add(`hidden`);
    canvas.classList.remove(`shifted`);
};

const openSidebar = function() {
    sidebar.classList.remove(`hidden`);
    canvas.classList.add(`shifted`);
};

const selectSidebarButton = function(index) {
    for (let i = 0; i < btnsPreset.length; i++) {
        if (i === index-1) btnsPreset[i].classList.add(`selected`);
        else btnsPreset[i].classList.remove(`selected`);
    }
}

const cleanPresetClasses = function(element) {
    for (let i = 0; i < btnsPreset.length; i++) {
        element.classList.remove(`preset-${i+1}`);
    }
};

const updateCanvas = function(preset) {
    if (!preset || (typeof preset) !== `number`) preset = 1;

    for (let i = 0; i < canvasWidgets.length; i++) {
        cleanPresetClasses(canvasWidgets[i]);
        canvasWidgets[i].classList.add(`preset-${preset}`);
    }
};

const registerSbBtnsEvents = function() {
    for (let i = 0; i < btnsPreset.length; i++) {
        if (!btnsPreset[i]) return;

        btnsPreset[i].addEventListener(`click`, function() {
            const preset = i + 1;
            selectSidebarButton(preset);
            updateCanvas(preset);

            currentPreset = preset;
        });
    }
};

const showModal = function() {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
};

const closeModal = function() {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
};


//
// EVENTS 
//

btnSidebar.addEventListener(`click`, function() {
    if (isSidebarOpened) {
        closeSidebar();
        isSidebarOpened = false;
    } else {
        openSidebar();
        isSidebarOpened = true;
    }
});

// hardcoded unfortunately
if (cnvsHeader2) {
    cnvsHeader2.addEventListener(`click`, function() {
        if (currentPreset !== 3) return; 
        showModal();
    });
}

overlay.addEventListener(`click`, closeModal);
btnCloseModal.addEventListener(`click`, closeModal);
btnNo.addEventListener(`click`, closeModal);
btnYes.addEventListener(`click`, function() {
    closeModal();

    document.body.style.animation = `background 0.5s linear 0s infinite normal`;
});

document.addEventListener(`keydown`, function(event) {
    if (event.key === `Escape`) closeModal();
});


//
// INIT
//

init();