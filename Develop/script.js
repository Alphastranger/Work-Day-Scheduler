$(function () {

//variables//

var hours = []
  hours[0] = $('#hour-9'),
  hours[1] = $('#hour-10'),
  hours[2] = $('#hour-11'),
  hours[3] = $('#hour-12'),
  hours[4] = $('#hour-1'),
  hours[5] = $('#hour-2'),
  hours[6] = $('#hour-3'),
  hours[7] = $('#hour-4'),
  hours[8] = $('#hour-5')

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

console.log(hourText.textTen)
hours[0].children('button').click(function savetoStorage() {
  var nineEl = document.getElementById('text9');
  var inputEl = nineEl.value
  localStorage.setItem("9:00 AM", inputEl)
});
hours[1].children('button').click(function savetoStorage() {
  var tenEl = document.getElementById('text10');
  var inputEl = tenEl.value
  localStorage.setItem("10:00 AM", inputEl)
});
hours[2].children('button').click(function savetoStorage() {
  var elevenEl = document.getElementById('text11');
  var inputEl = elevenEl.value
  localStorage.setItem("11:00 AM", inputEl)
});
hours[3].children('button').click(function savetoStorage() {
  var twelveEl = document.getElementById('text12');
  var inputEl = twelveEl.value
  localStorage.setItem("12:00 PM", inputEl)
});
hours[4].children('button').click(function savetoStorage() {
  var oneEl = document.getElementById('text1');
  var inputEl = oneEl.value
  localStorage.setItem("1:00 PM", inputEl)
});
hours[5].children('button').click(function savetoStorage() {
  var twoEl = document.getElementById('text2');
  var inputEl = twoEl.value
  localStorage.setItem("2:00 PM", inputEl)
});
hours[6].children('button').click(function savetoStorage() {
  var threeEl = document.getElementById('text3');
  var inputEl = threeEl.value
  localStorage.setItem("3:00 PM", inputEl)
});
hours[7].children('button').click(function savetoStorage() {
  var fourEl = document.getElementById('text4');
  var inputEl = fourEl.value
  localStorage.setItem("4:00 PM", inputEl)
});
hours[8].children('button').click(function savetoStorage() {
  var fiveEl = document.getElementById('text5');
  var inputEl = fiveEl.value
  localStorage.setItem("5:00 PM", inputEl)
});
function pullFromStorage(){
  var nineEl = document.getElementById('text9');
  var tenEl = document.getElementById('text10');
  var elevenEl = document.getElementById('text11');
  var twelveEl = document.getElementById('text12');
  var oneEl = document.getElementById('text1');
  var twoEl = document.getElementById('text2');
  var threeEl = document.getElementById('text3');
  var fourEl = document.getElementById('text4');
  var fiveEl = document.getElementById('text5');
var saveData9 = localStorage.getItem('9:00 AM')
var saveData10 = localStorage.getItem("10:00 AM")
var saveData11 = localStorage.getItem("11:00 AM")
var saveData12 = localStorage.getItem("12:00 PM")
var saveData13 = localStorage.getItem("1:00 PM")
var saveData14 = localStorage.getItem("2:00 PM")
var saveData15 =localStorage.getItem("3:00 PM")
var saveData16 = localStorage.getItem("4:00 PM")
var saveData17 =localStorage.getItem("5:00 PM")
console.log(saveData10)
nineEl.innerHTML=saveData9;
tenEl.innerHTML=saveData10;
elevenEl.innerHTML=saveData11;
twelveEl.innerHTML=saveData12;
oneEl.innerHTML=saveData13;
twoEl.innerHTML=saveData14;
threeEl.innerHTML=saveData15;
fourEl.innerHTML=saveData16;
fiveEl.innerHTML=saveData17;
}
pullFromStorage()
// hours.tenAm.children('button').click(function(){
//   alert('hello')
// })

//Test Zone//


//Hour change functions//

// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// $('.time-block').each(function() {
//   var blockHour = parseInt($(this).attr('id'.split('-')[1]))
// })
function calendarColor(){
  let currentHour = dayjs().hour();
  console.log(currentHour)
  $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1])
  })
  for (i=0; i<hours.length; i++){
    var blockHour = parseInt(hours[i].attr('id').split('-')[1])
  if (currentHour === blockHour){
    hours[i].addClass('.present');
    hours[i].remove('.past');
  } else if (currentHour>blockHour){
    hours[i].addClass('.past');
    hours[i].remove('.present');
  } else if (currentHour<blockHour){
    hours[i].addClass('.future');
    hours[i].remove('.past');
  }
}
}
calendarColor();
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