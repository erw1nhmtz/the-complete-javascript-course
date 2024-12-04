'use strict';

const timetable = [
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true],
    [true, true, true, true, true, true]
];
let newTimetable = [
    [],
    [],
    [],
    []
];
let isEditing = false;

const fillNewTimetable = function () {
    for (let i = 0; i < timetable.length; i++) {
        for (let j = 0; j < timetable[i].length; j++) {
            newTimetable[i][j] = timetable[i][j];
        }
    }
}

const updateTimetable = function () {
    for (let i = 0; i < newTimetable.length; i++) {
        for (let j = 0; j < newTimetable[i].length; j++) {
            timetable[i][j] = newTimetable[i][j];
        }
    }
}

const getCellText = function (value) {
    return value ? `✅` : `⛔`;
}

const updateCells = function () {
    for (let i = 0; i < timetable.length; i++) {
        for (let j = 0; j < timetable[i].length; j++) {
            // Set initial values
            const cell = document.querySelector(`.g${i}-h${j}`);
            cell.textContent = getCellText(timetable[i][j]);
        }
    }
}

const addClickEvents = function () {
    for (let i = 0; i < timetable.length; i++) {
        for (let j = 0; j < timetable[i].length; j++) {
            const cell = document.querySelector(`.g${i}-h${j}`);
            cell.addEventListener(`click`, function () {
                if (!isEditing) return;

                // const cellValue = timetable[i][j];

                const cellValue = cell.textContent === '✅' ? true : false;
                newTimetable[i][j] = !cellValue;
                cell.textContent = getCellText(!cellValue);

                console.log(cellValue);
                console.log(timetable, newTimetable);
            });
        }
    }
}

const resetEditButton = function () {
    document.querySelector(`.edit`).style.border = `0`;
}

const showModal = function () {
    document.querySelector(`.modal`).classList.remove(`hidden`);
    document.querySelector(`.overlay`).classList.remove(`hidden`);
}

const hideModal = function () {
    document.querySelector(`.modal`).classList.add(`hidden`);
    document.querySelector(`.overlay`).classList.add(`hidden`);
}

updateCells();
addClickEvents();
fillNewTimetable();

document.querySelector(`.edit`).addEventListener(`click`, function () {
    if (isEditing) return;

    isEditing = true;
    document.querySelector(`body`).style.backgroundColor = `rgb(248, 231, 202)`;
    document.querySelector(`.edit`).style.border = `3px solid orange`;
});

document.querySelector(`.discard`).addEventListener(`click`, function() {
    if (!isEditing) return;

    document.querySelector(`body`).style.backgroundColor = `white`;
    fillNewTimetable();
    resetEditButton();
    updateCells();

    isEditing = false;
});

document.querySelector(`.confirm`).addEventListener(`click`, function() {
    if (!isEditing) return;

    showModal();
});

document.querySelector(`.yes`).addEventListener(`click`, function() {
    hideModal();
    
    document.querySelector(`body`).style.backgroundColor = `white`;
    resetEditButton();

    updateTimetable();
    updateCells();

    isEditing = false;
});

document.querySelector(`.no`).addEventListener(`click`, function() {
    hideModal();
});

document.querySelector(`.close-modal`).addEventListener(`click`, function () {
    hideModal();
});

document.querySelector(`.overlay`).addEventListener(`click`, function() {
    hideModal();
});

// * GLOBAL EVENT
document.addEventListener(`keydown`, function(event) {
    const modal = document.querySelector(`.modal`);
    const overlay = document.querySelector(`.overlay`);

    if (event.key === `Escape`) {
        if (!modal.classList.contains(`hidden`) ||
            !modal.classList.contains(`hidden`)) {
            hideModal();
        }
    }
});