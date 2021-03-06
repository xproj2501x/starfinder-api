/**
 * Starfinder API - Character Model
 * ===
 *
 * @module characterModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const CHARACTERS_TYPE = {
  PLAYER_CHARACTER: 0,
  NON_PLAYER_CHARACTER: 1
};

const CHARACTER_STATUS = {

};

const SCHEMA = mongoose.Schema;
const CHARACTER = new SCHEMA({
  name: { type: String, required: true, dropDupes: true }
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('Character', CHARACTER);
