const calculateDistancePoints = (distance, hillSize, kPoint) => {
    
    if(hillSize == 'normal') {
      let add = (distance - kPoint) * 2;
      return 60 + add;
    }
  
    if(hillSize == 'big') {
      let add = (distance - kPoint) * 1.8;
      return 60 + add;
    }
  
    if(hillSize == 'huge') {
      let add = (distance - kPoint) * 1.2;
      return 120 + add;
    }
};

module.exports = calculateDistancePoints;