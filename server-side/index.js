const express = require("express");
const app = express();
const cors = require("cors");
const { registrationAuth } = require("./auth/auth");
const {myRoutes} = require('./auth/routes')
require("dotenv").config();

app.use(express.json());
app.use(cors());

registrationAuth(app);
myRoutes(app);

let port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on port ${port}!`));