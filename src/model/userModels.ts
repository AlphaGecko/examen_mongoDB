import config from 'config';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userDocument from '../interfaces/userInterface';
import log from '../helpers/logger';

const userSchema = new mongoose.Schema();

userSchema.pre("save", async function(next: any) {
    let user = this as userDocument;

    if (!user.isModified("password")) {
        return next();
    }

    let hashedPassword = await bcrypt.hash(user.password, config.get("salt")); 
    user.password = hashedPassword;
});

userSchema.pre("save", async function(next: any) {
    let user = this as userDocument;

    if (!user.isModified("password")) {
        return next();
    }

    let hashedPassword = await bcrypt.hash(user.password, config.get("salt")); 
    user.password = hashedPassword;
});

userSchema.methods.comparePasswords = async function(password:string):Promise<boolean> {

	let user = this as userDocument;

    bcrypt.compare(password, user.password, function(err, result) {
        if (result)
        {
            log.info('le bon mot de passe a été rentrée');
        }
        else 
        {
            log.info('mot de passe érroné : ' + err);
        }
    });

    return false;
}


const userModel = mongoose.model("user", userSchema);
export default userModel;