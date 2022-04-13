import config from 'config';
import mongoose from 'mongoose';
import log from '../logger';
import dayjs from 'dayjs';


async function connect() {
    try {
        await mongoose.connect(config.get("dbUri"));
        log.info("connecte a mongoDB !");
    }
    catch(error){
        log.error(error);
    }
}

export default connect;

