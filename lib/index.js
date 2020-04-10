const express = require('express');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

passport.use(new LocalStrategy(
  function(username, password, done) {
    done(null, false, { type: 'warn', message: 'Incorrect password.' });
    // done(null, false, { error: 'Wrong email' }); // Does not work
  }
));


app.use((req, res, next) => {
  req;
  next();
});
app.use(passport.authenticate('local', {
    failureFlash: true
  })
)
app.use((req, res, next) => {
  req;
  next();
});
app.get('/login',
  (req, res) => {
    1+1
  }
);

app.listen(9090);
