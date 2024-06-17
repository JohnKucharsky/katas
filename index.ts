const problemX = (nums: number[]) => {
  const freqCounter = new Map();

  for (const num of nums) {
    freqCounter.set(num, (freqCounter.get(num) || 0) + 1);
  }

  const maxFrequency = Math.max(...freqCounter.values());

  const maxFreqElements = [...freqCounter.keys()].filter(
    (num) => freqCounter.get(num) === maxFrequency,
  );

  return maxFrequency * maxFreqElements.length;
};

problemX([1, 2, 2, 3, 1, 4]);
