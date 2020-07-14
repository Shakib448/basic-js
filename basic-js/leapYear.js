function leapYear(year){
    const Year = year % 4;
    if( Year == 0){
        return "This year is leap year.";
    }
    else{
        return "This year is not leap year.";
    }
}

console.log(leapYear(3000));