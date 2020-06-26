## API JavaScript Test Automation Framework 

## Overview
* This is simple project to showcase Api Test Automation Framework in JavaScript using mocha. It uses local mock server to fetch responses.
* **Skills:** Api Test Automation, Modular Design
* **Languages:** JavaScript/ Node.JS
* **SCM:** Git
* **Build/Dependency Management:** npm, Axios
* **API Testing Frameworks:** Mocha, REST Api, Data-Driven (Json)
* **Assertion Lib:** Chai, Expect, Should

## Setup
* Download [javascript-api-mocha](https://github.com/asimkazmi/JavaScript_API_Test) Project from GitHub
* Install latest [Node.JS](https://nodejs.org/en/download/)
* Install latest [Visual Studio Code](https://code.visualstudio.com/download)
* Install json-server by running
* Open Terminal and Navigate to mockserver Directory
* Run `$ npm install`
* Run `$ json-server --watch db.json`

* Open another Terminal window and Navigate to Test_Framework Directory
* Run `$ npm install`
* Run Tests `$ npm test`

## Sample API Test Scenarios
    
    1. Call End point to get Finding Reports by different Ids
    2. Call End point to get All Findings
    3. Call End point check against a non-existent finding ID should return an error
    4. Call End point to get All Findings
    5. Call End point to get Images by Id
    6. Call End point check against a non-existent images ID should return an error

## UI Test Scenarios (Not Automted)
    
    1. Enter Patient Id to fetch data
    2. Validate The images and findings are shown correctly 
    3. Check If the desktop App is connected to the internet
    4. Check UI whether critical and non-critical findings are properly marked on image
    5. Validate that correct image is retrieved correspoding to findings
   