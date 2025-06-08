// utils/aggregateByFertilizer.js
export function aggregateByFertilizer(data, selectedYear) {
  const result = {};

  data.forEach((item) => {
    if (item._year === selectedYear) {
      const product = item.product;

      if (!result[product]) {
        result[product] = { product, requirement: 0, availability: 0 };
      }

      result[product].requirement += parseFloat(item.requirement_in_mt_ || 0);
      result[product].availability += parseFloat(item.availability_in_mt_ || 0);
    }
  });

  return Object.values(result);
}


export function getFertilizerStats(data) {
  const fertilizerMap = {};

  data.forEach((item) => {
    const product = item.product;
    const requirement = parseFloat(item.requirement_in_mt_) || 0;
    const availability = parseFloat(item.availability_in_mt_) || 0;

    if (!fertilizerMap[product]) {
      fertilizerMap[product] = { requirement: 0, availability: 0 };
    }

    fertilizerMap[product].requirement += requirement;
    fertilizerMap[product].availability += availability;
  });

  const fertilizerArray = Object.entries(fertilizerMap).map(([product, values]) => ({
    product,
    ...values,
  }));

  const topRequired = [...fertilizerArray]
    .sort((a, b) => b.requirement - a.requirement)
    .slice(0, 5);

  const leastAvailable = [...fertilizerArray]
    .sort((a, b) => a.availability - b.availability)
    .slice(0, 5);

  return { topRequired, leastAvailable };
}
