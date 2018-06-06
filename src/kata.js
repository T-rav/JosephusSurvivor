function SurvivorGame() {
  let buildCircle = function(numberOfPeople){
    let result = [];
    
    for(var x = 1; x <= numberOfPeople; x++){
      result.push(x);
    }

    return result;
  }

  return{
    play:function(numberOfPeople, stepSize){
      let circle = buildCircle(numberOfPeople);
      let stepsTaken = 0;
      while(circle.length > 1){
        circle.splice(stepsTaken, 1);
        stepsTaken += stepSize - 1;
      }
      return circle[0];
    }
  }
}
