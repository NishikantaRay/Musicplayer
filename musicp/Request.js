const request = require('request');
 
_EXTERNAL_URL = 'http://35.240.133.234:8000/splaylist?query=https://www.jiosaavn.com/featured/hindi_chartbusters/u-75xwHI4ks_';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;