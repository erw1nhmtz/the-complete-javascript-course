'use strict';

const timetable = [
    [true, true, true],
    [true, true, true],
    [true, true, true]
];

let newTimetable = [
    [],
    [],
    []
];

const resetNewTimetable = function () {
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

let isEditing = false;

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
                console.log(timetable[i][j]);
                
                const cellValue = timetable[i][j];

                newTimetable[i][j] = !cellValue;
                cell.textContent = getCellText(!cellValue);

                console.log(timetable, newTimetable);
            });
        }
    }
}

const resetEditButton = function () {
    document.querySelector(`.edit`).style.border = `0`;
}

updateTimetable();
updateCells();
addClickEvents();
resetNewTimetable();

document.querySelector(`.edit`).addEventListener(`click`, function () {
    if (isEditing) return;

    isEditing = true;
    document.querySelector(`body`).style.backgroundColor = `rgb(248, 231, 202)`;
    document.querySelector(`.edit`).style.border = `3px solid orange`;
});

document.querySelector(`.discard`).addEventListener(`click`, function() {
    if (!isEditing) return;

    document.querySelector(`body`).style.backgroundColor = `white`;
    resetEditButton();
    resetNewTimetable();
    updateCells();

    isEditing = false;
});

document.querySelector(`.confirm`).addEventListener(`click`, function() {
    if (!isEditing) return;

    document.querySelector(`body`).style.backgroundColor = `white`;
    resetEditButton();

    updateTimetable();
    updateCells();

    isEditing = false;
});