/**
 * Starfinder API - Characters Resource
 * ===
 * @module charactersResource
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Character from '../models/character-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const GET_CHARACTERS = (req, res) => {
  Character.find({}, (err, characters) => {
    if (err) res.send(err);
    res.json(characters);
  });
};

const GET_CHARACTER = (req, res) => {
  const ID = req.params.id;

  res.json('GET /characters/' + ID);
};

const POST_CHARACTER = (req, res) => {
  const CHARACTER = new Character();

  CHARACTER.name = req.body.name;

  CHARACTER.save((err) => {
    if (err) res.send(err);
    res.json(CHARACTER);
  });
};

const PUT_CHARACTER = (req, res) => {
  const CHARACTER = new Character();

  CHARACTER.name = req.body.name;

  CHARACTER.save((err) => {
    if (err) res.send(err);
    res.json(CHARACTER);
  });
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export { GET_CHARACTERS, POST_CHARACTER };
