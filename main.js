/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputEl.value = ""
inputBtn.addEventListener("click", function(e) {
   lengthEl.innerHTML = `${inputEl.value} meters = ${(Number(inputEl.value)* 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(Number(inputEl.value)/ 3.281).toFixed(3)} meters`
   volumeEl.innerHTML = `${inputEl.value} liters = ${(Number(inputEl.value)* 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(Number(inputEl.value)/ 0.264).toFixed(3)} liters`
   massEl.innerHTML = `${inputEl.value} kilos = ${(Number(inputEl.value)* 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(Number(inputEl.value)/ 2.204).toFixed(3)} kilos`
}) 
