// extended challenges
"use strict";

// hours worked in week
let hours = 50; 
// pay per hour
let wage = 10;
// calculate pay rate for overtime
let overtimeWage = wage*1.5;
// calculate hours of overtime worked
let overtimeHours = hours-40;
// limit for hours before overtime 
let normalHours = 40;
// current goal to earn
let earningsGoal = 1000000;
// number of weeks worked
let weeksWorked = 0
// pay based on hours worked
let totalPay = 0;

// calculate pay for regular hours (40hrs and under)
if(hours<=40){
    let paycheck = wage * hours;
    weeklyPaycheckAndWeeksTillEarningGoal(paycheck);
}
// otherwise calculate pay including overtime (more than 40 hrs)
else{
    let paycheck = wage * normalHours + overtimeWage * overtimeHours;
    weeklyPaycheckAndWeeksTillEarningGoal(paycheck);
}

// function for console.log output that indicates the users weekly pay based on their hours and wage and also tells how long it will take them in weeks to earn their goal 
function weeklyPaycheckAndWeeksTillEarningGoal(paycheck) {
    console.log(`Total paycheck will be ${paycheck} if ${hours} are worked at a wage of $${wage} per hour.`);
    while(totalPay < earningsGoal){
        weeksWorked++;
        totalPay = paycheck*weeksWorked;
    };
    console.log(`It will take this person ${weeksWorked} to earn ${earningsGoal} with their current weekly paycheck.`);
}