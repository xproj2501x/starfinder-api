/**
 * Starfinder API - Token Resource
 * ===
 * @module tokenResource
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { API_RESPONSE_CODES } from '../constants';
import createUUID from '../utility/uuid';
import Account from '../models/account-model';
import Token from '../models/token-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const POST_TOKEN = (req, res) => {
  const USERNAME = req.header('username');
  const PASSWORD = req.header('password');

  Account.findOne({
    username: USERNAME
  }, (err, account) => {
    if (err) res.send(err);
    if (account) {
      if (PASSWORD === account.password) {
        const TOKEN = new Token();

        TOKEN.userId = account._id;
        TOKEN.token = createUUID();
        TOKEN.save((err, token) => {
          if (err) res.send(err);
          res.json({ TOKEN: TOKEN.token });
        });
      } else {
        res.statusCode = API_RESPONSE_CODES.UNAUTHORIZED;
        res.json({ message: 'invalid login' });
      }
    } else {
      res.json({message: 'account not found'});
    }
  });
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export { POST_TOKEN };
