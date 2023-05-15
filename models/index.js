const User = require("./User");
const Todo = require("./Todo");

User.hasMany(Todo, {
    foreignKey: "user_id",
})

Todo.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

module.exports = {User, Todo};
