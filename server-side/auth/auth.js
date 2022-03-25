const { secretePassword } = require("../security/secretPassword");
const {
  saveStudent,
  saveAdmin,
  checkIfStudentExist,
  checkIfAdminExist,
  checkIdNumberExist
} = require("../queries/queries");
const { secretToken } = require("../security/jwt");
require("dotenv").config();

const registrationAuth = (app) => {
  app.post("/register_student", async (req, res) => {
    try {
      const {
        lastName,
        firstName,
        email,
        idNumber,
        password,
        confirmPassword,
      } = req.body;

      console.log('object :>> ', req.body);
      let emailCheck =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let oldStudent = email && (await checkIfStudentExist(email));
      let hashedPassword = await secretePassword(password);
      let identityCheck = await checkIdNumberExist(idNumber);

      console.log('object :>> ', oldStudent);
      student = {
        lastName,
        firstName,
        email,
        idNumber,
        password: hashedPassword,
      };

      if (!(email.toLowerCase().match(emailCheck))) {
        return res.send("enter correct email address format").status(401);
      }
      if ((lastName, firstName, email, idNumber, password) == null) {
        return res.sendStatus(404);
      } else if (oldStudent.length > 0) {
        return res.send({ message: "User already exist" }).status(400);
      } else if (identityCheck.length > 0) {
        return res.send({ message: "Id number already exist" }).status(400);
      } else if (password !== confirmPassword) {
        return res.send({ message: "Password did not match" });
      } else {
        const student_id = await saveStudent(student);
        res.send({ data: student_id, status: 201 });
        const token = secretToken(student_id);
        return res.send({ error: null, token: token });
      }
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  app.post("/register_admin", async (req, res) => {
    try {
      const {
        lastName,
        firstName,
        idNumber,
        email,
        password,
        confirmPassword,
      } = req.body;
      let oldAdmin = email && (await checkIfAdminExist(email));

      let hashedPassword = await secretePassword(password);
      admin = {
        lastName,
        firstName,
        idNumber,
        email,
        password: hashedPassword,
      };

      // console.log("oldStudent :>> ", oldStudent);

      // console.log("tumi ", admin);
      if ((lastName, firstName, email, idNumber, password) == null) {
        return res.sendStatus(404);
      } else if (oldAdmin.length > 0) {
        return res.send({ message: "Admin already exist" }).status(400);
      } else if (password !== confirmPassword) {
        return res.send({ message: "Password did not match" });
      } else {
        const admin_id = await saveAdmin(admin);
        res.send({ data: admin_id, status: 201 });
        const token = secretToken(admin_id);
        return res.send({ error: null, token: token });
      }
    } catch (e) {
      res.sendStatus(500);
    }
  });
};

module.exports = { registrationAuth };
