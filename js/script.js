"use strict";
const inputCalc = document.querySelector(".account");
const inputResult = document.querySelector(".result");

const ONLY_NUMBERS = /^\d+$/;
let wasEqual = false;

const calcEqualResult = function () {
    inputResult.value = inputCalc.value;
};

const result = function () {
    wasEqual = true;
    inputCalc.value = eval(inputCalc.value);
    calcEqualResult();

    if (inputCalc.value == Infinity) {
        inputCalc.value = "Dividing by zero is not allowed";
        inputResult.value = "";
    }
    if (inputCalc.value === "undefined") {
        inputCalc.value = "";
        inputResult.value = "";
    }
};

const input = function (i) {
    if (wasEqual === true) {
        inputCalc.value = "";
        inputResult.value = "";
    }
    if (inputCalc.value === "Dividing by zero is not allowed") {
        inputCalc.value = "";
    }
    wasEqual = false;
    inputCalc.value += i;
};
const backspace = function () {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
};
const clean = function () {
    inputCalc.value = "";
    inputResult.value = "";
};

const percent = function () {
    inputCalc.value = eval(inputCalc.value) / 100;
    calcEqualResult();
};
//Degrees
const toRadians = function (deg) {
    return deg * (Math.PI / 180);
};
const sin = function () {
    inputCalc.value = Math.sin(toRadians(eval(inputCalc.value)));
    calcEqualResult();
};
const cos = function () {
    if (inputCalc.value === "90") {
        inputCalc.value = "0";
    } else {
        inputCalc.value = Math.cos(toRadians(eval(inputCalc.value)));
    }
    calcEqualResult();
};
const rad = function () {
    inputCalc.value = toRadians(eval(inputCalc.value));
    calcEqualResult();
};
const tan = function () {
    inputCalc.value =
        Math.sin(toRadians(eval(inputCalc.value))) /
        Math.cos(toRadians(eval(inputCalc.value)));
    calcEqualResult();
};
const ctg = function () {
    inputCalc.value =
        Math.cos(toRadians(eval(inputCalc.value))) /
        Math.sin(toRadians(eval(inputCalc.value)));
    calcEqualResult();
};
//Power functions
const sqr = function () {
    inputCalc.value = eval(inputCalc.value) ** 2;
    calcEqualResult();
};
const xInMinusOne = function () {
    inputCalc.value = eval(inputCalc.value) ** -1;
    calcEqualResult();
};
const sqrt = function () {
    inputCalc.value = Math.sqrt(eval(inputCalc.value));
    calcEqualResult();
};
const lg = function () {
    inputCalc.value = Math.log10(eval(inputCalc.value));
    calcEqualResult();
};
const ln = function () {
    inputCalc.value = Math.log(eval(inputCalc.value));
    calcEqualResult();
};
const factorial = function () {
    for (let i = +eval(inputCalc.value) - 1; i >= 1; i--) {
        inputCalc.value *= i;
    }
    wasEqual = true;
    calcEqualResult();
};
