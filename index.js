const {nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIP(ip, (error, {latitude, longitude}) => {

//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
//     console.log('It worked! Returned coordiates:' , {latitude, longitude});

//     fetchISSFlyOverTimes({latitude, longitude}, (error, passes) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
//       console.log('It worked! Returned passes:' , passes);
//     });
//   });

// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
