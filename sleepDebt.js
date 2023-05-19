const getSleepHours = day =>{
    day = day.toLowerCase();
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 6;
        break;
    }
  };
  
  const getActualSleepHours = () =>{
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  
  const getIdealSleepHours = () =>{
    const idealHours =7;
    return idealHours*7;
  };
  
  const calcualteSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const debt = idealSleepHours - actualSleepHours;
    if(actualSleepHours === idealSleepHours){
      console.log('The user got perfect sleep!');
      console.log(`The sleeping hours you had are ${debt}`);
    }else if(actualSleepHours > idealSleepHours){
      console.log('The user got more sleep than needed!');
      console.log('The sleeping hours you overslept are ' + debt*-1);
    }else if(actualSleepHours < idealSleepHours){
      console.log('The user should get some rest!');
      console.log(`The sleeping hours you need are ${debt}`);
    }
  
  };
  calcualteSleepDebt();