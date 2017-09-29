/**
 * Starfinder API - Accounts Resource
 * ===
 * @module accountsResource
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Account from '../models/account-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const GET_ACCOUNT = (req, res) => {
  const ID = req.params.id;

  res.json('GET /accounts/' + ID);
};

const POST_ACCOUNT = (req, res) => {
  const ACCOUNT = new Account();

  ACCOUNT.username = req.body.username;
  ACCOUNT.password = req.body.password;
  ACCOUNT.save((err) => {
    if (err) res.send(err);
    res.json(ACCOUNT);
  });
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export { GET_ACCOUNT, POST_ACCOUNT };
