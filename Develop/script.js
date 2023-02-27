$(function () {

//variables//

let container = $('#container')
let description = $('<textarea>')
let button = $('<button>')
var hours = {
  nineAm: $('#hour-9'),
  tenAm: $('#hour-10'),
  elevenAm: $('#hour-11'),
  twelvePm: $('#hour-12'),
  onePm: $('#hour-1'),
  twoPm: $('#hour-2'),
  threePm: $('#hour-3'),
  fourPm: $('#hour-4'),
  fivePm: $('#hour-5')
}
var hourText = {
  textNine: $('#text9'),
  textTen: $('#text10'),
  textEleven: $('#text11'),
  textTwelve: $('#text12'),
  textOne: $('#text1'),
  textTwo: $('#text2'),
  textThree: $('#text3'),
  textFour: $('#text4'),
  textFive: $('#text5')
}
//Save data functions//

function readfromStorage() {
var saveData = localStorage.getItem("appointments")
return saveData;
}
function saveTextData(){
  localStorage.setItem("appointments", saveData);
}

function printfromStorage(){
  description.empty();
  var saveData = readfromStorage();
}
function savetoStorage(){
  var inputName = hours.nineAm.description.val();
  var saveData = readfromStorage();
  saveData.push(inputName);
  saveTextData(inputName);
}
hours.nineAm.click(savetoStorage);
console.log(hourText.textTen.value)

//Hour change functions//

let currentHour = dayjs().startOf('hour');
function calendarColor(){
  if (currentHour.isSame(dayjs().hour(09))){
    hours.nineAm.addClass('.present');
    hours.nineAm.remove('.past');
  } else if (currentHour.isAfter(dayjs().hour(09))){
    hours.nineAm.addClass('.past');
    hours.nineAm.remove('.present');
  } else if (currentHour.isBefore(dayjs().hour(09))){
    hours.nineAm.addClass('.future');
    hours.nineAm.remove('.past');
  }
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //Calendar function//

let todaysDate = dayjs();
setInterval(function() {
  let updateDate = $('#currentDay').text(todaysDate.format('MMM D, YYYY hh:mm:ss a'))
}, 1000)
})