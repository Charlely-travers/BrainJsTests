var brain = require("brain.js");

const restaurants={
    "Brilliant Yellow Corral":"Monday",
    "Penny's":"Tuesday",
    "Right Coast Wings":"Wednesday",
    "The delusion last railway car":"Thursday",
    "Fun day inn":"Friday",
    "jhop":"Saturday",
    "Owls":"Sunday",
};

const trainingDate=[];

for(let restaurantName in restaurants)
{
    const dayOfWeek=restaurants[restaurantName];
    trainingDate.push({
        input:{[dayOfWeek]:1},
        output:{[restaurantName]:1},
    });
}

const net=new brain.NeuralNetwork({hiddenLayers:[3]});

const stats=net.train(trainingDate);

console.log(stats);

console.log(net.run({'Monday':1}));

function restaurantForDay(dayOfWeek)
{
    const res=net.run({[dayOfWeek]:1});
    let highestValue=0;
    let highestRestaurantName='';
    for(let restauname in res)
    {
        if(res[restauname]>highestValue)
        {
            highestValue=res[restauname];
            highestRestaurantName=restauname;
        }
    }
    return highestRestaurantName;
}

console.log(restaurantForDay('Monday'));
console.log(restaurantForDay('Tuesday'));
console.log(restaurantForDay('Wednesday'));
console.log(restaurantForDay('Thursday'));
console.log(restaurantForDay('Friday'));
console.log(restaurantForDay('Saturday'));
console.log(restaurantForDay('Sunday'));


