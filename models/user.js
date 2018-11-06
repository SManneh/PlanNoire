module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define('Users', {
     
      name: {
        type: DataTypes.STRING
      },

      phone_number: {
        type: DataTypes.STRING
      },
      email: {
          type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
    },
     user_type: {
        type: DataTypes.STRING
    }
    });
  
    return Users;
  }