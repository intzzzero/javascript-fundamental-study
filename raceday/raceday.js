let raceNumber = Math.floor(Math.random() * 1000);
let earlyOrLate = Math.floor(Math.random() * 100);
let runnersAge = Math.floor(Math.random() * 30 + 6);
console.log(`Age: ${runnersAge}`);
earlyOrLate = earlyOrLate >= 50 ? 'Yes' : 'No';

if (runnersAge >= 18 && earlyOrLate === 'Yes') {
  console.log(`Early: ${earlyOrLate}`);
  console.log(`Early adults run at 09:30 am, your race number is ${raceNumber += 1000}.`);
} else if (runnersAge >= 18 && earlyOrLate === 'No') {
  console.log(`Early: ${earlyOrLate}`);
  console.log(`Late adults run at 11:00 am, your race number is ${raceNumber += 1000}.`);
} else {
  console.log(`Youth registrants run at 12:30 pm, your race number is ${raceNumber}`);
}

/*
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.
*/