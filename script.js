var numA = document.querySelector('#input__a');
var numB = document.querySelector('#input__b');
let calcButton = document.getElementById('calcButton');
const resultSumNumbers = document.getElementById('result__sum');
const resultSubAB = document.getElementById('result__sub__ab');
const resultSubBA = document.getElementById('result__sub__ba');
const resultMultiplyNumbers = document.getElementById('result__multiply');
const resultDivNumbersAB = document.getElementById('result_div__ab');
const resultDivNumbersBA = document.getElementById('result_div__ba');
const resultPotencAB = document.getElementById('result_potenc__ab');
const resultPotencBA = document.getElementById('result_potenc__ba');
const resultFromSqrtFromA = document.getElementById('result__raizquad__a');
const resultFromSqrtFromB = document.getElementById('result__raizquad__b');
const resultFactorialFromA = document.getElementById('result__fact__a');
const resultFactorialFromB = document.getElementById('result__fact__b');
const resultPercentAB = document.getElementById('result__percent__ab');
const resultPercentBA = document.getElementById('result__percent__ba');
const resultMediaFromAB = document.getElementById('result__media');


function calcResults() {
  sumNumbers();
  subNumbersAB();
  subNumbersBA();
  multiplyNumbers();
  divNumbersAB();
  divNumbersBA();
  potNumbersAB();
  potNumbersBA();
  sqrtFromA();
  sqrtFromB();
  factorialFromA();
  factorialFromB();
  percentAinB();
  percentBinA();
  calcMedia();
}

function sumNumbers() {
    const resultSum = parseInt(numA.value) + parseInt(numB.value);
    resultSumNumbers.textContent = resultSum;
}

function subNumbersAB() {
  const resultSub = parseInt(numA.value) - parseInt(numB.value);
  resultSubAB.textContent = resultSub;
}

function subNumbersBA() {
  const resultSub = parseInt(numB.value) - parseInt(numA.value);
  resultSubBA.textContent = resultSub;
}

function multiplyNumbers() {
  const resultMultiply = parseInt(numA.value) * parseInt(numB.value);
  resultMultiplyNumbers.textContent = resultMultiply;
}

function divNumbersAB () {
  const resultDivAB = parseInt(numA.value) / parseInt(numB.value);
  resultDivNumbersAB.textContent = resultDivAB.toFixed(2);
}

function divNumbersBA () {
  const resultDivBA = parseInt(numB.value) / parseInt(numA.value);
  resultDivNumbersBA.textContent = resultDivBA.toFixed(2);
}

function potNumbersAB(){ 
  const resultPotNumbersAB = Math.pow(numA.value, numB.value);
  resultPotencAB.textContent = resultPotNumbersAB;
}

function potNumbersBA(){ 
  const resultPotNumbersBA = Math.pow(numB.value, numA.value);
  resultPotencBA.textContent = resultPotNumbersBA;
}

function sqrtFromA(){
  const resultSqrtFromA = Math.sqrt(numA.value);
  resultFromSqrtFromA.textContent = resultSqrtFromA.toFixed(2);
}

function sqrtFromB(){
  const resultSqrtFromB = Math.sqrt(numB.value);
  resultFromSqrtFromB.textContent = resultSqrtFromB.toFixed(2);
}

function factorialFromA() {
  let resultFromFactorialA = 1;
  for(let i = 1; i <= numA.value;  i++) {
    resultFromFactorialA *= i;
  }
  return resultFactorialFromA.textContent =  parseFloat(resultFromFactorialA);
  console.log(resultFromFactorialA);
}

function factorialFromB(){
  let resultFromFactorialB = 1;
  for(let i = 1; i <= numB.value; i++) {
    resultFromFactorialB *= i;
  }
  return resultFactorialFromB.textContent = resultFromFactorialB;
}

function percentBinA() {
  const resultPercentBinA = (numB.value / numA.value) * 100;
  resultPercentBA.textContent = Math.round(resultPercentBinA) + '%';
}

function percentAinB() {
  const resultPercentAinB = (numA.value / numB.value) * 100;
  resultPercentAB.textContent = resultPercentAinB + '%';
}

function calcMedia() {
  const resultMedia = (parseFloat(numA.value) + parseFloat(numB.value) ) / 2;
  resultMediaFromAB.textContent = resultMedia;
}


