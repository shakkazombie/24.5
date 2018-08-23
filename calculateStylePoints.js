const calculateStylePoints = (styleNotes) => {

  scores = styleNotes.sort().slice(1, 4);
  let total = 0;
  for(let i in scores) {
    if (scores[i] > 20) {
      total = total + 20;
    } else {
    total = total + scores[i]
    }
  };

  return total;
};

module.exports = calculateStylePoints;