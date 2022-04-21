const User = require("./models/User");

const user = new User(1,"erodriguez", "Esteban", "bio", new Date());

console.log(user);

user.seDateUpadated = new Date();

console.log(user);