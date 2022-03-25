const { secretToken } = require("../security/jwt");
const {
  checkIfStudentExist,
  checkIfAdminExist,
  showAllBooks,
  saveBookRecord,
} = require("../queries/queries");
const { secretPasswordCompare } = require("../security/secretPassword");

const myRoutes = (app) => {
  app.post("/login_student", async (req, res) => {
    const { email, password } = req.body;
    try {
      
      const foundStudent = email && (await checkIfStudentExist(email));
      console.log("foundStudent", foundStudent[0]);
      if (!foundStudent) {
        return res.send("password or email is incorrect");
      }

      if (foundStudent[0].email && foundStudent[0].password) {
        const isPasswordCorrect = await secretPasswordCompare(
          password,
          foundStudent[0].password
        );
        if (isPasswordCorrect) {
          const token = secretToken(foundStudent[0]);
          return res.send({ token });
        } else {
          return res.send("password or email is incorrect ");
        }
      }
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/login_admin", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundAdmin = email && (await checkIfAdminExist(email));
      console.log("foundAdmin", foundAdmin[0]);
      if (!foundAdmin) {
        return res.send("password or email is incorrect");
      }

      if (foundAdmin[0].email && foundAdmin[0].password) {
        const isPasswordCorrect = await secretPasswordCompare(
          password,
          foundAdmin[0].password
        );
        if (isPasswordCorrect) {
          const token = secretToken(foundAdmin[0]);
          return res.send({ token });
        } else {
          return res.send("password or email is incorrect ");
        }
      }
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/all_books", async (req, res) => {
    try {
      const books = await showAllBooks();
      console.log("books", books);
      res.send({ data: books }).status(200);
    } catch (error) {
      res.sendStatus(404);
    }
  });

  // app.post("/record", async(req, res)=>{
  //   //if you decide to use email, get the student id with checkIfStudentExist before adding record to db.tbl.books_lookup
  //   const response = await saveRecord(req.body);
  //   console.log('object :>> ', response);
  //   res.send({message:"created",status:201}).status(201);
  // })
};

module.exports = { myRoutes };
