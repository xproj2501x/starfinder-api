/**
 * Starfinder API - Encounters Resource
 * ===
 * @module encountersResource
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Encounter from '../models/encounter-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const GET_ENCOUNTER = (req, res) => {
  const ID = req.params.id;

  res.json('GET /encounters/' + ID);
};

const GET_ENCOUNTERS = (req, res) => {
  const ID = req.params.id;

  res.json('GET /encounters');
};

const POST_ENCOUNTER = (req, res) => {
  const ENCOUNTER = new Encounter();

  ENCOUNTER.username = req.body.username;
  ENCOUNTER.password = req.body.password;
  ENCOUNTER.save((err) => {
    if (err) res.send(err);
    res.json(ENCOUNTER);
  });
};

const PUT_ENCOUNTER = (req, res) => {
  const ENCOUNTER = new Encounter();

  ENCOUNTER.username = req.body.username;
  ENCOUNTER.password = req.body.password;
  ENCOUNTER.save((err) => {
    if (err) res.send(err);
    res.json(ENCOUNTER);
  });
};
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export { GET_ENCOUNTER, GET_ENCOUNTERS, POST_ENCOUNTER, PUT_ENCOUNTER };
