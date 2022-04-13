import config from 'config';
import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect(config.get("dbUri"));
    console.log("connecté à mongoDB !");
}

export default connect;

