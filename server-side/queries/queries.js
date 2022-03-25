// const client = require('pg/lib/native/client');
const { getClient } = require("../database/db");



const processQuery = async (statement, parameters=undefined) => {
  const client = await getClient();

  try {
    const res = parameters?await client.query(statement, parameters):await client.query(statement);
    return res.rows;
  } catch (e) {
    await client.release();
  }
};

const saveStudent = async (values) => {
  const { lastName, firstName,idNumber, email, password } = values;
  let statement = `INSERT INTO student (first_name, last_name,id_number, email, password)  VALUES ($1, $2, $3, $4, $5);`;
  let parameters = [lastName, firstName, idNumber, email, password];
  return await processQuery(statement, parameters);
  
};

const saveAdmin = async (values) => {
  const { lastName, firstName,idNumber, email, password } = values;
  let statement = `INSERT INTO admin (first_name, last_name,id_number, email, password)  VALUES ($1, $2, $3, $4, $5);`;
  let parameters = [lastName, firstName, idNumber, email, password];
  return await processQuery(statement, parameters);
  
};
const checkIfStudentExist = async (email) => {
//  console.log('email', email)
  let statement = "SELECT * FROM student WHERE email=$1" ;
  let parameters = [email];
  const response =  await processQuery(statement,parameters);
 return response
};


const checkIfAdminExist = async (email) => {
  let statement = "SELECT * FROM admin WHERE email=$1" ;
  let parameters = [email];
  const response =  await processQuery(statement,parameters);
 return response
};

const checkIdNumberExist = async (idNumber) => {
  let statement = "SELECT * FROM student WHERE id_number=$1" ;
  let parameters = [idNumber];
  const response =  await processQuery(statement,parameters);
 return response
};

const showAllBooks = async () => {
  let statement = `SELECT * FROM books;`;
  const res = await processQuery(statement);
  return res
  
};


const saveBookRecord = async (body) => {
  const {studentId,bookId}=body
  let statement = `INSERT INTO books_look_up (student_id, book_id)  VALUES ($1, $2);`;
  let parameters = [studentId, bookId];
  const response =  await processQuery(statement,parameters);
 return response
}

// `DELETE FROM student WHERE id in student_id = ${id}`

module.exports = { checkIfStudentExist, saveStudent, saveAdmin, checkIfAdminExist, showAllBooks, saveBookRecord , checkIdNumberExist};
