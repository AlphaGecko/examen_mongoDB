import bcrypt from 'bcrypt';

export default {
    port: 3000,
    dbUri: "mongodb://localhost:27017/sandbox", 
    salt : bcrypt.genSalt(10)
}