var argv = require('yargs').argv;
var colors = require("colors/safe");

var Problem = require("../problems/heart");

console.log(colors.white("Heart tests"));
console.log("---");

argv.i = argv.i || 1;
argv.j = argv.j || 1;
argv.k = argv.k || 1;

var problem = new Problem({
    problemNumber: argv.i,
    backpropagationIterations: Math.pow(argv.k, 2),
    informationGainTrainIterations: 10 * Math.pow(argv.j, 2),
    lazyTrainInnerTrainIterations: Math.pow(argv.j, 2),
    lazyTrainMaximumTries: Math.pow(argv.j, 2),
    datasetFile: "../resources/heart.csv"
});
problem.solve();