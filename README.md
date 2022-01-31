# mmc-backend

## Description

MMC-Backend is a take home interview assessment that tests the prospects ability to create a RES api and to fetch details of a US zip code from that API.

This application uses MongoDB, Express.js, and Node to create and make requests.

## Usage

If a request is made with curl http://hostname/zip/07030 then the Json response should include the city name, county name, state name, and state code

If a request is made with curl http://hostname/zipcounty/count/NJ then the Json response should include:

{
"stateName": place name,
"stateCode": admin code1,
"numberOfCounties": count of number of counties,
"numberOfZipCodes": count of number of zip codes
}

## Set Up

- First step is to save the application locally to your machine
- Then run npm i to install the packages
- Next go into the config folder and create a new file called default.json. Here you will create your connection to your mongo db database like so:

{
"mongoURI": "YOUR MONGODB ATLAS STRING GOES HERE"
}

- Save your file
- Run npm start in your terminal
- Finally you can start making get requests
