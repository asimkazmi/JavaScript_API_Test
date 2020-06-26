
const expect = require("chai").expect;
const envData = require('../resource/datafile/endPoints.json');
const testingData = require('../resource/datafile/testData.json');
const {Get_healthCheck} = require("../apiModules/analiseApp/Get_healthCheck");
const {Get_data} = require("../apiModules/analiseApp/Get_data");


describe('Get Reports', function() {
this.timeout(30000);

    describe('Basic Shakedown Test', function() {

        it('Verify API is responsive', async function() {

            testData = envData.BaseURL+envData.endPoints.healthCheck;

            currentResponse = await Get_healthCheck(testData);

            expect(currentResponse.status).to.equal(200);
            
            currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));
     
            expect(currentResponseBody).to.be.an('object');
            
        });

    });


    describe('Functional Tests findings', function() {

        it('Verify calling by All Findings' , async function() {

            testData = envData.BaseURL+envData.endPoints.findings;
            
            currentResponse = await Get_data(testData);

            currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));

            expect(currentResponse.status).to.equal(200);

            expect(currentResponseBody[0].id).to.equal(testingData.test1.id);
            
            expect(currentResponseBody[1].id).to.equal(testingData.test2.id);

            expect(currentResponseBody.label).not.to.be.null;

        });


        it('Verify calling by One Id' , async function() {

            testData = envData.BaseURL+envData.endPoints.findings+testingData.test1.id;
            
            currentResponse = await Get_data(testData);

            expect(currentResponse.status).to.equal(200);
            
            currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));

            expect(currentResponseBody.id).to.equal(1);

            expect(currentResponseBody.label).not.to.be.null;

        });

        it('Verify calling by Second Id' , async function() {

            testData = envData.BaseURL+envData.endPoints.findings+testingData.test2.id;
            
            currentResponse = await Get_data(testData);

            expect(currentResponse.status).to.equal(200);
            
            currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));

            expect(currentResponseBody.id).to.equal(2);

            expect(currentResponseBody.label).not.to.be.null;

        });

        it('Verify calling Non Existent Id' , async function() {

            testData = envData.BaseURL+envData.endPoints.findings+testingData.test3.id;
            console.log(testData);
            
            currentResponse = await Get_data(testData);

            expect(currentResponse.status).to.equal(404);

        });


    });

    describe('Functional Tests Images', function() {

        it('Verify calling by One Id' , async function() {

            testData = envData.BaseURL+envData.endPoints.images+testingData.test4.id;
            console.log(testData);
            
            currentResponse = await Get_data(testData);

            expect(currentResponse.status).to.equal(200);
            
            currentResponseBody = JSON.parse(JSON.stringify(currentResponse.data));

            expect(currentResponseBody.id).to.equal(1);

            expect(currentResponseBody.label).not.to.be.null;

        });

        it('Verify calling Non Existent Id' , async function() {

            testData = envData.BaseURL+envData.endPoints.images+testingData.test3.id;
            console.log(testData);
            
            currentResponse = await Get_data(testData);

            expect(currentResponse.status).to.equal(404);
            
        });

    });

});