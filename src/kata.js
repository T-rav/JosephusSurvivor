function SurvivorGame() {
  let buildCircleOfPeople = function(numberOfPeople){
    let result = [];
    
    for(var x = 1; x <= numberOfPeople; x++){
      result.push(x);
    }

    return result;
  }

  return{
    play:function(numberOfPeople, stepSize){
      let circleOfPeople = buildCircleOfPeople(numberOfPeople);
      let eliminationRounds = 1;
      let eliminationIndex = 0;
      let gameStepSize = stepSize - 1;

      while(eliminationRounds < numberOfPeople){
        eliminationIndex = calculateEliminationIndex(eliminationIndex, gameStepSize, circleOfPeople);
        eliminatePerson(circleOfPeople, eliminationIndex);
        eliminationRounds++;
      }

      return circleOfPeople[0];
    }
  }

  function eliminatePerson(circleOfPeople, eliminationIndex) {
    circleOfPeople.splice(eliminationIndex, 1);
  }

  function calculateEliminationIndex(targetIndex, gameStepSize, circleOfPeople) {
    return (targetIndex + gameStepSize) % circleOfPeople.length;
  }
}
