var scoreCard = new ScoreCard();

scoreCard.addEntry("homerun");
Test.assertEquals(scoreCard.getScore(), "Home: 0 Away: 1")

scoreCard.addEntry("double");
scoreCard.addEntry("double");
Test.assertEquals(scoreCard.getScore(), "Home: 0 Away: 2")

scoreCard.addEntry("out");
scoreCard.addEntry("out");
scoreCard.addEntry("out");

// change innings
scoreCard.addEntry("homerun");
scoreCard.addEntry("triple");
scoreCard.addEntry("out");
scoreCard.addEntry("single");
scoreCard.addEntry("out");
scoreCard.addEntry("out");
Test.assertEquals(scoreCard.getScore(), "Home: 2 Away: 2")

scoreCard.addEntry("double");
scoreCard.addEntry("triple");
Test.assertEquals(scoreCard.getScore(), "Home: 2 Away: 3")