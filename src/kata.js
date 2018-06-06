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
      let stepsTaken = 1;
      let targetIndex = 0;

      while(stepsTaken < numberOfPeople){
        targetIndex+=stepSize-1;

        if(targetIndex >= circle.length){
          let difference = targetIndex - circle.length;
          targetIndex = difference;
          while(targetIndex >= circle.length){
            targetIndex -= difference;
          }
        }

        circle.splice(targetIndex, 1);

        stepsTaken++;
      }

      return circle[0];
    }
  }
}
