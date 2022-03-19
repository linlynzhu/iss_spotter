const {nextISSTimesForMyLocation, printPassTimes} = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then(body => printPassTimes(body))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });