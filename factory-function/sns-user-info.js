const userInfo = (id, name, image) => {
  return {
    id: id,
    name: name,
    image: image,
    friends: [],
    posts: [],
    addFriend(friend) {
      this.friends.push(friend);
    },
    createPost(post) {
      this.posts.push(post);
    }
  }
}

const newUser = userInfo('codeAmeba', 'Sooyoung Jeong', 'codeameba.jpg');
console.log(newUser.id);
newUser.addFriend('codeMonkey');
console.log(newUser.friends);