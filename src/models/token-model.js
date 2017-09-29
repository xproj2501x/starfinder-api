/**
 * Starfinder API - Token Model
 * ===
 *
 * @module tokenModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SCHEMA = mongoose.Schema;
const TOKEN = new SCHEMA({
  userId: { type: String, required: true },
  token: { type: String, required: true }
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('Token', TOKEN);