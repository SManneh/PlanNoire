module.exports = function(sequelize, DataTypes) {
    const Vendors = sequelize.define('Vendors', {
      image: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      vendor_category: {
        type: DataTypes.STRING
      },
      phone_number: {
        type: DataTypes.STRING
      },
      email: {
          type: DataTypes.STRING
      },
      instagram_name: {
        type: DataTypes.STRING
    },
    isApproved: {
      type: DataTypes.BOOLEAN, defaultValue:false
    }

    });
  
    return Vendors;
  }