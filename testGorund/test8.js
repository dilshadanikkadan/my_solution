function calculateSaving(days) {
  const checkWeeks = Math.floor(days / 7);
  const restDays = days % 7;
  let totalSavings = 0;
  
  for (var i = 0; i < checkWeeks; i++) {
    for (let j = 1; j <= 7; j++) {
      totalSavings += j + i;
    }
  }
  for (let z = 1; z <= restDays; z++) {
    totalSavings += z + i;
  }
  console.log(totalSavings);
}

calculateSaving(9);
