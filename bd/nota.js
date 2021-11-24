module.exports = (sequelize, DataTypes) => {
    const Nota= sequelize.define('Nota',{
        id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        usuarioId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        
    },
    {
        tableName: "note",
        timestamps: false,
    }
    );
    return Nota
}