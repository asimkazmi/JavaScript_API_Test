const {Request} = require ('../../common/baseRequest.js');

const Get_healthCheck = testData =>
    new Promise( (resolve, reject) => {

        var options = {
            method: 'get',
            url: testData,
            resolveWithFullResponse: true           
        };

        Request(options)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (err) {
            reject(err);
            console.log("Error Inside Get_healthCheck module: "+err);
        });
    });

module.exports = {Get_healthCheck};