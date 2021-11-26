module.exports = (sequelize, DataTypes) => {
    const checklist = sequelize.define('Checklist',{
        id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
        notaId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        concluida:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
        
    },
    {
        tableName: "checklist",
        timestamps: false,
    }
    );
    return checklist
}