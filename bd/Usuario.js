module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('Usuario',{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
     
    })
}