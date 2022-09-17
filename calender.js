//variables for datepicker
var datepicker =  document.getElementById('datepicker');
var choseDate =  documen.getElementById('choseDate');

//variables for printing values'

var ageYear =  document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays  = document.getElementById('ageDays');
var ageHours = document.getElementById('getHours');
var ageMin = document.getElementById('ageMin');
var ageSec = document.getElementById('ageSec');
var ageMs =  document.getElementById('ágeMs');

datepicker.addEventListener('change',function(){

    var options ={year:'numberic',month:'long',day:'numeric'};
    var selectedDate =  new Date(this.value);
    var DOB = selectedDtae.toLocaleDateString('en_ZA',options);

    choseDate.innerHTML = "DOB: " + " " + DOB;
    var millSec_Btw_DOB =  Date.parse(DOB);
    var millSec_Btw_Now = Date.now();

    var age_in_MiliSeconds = millSec_Btw_Now -millSec_Btw_DOB;
    var miliSeconds = age_in_MiliSeconds;
    var second = 1000;
    var minute = second *60;
    var hour = minute*60;
    var day = hour*24;
    month = day*30;
    var year = day*365;



    //here I am doing the logic or the calculations
    var years = Math.round(miliSeconds/year);
    var months = years*12;
    var days =  years*365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);

    //Printing the values

    ageYear.innHTML = years;
    ageMonth.innHTML = months
    ageDays.innHTML = days
    ageHours.innHTML = hours
    ageSec.innHTML = seconds
    ageMs.innHTML = miliSeconds

})

