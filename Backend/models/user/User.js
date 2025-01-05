const { DataTypes, Sequelize, literal } = require("sequelize");
const sequelize = require("../../helper/db.config");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "This email is already registered",
      },
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: {
        msg: "This Phone Number is already registered",
      },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // isAdmin: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    // },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    loginOtp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    accountActivatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    forgetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    userStatus: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ["Active", "Banned"],
      defaultValue: "Active",
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ["Seller", "Buyer"],
    },
    roles: {
      type: Sequelize.ENUM,
      allowNull: false,
      values: ["Admin", "Super-Admin", "User"],
      defaultValue: "User",
    },
    terms:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = User;
