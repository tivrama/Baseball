var ScoreCard = {
  this.scores = {
    'visitor': 0,
    'home': 0
  };
  this.bases = [0,0,0,0];
  this.atBat = 'visitor';
  this.outs = 0;
};

ScoreCard.prototype.addEntry = function(play) {
  // for any type of hit, add a 1 at the beginning and pop off the ending
  if (play !== 'out') {
    this.bases.unshift(1);
    this.scores[this.atBat] += this.bases.pop();
  };

  // make a key to translate play into a number
  var numberOfBases = {
    'double': 2,
    'triple': 3,
    'homerun': 4
  };

  // for doubles, triples, and homeruns, keep adding 0's at the beginning and popping off the ending the appropriate number of times
  for (var i = 1; i < numberOfBases[play]; i++) {
    this.bases.unshift(0);
    this.scores[this.atBat] += this.bases.pop();
  }

  // for outs
  if (play === 'out') {
    this.outs++;
    if (this.outs === 3) {
      this.bases = [0,0,0,0];
      this.outs = 0;
      if (this.atBat === 'visitor') {
        this.atBat = 'home';
      } else {
        this.atBat = 'visitor';
      }
    };
  };
};