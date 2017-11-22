const fruits = ['apple', 'pear', 'cherry'];
//For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//forEach
fruits.forEach(fruit => {
  console.log(fruit);
});

let capitalizedFruits = [];
fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});
console.log(capitalizedFruits);

const prices = [6.75, 3.10, 4.00, 8.12];
let total = 0;
prices.forEach(price => {
  total += price;
});
console.log(total);

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin']; // Result: ['Selma', 'Sam', 'Sharon'];

names.forEach(name => {
  if (name[0] === 'S') {
    console.log(name);
  }
});
//OR
let sNames = [];
names.forEach(name => {
  if (name.charAt(0) === 'S') {
    sNames.push(name);
  }
});
console.log(sNames);
//OR
names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
