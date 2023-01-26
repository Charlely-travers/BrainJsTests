const Jimp = require('jimp');
const brain = require('brain.js');

Jimp.read('chat.jpg', (err, image) => {
if (err) throw err;

    const chat = image.bitmap.data.map(pixel => pixel / 255);
   
    
    const net = new brain.NeuralNetwork();
    console.log(typeof (chat));
    const trainingData =
        [
            { input: chat, output: [1] }
        ]
   // console.log(trainingData);
//     const stats = net.train(trainingData,
//         {
//         iterations: 1000,
//         errorThresh: 0.0101,
//          log:(stats=>console.log(stats))
//         })
     

// console.log(stats);

// const output = net.run(chat);

// console.log(output); 
});