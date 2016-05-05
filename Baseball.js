/*
* Scorecard Constructor
*/
var ScoreCard = function() {
  // variables that store information for the game
  this.visitorScore = 0;
  this.homeScore = 0;
  // odd inning # is away team, even is home team
  this.innings = 1;
  
  // variables that will reset with each new inning
  this.positions = ['empty','empty','empty','empty'];
  // this.score = 0;
  this.outs = 0;
}

/*
* A public method accepting the result of an at-bat
* @param {string} entry - The result of an at-bat 
* Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
*/
ScoreCard.prototype.addEntry = function(entry) {
  // create a copy of the positions at the beginning of the turn
  var startingPositions = this.positions.slice();

  var atBatScore = 0;
  

  //Single
  if (entry === 'single') {
    // first base
    if (startingPositions[1] === 'full') {
      this.positions[2] = 'full';
    }
    if (startingPositions[1] === 'empty') {
      this.positions[1] = 'full';
    }
    // second base
    if (startingPositions[2] === 'full') {
      this.positions[3] = 'full';
      if (startingPositions[1] === 'empty') {
        this.positions[2] = 'empty';
      }
    }
    // third base
    if (startingPositions[3] === 'full') {
      atBatScore++;
      if (startingPositions[2] === 'empty') {
        this.positions[3] = 'empty';
      }
    }
  }

  //Double hit
  else if (entry === 'double') {
    // first base
    if(startingPositions[1] === 'full') {
      this.positions[3] = 'full';
      this.positions[1] = 'empty';
    }
    // second base
    if (startingPositions[2] === 'full') {
      atBatScore++;
    }
    if (startingPositions[2] === 'empty') {
      this.positions[2] = 'full';
    }
    // third base
    if (startingPositions[3] === 'full') {
      atBatScore++;
      if(startingPositions[1] === 'empty') {
        this.positions[3] = 'empty';
      }
    }
  } 

  //Tripple hit
  else if (entry === 'triple') {
    // first base
    if(startingPositions[1] === 'full') {
      atBatScore++;
      this.positions[1] = 'empty';
    }
    // second base
    if(startingPositions[2] === 'full') {
      atBatScore++;
      this.positions[2] = 'empty';
    }
    // third base
    if(startingPositions[3] === 'full') {
      atBatScore++;
    }
    if (startingPositions[3] === 'empty') {
      this.positions[3] = 'full';
    }
  } 


  //Homerun
  else if (entry === 'homerun') {
    atBatScore++;
    if(startingPositions[1] === 'full') {
      atBatScore++;
      this.positions[1] = 'empty';
    }
    if(startingPositions[2] === 'full') {
      atBatScore++;
      this.positions[2] = 'empty';
    }
    if(startingPositions[3] === 'full') {
      atBatScore++;
      this.positions[3] = 'empty';
    }
  } 

  //Update score with each addEntry event
  if (this.innings % 2 === 0) {
    this.homeScore += atBatScore;
  } else {
    this.visitorScore += atBatScore;
  }
  // need to reset atBatScore with each run of addEntry
  atBatScore = 0;

  //Outs
  if (entry === 'out') {
    if(this.outs < 2) {
      this.outs++;
    }
    else {
      this.positions[1] = 'empty';
      this.positions[2] = 'empty';
      this.positions[3] = 'empty';
      this.outs = 0;
      this.innings++;
    }
  }
};

/*
* A public method returning the current score
* Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
*/
ScoreCard.prototype.getScore = function() {
  return 'Home: ' + this.homeScore + ' Away: ' + this.visitorScore;
};