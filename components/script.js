const input = require("sync-input");

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:");
console.log("");

const gifts = [
  { id: 1, name: "Teddy Bear", cost: 10 },
  { id: 2, name: "Big Red Ball", cost: 5 },
  { id: 3, name: "Huge Bear", cost: 5 },
  { id: 4, name: "Candy", cost: 8 },
  { id: 5, name: "Stuffed Tiger", cost: 15 },
  { id: 6, name: "Stuffed Dragon", cost: 30 },
  { id: 7, name: "Skateboard", cost: 100 },
  { id: 8, name: "Toy Car", cost: 25 },
  { id: 9, name: "Basketball", cost: 25 },
  { id: 10, name: "Scary Mask", cost: 75 },
];
gifts.forEach(function (value) {
  console.log(
    value.id +
      "-" +
      " " +
      value.name +
      " " +
      "Cost:" +
      " " +
      value.cost +
      " " +
      "tickets"
  );
});

console.log("What do you want to do?");

const menu = [
  { id: 1, name: "Buy a gift" },
  { id: 2, name: "Add tickets" },
  { id: 3, name: "Check tickets" },
  { id: 4, name: "Show gifts" },
];
menu.forEach(function (value) {
  console.log(value.id + "-" + value.name);
});

let numberId = input();
switch (numberId) {
  case 1:
    console.log("Enter the number of the gift you want to get");
}
