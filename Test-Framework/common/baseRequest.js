const axios = require('axios');
axios.default = false;

// this is base request module which will be called by 
// all the api route modules.
// this is generic module that take request inputs and return error or response
// this module uses axios binding (npm package)
const Request = (options) =>
    new Promise((resolve, reject) => {
        axios({
            method : options.method,
            baseURL: options.url,
            validateStatus: false
        })
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    });

module.exports = {Request};    
