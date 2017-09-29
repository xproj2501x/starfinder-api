/**
 * Starfinder API - Account
 * ===
 *
 * @module accountModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SCHEMA = mongoose.Schema;
const ACCOUNT = new SCHEMA({
  username: { type: String, unique: true, required: true, dropDups: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now }
});

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default mongoose.model('Account', ACCOUNT);