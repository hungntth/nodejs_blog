const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override')

const route = require('./routes');
const db = require('./config/db/index');

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'))

app.use(morgan("combined"));

app.engine("hbs", exphbs({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
