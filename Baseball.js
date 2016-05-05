/*
* Scorecard Constructor
*/
var ScoreCard = function() {
  // this.bases = {
  //   startHome: 'empty',
  //   first: 'empty',
  //   second: 'empty',
  //   third: 'empty',
  //   endHome: 'empty'
  // };

  this.positions = ['empty','empty','empty','empty'];

  this.score = 0;
  this.outs = 0;


}

/*
* A public method accepting the result of an at-bat
* @param {string} entry - The result of an at-bat 
* Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
*/
ScoreCard.prototype.addEntry = function(entry) {
  var startingPositions = this.positions.slice();

  //Single
  if (entry === 'single') {
      if (startingPositions[1] === 'full') {
        this.positions[2] = 'full';
      }
      if (startingPositions[2] === 'full') {
        this.positions[3] = 'full';
        if (startingPositions[1] === 'empty') {
          this.positions[2] = 'empty';
        }
      }
      if (startingPositions[3] === 'full') {
        this.score++;
        if (startingPositions[2] === 'empty') {
          this.positions[3] = 'empty';
        }
      }
    }

  //Double hit
  } else if (entry === 'double') {
    if(startingPositions[1] === 'full') {
      this.positions[3] = 'full';
      this.positions[1] = 'empty';
    }
    if (startingPositions[2] === 'full') {
      this.score++;
    }
    else {
      this.positions[2] = 'full';
    }
    if (startingPositions[3] === 'full') {
      this.score++;
      if(startingPositions[1] === 'empty') {
        this.positions[3] = 'empty';
      }
    }
  } 

  //Tripple hit
  else if (entry === 'triple') {
    if(startingPositions[1] === 'full') {
      this.score++;
      this.positions[1] = 'empty';
    }
    if(startingPositions[2] === 'full') {
      this.score++;
      this.positions[2] = 'empty';
    }
    if(startingPositions[3] === 'full') {
      this.score++;
    }
    else {
      this.positions[3] = 'full';
    }
  } 


  //Homerun
  else if (entry === 'homerun') {
    this.score++;
    if(startingPositions[1] === 'full') {
      this.score++;
      this.positions[1] = 'empty';
    }
    if(startingPositions[2] === 'full') {
      this.score++;
      this.positions[2] = 'empty';
    }
    if(startingPositions[3] === 'full') {
      this.score++;
      this.positions[3] = 'empty';
    }

  } 


  else if (entry === 'out') {
    if(this.outs < 2) {
      this.outs++
    }
    else {
      this.positions[1] = 'empty';
      this.positions[2] = 'empty';
      this.positions[3] = 'empty';
      this.outs = 0;
    }
  } 


}

/*
* A public method returning the current score
* Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
*/
ScoreCard.prototype.getScore = function() {
}