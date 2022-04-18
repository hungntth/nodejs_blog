const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");

const route = require('./routes');
const db = require('./config/db/index');

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("combined"));

app.engine("hbs", exphbs({
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
