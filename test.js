var brain = require("brain.js");
const colors=[
    {green:0.2,blue:0.4},
    {green:0.4,blue:0.6},
    {red:0.2,green:0.2,blue:0.4},
    {green:1,blue:1},
    {red:1,green:1,blue:1},
    {red:1,green:0.8,blue:0.8},
    {red:1,green:0.6,blue:0.6},
    {red:0.8},
    {red:0.6,green:0.2,blue:0.2},

];
const brightness=[
    {dark:0.8},
    {neutral:0.8},
    {light:0.7},   
    {light:0.8},  
    {light:0.9},  
    {light:1},   
    {neutral:0.8,light:0.5},
    {dark:0.5,neutral:0.5},
    {dark:0.9},
];

const trainingDate=[];

for(let i=0;i<colors.length;i++)
{
    trainingDate.push({
        input:colors[i],
        output:brightness[i],
    });
}

const net=new brain.NeuralNetwork({hiddenLayers:[3]});

const stats=net.train(trainingDate);

console.log(stats);

console.log(net.run({
    red:1
}));



const invertedTrainingData=[];

for(let i=0;i<colors.length;i++)
{
    invertedTrainingData.push({
        input:brightness[i],
        output:colors[i],
    });
}

const invertedNet=new brain.NeuralNetwork({ hiddenLayers:[3]});

const invertedStats= invertedNet.train(invertedTrainingData);
console.log(invertedStats);

