const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Todo extends Model {

}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        due_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        is_complete: {
            type: DataTypes.BOOLEAN
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },

    },

    {
        sequelize, 
        freezeTableName: true,
        underscored: true,
        modelName: "todo",
    }
);

module.exports = Todo;

