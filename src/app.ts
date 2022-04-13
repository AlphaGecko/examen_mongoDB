import express from 'express'; 
import config from 'config';
import connect from './helpers/dbMongo/connect';

const app = express();

app.listen(config.get('port'));

connect();
