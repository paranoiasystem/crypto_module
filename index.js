var bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports.hash = (text) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (error, salt) => {
            if(error) {
                reject(error);
            } else {
                bcrypt.hash(text, salt, (error, hash) => {
                    if(error)
                        reject(error);
                    else
                        resolve(hash);
                });
            }
        });
    });
};

module.exports.compare = (text, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(text, hash, (error, result) => {
            if(error)
                reject(error);
            else
                resolve(result);
        });
    });
};