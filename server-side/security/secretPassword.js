const bcrypt = require('bcrypt')

const secretePassword = async (password) => {
    try {
      let hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    } catch (error) {
      return error;
    }
  };

  const secretPasswordCompare = async (password,hashedPassword) => {
    try {
      let matchPassword = await bcrypt.compare(password,hashedPassword);
      console.log('matchPassword :>> ', matchPassword);
      return matchPassword;
    } catch (error) {
      console.log(error);
    }
  };
  
  
  module.exports = { secretePassword, secretPasswordCompare };
