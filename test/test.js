function calculateDaysBetweenDates(begin, end) {    
    var beginDate = new Date(begin);    
    var endDate = new Date(end);    
    var days = (endDate - beginDate) / (1000 * 60 * 60 * 24);    
    return days;
}

// Path: src\test.js

// ask user for input on today's date and a date in the past

var today = prompt("Enter today's date in the format mm/dd/yyyy");
var past = prompt("Enter a date in the past in the format mm/dd/yyyy");
var days = calculateDaysBetweenDates(today, past);
alert("There are " + days + " days between " + today + " and " + past);

