const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (power) => {
              console.log(`Thank you for your valuable feedback: ${name}- enjoys spending his free time ${activity} while listening to ${music}. The best meal of the day is ${meal} and you often eat ${food}. ${sport} is your favourite sport and your super power is ${power}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});