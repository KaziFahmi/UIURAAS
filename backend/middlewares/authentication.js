const admin = require('firebase-admin');

const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).send('Unauthorized');
    }
  
    const idToken = header.split('Bearer ')[1];
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error('Error while verifying Firebase ID token:', error);
      return res.status(401).send('Unauthorized');
    }
  };

module.exports = authMiddleware;