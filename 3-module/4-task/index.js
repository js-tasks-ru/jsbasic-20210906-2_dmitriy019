function showSalary(users, age) {
  // return users.map(function (item, index) {
  //   return (item.age <= age ? ((index > 0 ? '\n' : '') +  item.name + ', ' + item.balance) : "");
  // }).join("");
  let youngerUsers = users.filter(item => item.age <= age);
  let usersString = (youngerUsers.map(item => item.name + ', ' + item.balance)).join("\n");
  return usersString;
}
/*
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user2 = {
  "balance": "$2,825.65",
  "picture": "https://placehold.it/42x42",
  "age": 31,
  "name": "Branch",
  "gender": "female",
  "greeting": "You have 7 unread messages.",
  "favouriteFruit": "apple"
};
let user3 = {
  "balance": "3,825.65",
  "picture": "https://placehold.it/52x52",
  "age": 41,
  "name": "Golden",
  "gender": "male",
  "greeting": "Hello, Golden!",
  "favouriteFruit": "orange"
};

let users = [user1, user2, user3];

console.log(showSalary(users, 40));
*/