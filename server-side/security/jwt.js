const jwt = require("jsonwebtoken");
require('dotenv').config()
const secretValue = process.env.SECRET_VALUE

const secretToken = (student, email) => {
    const token =  jwt.sign(
        { student_id: student_id, email },
        secretValue,
        {
          expiresIn: "2h",
        }
      );
    return  student.token = token;
 }


module.exports ={secretToken}