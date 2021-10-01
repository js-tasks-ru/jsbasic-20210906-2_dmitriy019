function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (item of friends) {
    let li = document.createElement('li');
    // let textnode = document.createTextNode(item.firstName + " " + item.lastName);
    // li.appendChild(textnode);

    // innerHTML works also
    li.innerHTML = item.firstName + " " + item.lastName;
    ul.appendChild(li);
  }
  return ul;
}