module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define("House", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        loanAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        risk: {
            type: DataTypes.VIRTUAL,
            get() {
                let loanAmount = this.getDataValue('loanAmount')
                let currentValue = this.getDataValue('currentValue')
                let risk = loanAmount / currentValue
                if (loanAmount > currentValue * 0.5) {
                    risk += 0.1
                }

                return Math.min(1, risk)
            }
        }
    });
    return House;
}