function makeFriendsList(friends) {
  var ul = document.createElement('ul');

  for (item of friends) {
    var li = document.createElement('li');
    var textnode = document.createTextNode(item.firstName + " " + item.lastName);
    li.appendChild(textnode);
    ul.appendChild(li);
  }
  return ul;
}