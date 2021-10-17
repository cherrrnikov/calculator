"use strict";
const inputCalc = document.querySelector(".account");
const inputResult = document.querySelector(".result");

const ONLY_NUMBERS = /^\d+$/;

const input = function (i) {
    if (inputCalc.value === "Dividing by zero is not allowed") {
        inputCalc.value = "";
    }
    if (inputCalc.value == 0) {
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
    inputCalc.value = eval(inputCalc.value);
    inputResult.value = inputCalc.value;

    if (inputCalc.value == Infinity) {
        inputCalc.value = "Dividing by zero is not allowed";
        inputResult.value = "";
    }
    if (inputCalc.value === "undefined") {
        inputCalc.value = "";
        inputResult.value = "";
    }
};
const percent = function () {
    inputCalc.value = eval(inputCalc.value) / 100;
    inputResult.value = inputCalc.value;
};
//Degrees
const toRadians = function (deg) {
    return deg * (Math.PI / 180);
};
const sin = function () {
    inputCalc.value = Math.sin(toRadians(eval(inputCalc.value)));
    inputResult.value = inputCalc.value;
};
const cos = function () {
    if (inputCalc.value === "90") {
        inputCalc.value = "0";
    } else {
        inputCalc.value = Math.cos(toRadians(eval(inputCalc.value)));
    }
    inputResult.value = inputCalc.value;
};
const rad = function () {
    inputCalc.value = toRadians(eval(inputCalc.value));
    inputResult.value = inputCalc.value;
};
const tan = function () {
    inputCalc.value =
        Math.sin(toRadians(eval(inputCalc.value))) /
        Math.cos(toRadians(eval(inputCalc.value)));
    inputResult.value = inputCalc.value;
};
const ctg = function () {
    inputCalc.value =
        Math.cos(toRadians(eval(inputCalc.value))) /
        Math.sin(toRadians(eval(inputCalc.value)));
    inputResult.value = inputCalc.value;
};
//Power functions
const sqr = function () {
    inputCalc.value = eval(inputCalc.value) ** 2;
    inputResult.value = inputCalc.value;
};
const xInMinusOne = function () {
    inputCalc.value = eval(inputCalc.value) ** -1;
    inputResult.value = inputCalc.value;
};
const sqrt = function () {
    inputCalc.value = Math.sqrt(eval(inputCalc.value));
    inputResult.value = inputCalc.value;
};
const lg = function () {
    inputCalc.value = Math.log10(eval(inputCalc.value));
    inputResult.value = inputCalc.value;
};
const ln = function () {
    inputCalc.value = Math.log(eval(inputCalc.value));
    inputResult.value = inputCalc.value;
};
const factorial = function () {
    for (let i = +eval(inputCalc.value) - 1; i >= 1; i--) {
        inputCalc.value *= i;
    }
    inputResult.value = inputCalc.value;
};
