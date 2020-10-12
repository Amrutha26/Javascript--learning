var scoreJohn = (189 + 156 + 178) / 3;
var scoreMike = (134 + 154 + 89) / 3;
var scoreMary = (139 + 95 + 67) / 3;

if((scoreJohn > scoreMike) && (scoreJohn > scoreMary)) {
    console.log("John is the winner with an average score of " + scoreJohn);
} else if((scoreMary > scoreMike) && (scoreMary > scoreJohn)) {
    console.log("Mary is the winner with an average score of " + scoreMary);
} else if((scoreMike > scoreMary) && (scoreMike > scoreJohn)) {
    console.log("Mike is the winner with an average score of " + scoreMike);
} else {
    console.log("The match is a draw");
}
