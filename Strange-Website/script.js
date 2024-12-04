'use strict';

let isSidebarOpened = true;

const btnSidebar = document.querySelector(`.sidebar-button`);
const sidebar = document.querySelector(`.sidebar`);
const btnPreset1 = document.querySelector(`.preset-1`);
const btnPreset2 = document.querySelector(`.preset-2`);
const btnPreset3 = document.querySelector(`.preset-3`);

const canvas = document.querySelector(`.canvas`);
const lightRed = document.querySelector(`.red-light`);
const lightYellow = document.querySelector(`.yellow-light`);
const lightGreen = document.querySelector(`.green-light`);

const closeSidebar = function() {
    sidebar.classList.add(`hidden`);
    canvas.classList.remove(`shifted`);
};

const openSidebar = function() {
    sidebar.classList.remove(`hidden`);
    canvas.classList.add(`shifted`);
};

const turnTrafficLight = function (rState, yState, gState) {
    if (rState) lightRed.classList.add(`on`);
    else lightRed.classList.remove(`on`);

    if (yState) lightYellow.classList.add(`on`);
    else lightYellow.classList.remove(`on`);

    if (gState) lightGreen.classList.add(`on`);
    else lightGreen.classList.remove(`on`);
}

btnSidebar.addEventListener(`click`, function() {
    if (isSidebarOpened) {
        closeSidebar();
        isSidebarOpened = false;
    } else {
        openSidebar();
        isSidebarOpened = true;
    }
});

btnPreset1.addEventListener(`click`, function() {
    btnPreset2.classList.remove(`selected`);
    btnPreset3.classList.remove(`selected`);

    btnPreset1.classList.add(`selected`);

    turnTrafficLight(true, false, false);
});

btnPreset2.addEventListener(`click`, function() {
    btnPreset1.classList.remove(`selected`);
    btnPreset3.classList.remove(`selected`);

    btnPreset2.classList.add(`selected`);

    turnTrafficLight(false, true, false);
});

btnPreset3.addEventListener(`click`, function() {
    btnPreset1.classList.remove(`selected`);
    btnPreset2.classList.remove(`selected`);
    
    btnPreset3.classList.add(`selected`);

    turnTrafficLight(false, false, true);
});