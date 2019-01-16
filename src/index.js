import uuidv4 from 'uuid/v4';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import models from './models';
import routes from './routes';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use((req,res, next) => {
	//do something
	req.context ={
	  models,
	  me: models.users[1]
	}
	next();
});
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);



app.listen(process.env.PORT, () => 
	console.log(`Example app listening on port $${process.env.PORT}!`),
);

console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);