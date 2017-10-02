import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { GET_CHARACTERS, POST_CHARACTER } from './src/resources/characters-resource';

const MONGOOSE = require('mongoose');
const APP = express();
const PORT = process.env.PORT || 3098;

MONGOOSE.Promise = global.Promise;
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

let db = MONGOOSE.connect('mongodb://localhost:27017/starfinder', options);

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(morgan('dev'));

APP.route('/characters')
  .get(GET_CHARACTERS)
  .post(POST_CHARACTER);

APP.route('*').get((req, res) => {
  res.json({ message: 'success' });
});

APP.listen(PORT);

console.log(`api server started on port ${PORT}`);
