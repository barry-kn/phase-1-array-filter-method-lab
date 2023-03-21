// Code your solution here
const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  console.log(findMatching(drivers, 'bobby'));
console.log(fuzzyMatch(drivers, 's'));
console.log(matchName(drivers, 'Sally'));
[ { name: 'Bobby', hometown: 'Pittsburgh' },  { name: 'Bobby', hometown: 'Tampa Bay' } ]
[ { name: 'Sammy', hometown: 'New York' },  { name: 'Sally', hometown: 'Cleveland' } ]
[ { name: 'Sally', hometown: 'Cleveland' } ]
