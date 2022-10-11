let message = {
  drinks: [
    'coke',
    'root beer',
    'water',
    'grape juice',
    'limeaide',
    'orange juice',
  ],
  numbers: [1, 2, 3, 4, 5],
  names: ['Kaleb', 'Kirk', 'Jeremiah', 'Keith', 'Davene', 'April', 'Jasmine'],
};

function randomMessage({ drinks, numbers, names }) {
  let randomDrink = Math.floor(Math.random() * drinks.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomName = Math.floor(Math.random() * names.length);

  const messageString = `${message.names[randomName]} grabbed ${message.numbers[randomNumber]} ${message.drinks[randomDrink]}(s) off of the wall!`;

  return messageString;
}

console.log(randomMessage(message));
