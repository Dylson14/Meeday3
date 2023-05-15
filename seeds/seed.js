const sequelize = require("../config/connection");
const { User, Todo } = require("../models");

const userData = require("./userData.json");
const todoData = require("./todoData.json");

const seedDatabase = async () => { 
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
        individualHooks: true, 
        returning: true,
    });

    for(const todo of todoData){
        await Todo.create({
            ...todo,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();