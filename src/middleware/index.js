const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_URL,
  });

const adminRequired = (req, res, next) => {
  if (["super-admin", "admin"].some(i => req.auth.payload.userRoles.includes(i))) {
    return next();
  }

  return res.status(403).send('Forbidden');
};

const handleError = (err, req, res, next) => {
    const fallbackErrorMessage = 'Uh oh! Something went wrong.';
    
    if (process.env.NODE_ENV === 'production') {
        res.status(err.status || 500).json({
            message: err.message || fallbackErrorMessage,
          });
    } else {
      console.error(`STATUS ${err.status || 500} ERROR:`, err.message);
      res.status(err.status || 500).json({
        message: err.message || fallbackErrorMessage,
      });
    }
  }  

module.exports = { checkJwt, handleError };