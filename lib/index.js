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

app.use( (req, res, next) => {
  res.set('flash', JSON.stringify(req.flash()));
  next();
});

app.get(
  '/login', 
  passport.authenticate('local', {
    failureFlash: true
  }),
  (req, res, next) => res.send('auth successful')
);

app.listen(9090);
