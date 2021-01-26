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
// weekly pay
let pay = 0;
// current goal to earn
let earningsGoal = 1000000;
// number of weeks worked
let weeksWorked = 0
// pay based on hours worked
let totalPay = 0;

// calculate pay for regular hours (40hrs and under)
if(hours<=40){
    pay = wage * hours;
}
// otherwise calculate pay including overtime (more than 40 hrs)
else{
    pay = wage * 40 + overtimeWage * overtimeHours;
}

weeklyPaycheckAndWeeksTillEarningGoal(pay);


// function for console.log output that indicates the users weekly pay based on their hours and wage and also tells how long it will take them in weeks to earn their goal 
function weeklyPaycheckAndWeeksTillEarningGoal(pay) {
    console.log(`Total paycheck will be ${pay} if ${hours} are worked at a wage of $${wage} per hour.`);
    while(totalPay < earningsGoal){
        weeksWorked++;
        totalPay = pay*weeksWorked;
    };
    console.log(`It will take this person ${weeksWorked} to earn ${earningsGoal} with their current weekly paycheck.`);
}

    
