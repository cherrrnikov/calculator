"use strict";
const inputCalc = document.querySelector(".account");
const inputResult = document.querySelector(".result");

const toRadians = function (deg) {
    return deg * (Math.PI / 180);
};
const input = function (i) {
    if (inputCalc.value === "Dividing by zero is not allowed") {
        inputCalc.value = "";
    }
    inputCalc.value += i;
};
const backspace = function () {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
};
const clean = function () {
    inputCalc.value = "";
    inputResult.value = "";
};
const result = function () {
    inputResult.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
    if (inputCalc.value == Infinity) {
        inputCalc.value = "Dividing by zero is not allowed";
        inputResult.value = "";
    }
    if (inputCalc.value === "undefined") {
        inputCalc.value = "";
        inputResult.value = "";
    }
    console.log(inputResult.value, typeof inputResult.value);
};
const sin = function () {
    inputCalc.value = Math.sin(toRadians(inputCalc.value));
    return Math.sin(toRadians(inputCalc.value));
};
const cos = function () {
    if (inputCalc.value === "90") {
        inputCalc.value = "0";
        return 0;
    } else {
        inputCalc.value = Math.cos(toRadians(inputCalc.value));
        return Math.cos(toRadians(inputCalc.value));
    }
};
const rad = function () {
    inputCalc.value = toRadians(inputCalc.value);
};
const tan = function () {
    inputCalc.value =
        Math.sin(toRadians(inputCalc.value)) /
        Math.cos(toRadians(inputCalc.value));
};
const ctg = function () {
    inputCalc.value =
        Math.cos(toRadians(inputCalc.value)) /
        Math.sin(toRadians(inputCalc.value));
};
