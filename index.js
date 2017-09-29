import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const APP = express();
const PORT = process.env.PORT || 3098;

APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(morgan('dev'));

APP.route('*').get((req, res) => {
  res.json({ message: 'success' });
});

APP.listen(PORT);

console.log(`api server started on port ${PORT}`);
