/* ----------------------- */
/* Person Model
/* ----------------------- */
const person = (sequelize, DataTypes) => {
  const Person = sequelize.define('core_person', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    accounts: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    name: {
      type: DataTypes.JSONB,
    },
    contact: {
      type: DataTypes.JSONB,
    },
    job: {
      type: DataTypes.JSONB,
    },
    location: {
      type: DataTypes.JSONB,
    },
  });

  return Person;
};

export default person;
