var brain = require("brain.js");
const trainingData = [

    { input: 'je suis super heureux !', output: 'heureux' },
    { input: 'je suis heureux', output: 'heureux' },
{ input: 'Quel chance!', output: 'sarcastic' },
    { input: 'je suis super triste', output: 'triste' },
    { input: 'je suis triste', output: 'triste' },
{ input: 'je ne suis pas heureux', output: 'triste' },
{ input: 'On est arrive ?', output: 'excitee' }
];

const net = new brain.recurrent.LSTM();
const stats=net.train(trainingData,
    {
        iterations: 1000,
        errorThresh: 0.0110,
        log:(stats=>console.log(stats))
    })

console.log(stats);
console.log(net.run("je suis triste"))
console.log(net.run("je suis heureux"))
console.log(net.run("je suis très triste"))
console.log(net.run("je ne suis pas heureux aujourd'hui"))

    