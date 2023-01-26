var brain = require("brain.js");

const trainingDate=[
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net=new brain.recurrent.LSTMTimeStep();

net.train(trainingDate,{log:(status) => console.log(status)});

console.log(net.run([1,2,3,4]));
console.log(net.run([5,4,3,2]));

const trainingDate2=[
    [6,7,8,9,10],
    [10,9,8,7,6],
];

const net2=new brain.recurrent.LSTMTimeStep();
net2.train(trainingDate2,{log:(status) => console.log(status)});
console.log(net2.run([6,7,8,9]));
console.log(net2.run([10,9,8,7]));