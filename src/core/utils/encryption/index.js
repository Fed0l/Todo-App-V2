import bcrypt from 'bcrypt';
import { BCRYPT_CONFIG } from '../../configs/index.js';
// hash passwords
async function hash(input){
    try {
        const salt = await bcrypt.genSalt(BCRYPT_CONFIG.rounds);
        const hash = await bcrypt.hash(input, salt);
        return hash;
    } catch (error) {
        console.log(error);
        return null;
    }
}
// validate passwords
async function validatHash(input, hash){
    try {
        const compare = await bcrypt.compare(input, hash)
        return compare;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export{
    hash,
    validatHash
}