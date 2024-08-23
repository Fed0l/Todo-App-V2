import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets/secrets.js';

// sign data and create jwt token
function jwtSign(data){
    const signKeySecret = JWT_SECRET.signKey;
    return jwt.sign(data, signKeySecret,{expiresIn: '7d'});
}

// validate jwt Token can throw error if not match
function jwtValidate(jwtToken){
    try {
        return jwt.verify(jwtToken , JWT_SECRET.signKey);
    } catch (error) {
        console.log(error);
        throw new Error('Invalid JWT Token!')
    }
}

export{
    jwtSign,
    jwtValidate
}

