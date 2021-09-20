
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [ vasya, petya, masha ];

function namify(users) {
  let names = [];
  for (let user of users) {
    names.push(user.name);
  }
  return names;
}


// let names = namify(users);

// console.log(names);


