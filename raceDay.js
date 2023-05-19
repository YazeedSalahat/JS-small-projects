let raceNumber = Math.floor(Math.random() * 1000);
let lateRegistration = true;
let runnerAge = 18;
if(runnerAge >= 18 && lateRegistration == false){
  raceNumber += 1000;
}
if(runnerAge > 18 && lateRegistration == false){
  console.log(`you will race at 9:30 ${raceNumber}`);
}else if(runnerAge > 18 && lateRegistration == true){
  console.log(`you will race at 11:00 ${raceNumber}`);
}else if(runnerAge < 18){
  console.log(`you will race at 12:30 ${raceNumber}`);
}else{
  console.log('check with the registration desk please')
}

