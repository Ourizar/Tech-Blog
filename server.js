const express = require('express');
const expressHndbrs = require('express-handlebars');
const sesh = require('express-sessions');
const path =require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/config')
const SequelizeStore = require('connect-session-sequelize')(sesh.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};
  
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });