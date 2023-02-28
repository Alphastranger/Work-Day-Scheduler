$(function () {

//variables//

let container = $('#container')
let button = $(':button')
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
  textNine: $('#text9').val(),
  textTen: $('#text10').val(),
  textEleven: $('#text11').val(),
  textTwelve: $('#text12').val(),
  textOne: $('#text1').val(),
  textTwo: $('#text2').val(),
  textThree: $('#text3').val(),
  textFour: $('#text4').val(),
  textFive: $('#text5').val()
}
//Save data functions//

// function readfromStorage() {
// var saveData = localStorage.getItem("appointments")
// return saveData;
// }
// function saveTextData(){
// var saveData = localStorage.setItem("appointments", saveData);
//   savetoStorage()
// }

// function printfromStorage(){
//   hourText.textTen.empty();
//   readfromStorage();
// }
// function savetoStorage(){
//   var inputName = hourText.textTen;
//   var saveData = readfromStorage();
//   saveData.push(inputName);
//   saveTextData(inputName);
// }
hours.tenAm.children('button').click(function savetoStorage() {
  localStorage.setItem("appointments", hourText.textTen)
});
function pullFromStorage(){
var saveData = localStorage.getItem("appointments")
hourText.textTen.text(saveData.value);
}
pullFromStorage
// hours.tenAm.children('button').click(function(){
//   alert('hello')
// })

//Test Zone//
console.log(hourText.textTen)

//Hour change functions//

// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

function calendarColor(){
  let currentHour = dayjs().startOf('hour');
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
calendarColor;
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  //Calendar function//

setInterval(function() {
  let todaysDate = dayjs();
  let timeNow =todaysDate.format('MMM D, YYYY hh:mm:ss a')
  $('#currentDay').text(timeNow)
}, 1000)
})