"use strict";

const inA = document.querySelector(".xsquare");
const inB = document.querySelector(".x");
const inC = document.querySelector(".c");
const signB = document.querySelector("#veOne");
const signC = document.querySelector("#veTwo");
const xOne = document.querySelector("#xOne");
const xTwo = document.querySelector("#xTwo");
const btn = document.querySelector(".submit");
const ans = document.querySelector("#outans");
const err = document.querySelector("#error");
const clr = document.querySelector(".clear");
let imaginary = false;
let valXOne = 0;
let valXTwo = 0;
ans.style.display = "none";

const valueGen = function (positive) {
  const valA = Number(inA.value);
  const valB = Number(inB.value);
  const valC = Number(inC.value);
  let det = valB ** 2 - 4 * valA * valC;
  let detF = 0;
  console.log(valA)
  let outPut = 0;

  if (Math.sign(det) === 1) {
    detF = Math.sqrt(det);
    imaginary = false;
  } else if (Math.sign(det) === -1) {
    detF = Math.sqrt(Math.abs(det));
    imaginary = true;
  } else {
    console.log("wtf");
  }
  // console.log(`det rooted ${detF}`);
  if (positive) {
    outPut = (-valB + detF) / (2 * valA);
  } else {
    outPut = (-valB - detF) / (2 * valA);
  }
  return outPut;
};
btn.addEventListener("click", function () {
  valXOne = valueGen(true).toFixed(4);
  valXTwo = valueGen(false).toFixed(4);
  if (valXOne != 'NaN' && valXTwo != 'NaN') {
    console.log('if')
    ans.style.display = "flex";
    err.style.display = "none";
    if (imaginary) {
      xOne.textContent = `${valXOne} i`;
      xTwo.textContent = `${valXTwo} i`;
    } else if (imaginary === false) {
      xOne.textContent = `${valXOne}`;
      xTwo.textContent = `${valXTwo}`;
    } else {
      console.log("kdf");
    }
  } else {
    console.log('else')
    ans.style.display = "none";
    err.style.display = "block";
  }
  console.log(valXOne, valXTwo);
});
const resizeInput = function () {
  this.style.width = this.value.length + "ch";
};
inA.addEventListener("input", resizeInput);
inB.addEventListener("input", resizeInput);
inC.addEventListener("input", resizeInput);

clr.addEventListener('click', function () {
  inA.value = '';
  inB.value = '';
  inC.value = '';
  err.style.display = 'none';
  ans.style.display = 'none';
})