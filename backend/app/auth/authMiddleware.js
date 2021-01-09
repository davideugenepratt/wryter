const express = require('express');
const router = express.Router();
const passport = require('passport');

const middleware = function (req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
      req.user = user;
      if (err || !user) {
        res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        });
      } else {
        return next();
      }
    })(req, res, next);
};

// Add protected routes here:
router.all('/api/writing/*', middleware );

module.exports = router;