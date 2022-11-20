import express from 'express';
// import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

// parse JSON request body
app.set('json spaces', 2);
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// api routes
// app.use('/', routes);

export default app;
