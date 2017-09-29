/**
 * Starfinder API - Constants
 * ===
 * Contains immutable values that are application specific.
 * @module constants
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * API request methods
 * @enum {string}
 */
export const API_METHODS = {
  DELETE: 'DELETE',
  GET: 'GET',
  HEAD: 'HEAD',
  PATH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT'
};

/**
 * API response codes
 * @enum {string}
 */
export const API_RESPONSE_CODES = {
  OKAY: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

////////////////////////////////////////////////////////////////////////////////
// Modules
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Environment
////////////////////////////////////////////////////////////////////////////////