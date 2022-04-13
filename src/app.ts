import express from 'express'; 
import connect from './helpers/dbMongo/connect';
import openRoutes from './routes/open/openRoutes';
import restrictedRoutes from './routes/restricted/restrictedRoutes';
import config from "config";
import log from './helpers/logger';

const app = express();

openRoutes(app);
restrictedRoutes(app);

connect(); 

app.listen(config.get('port'), function() {
    log.info("ok");
});


