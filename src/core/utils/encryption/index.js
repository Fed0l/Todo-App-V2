import bcrypt from 'bcrypt';
import { BCRYPT_CONFIG } from '../../configs/index.js';

// Hashes the input password using bcrypt with configured salt rounds
async function hash(input) {
    try {
        // Generate a salt using the number of rounds specified in the config
        const salt = await bcrypt.genSalt(BCRYPT_CONFIG.rounds);
        // Hash the input using the generated salt
        const hash = await bcrypt.hash(input, salt);
        return hash;  // Return the hashed password
    } catch (error) {
        console.log(error);
        return null;  // Return null if an error occurs
    }
}

// Validates the input password against a hashed password
async function validatHash(input, hash) {
    try {
        // Compare the input password with the stored hash
        const compare = await bcrypt.compare(input, hash);
        return compare;  // Return true if the passwords match, otherwise false
    } catch (error) {
        console.log(error);
        return null;  // Return null if an error occurs
    }
}

export {
    hash,          // Export the hash function for password hashing
    validatHash    // Export the validatHash function for password validation
}