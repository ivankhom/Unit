import sortHeroesByHealth from '../sort';

test('should sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual(expected);
});

test('should not mutate original array', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const originalCopy = [...heroes];
  sortHeroesByHealth(heroes);

  expect(heroes).toEqual(originalCopy);
});

test('should handle empty array', () => {
  const heroes = [];
  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual([]);
});

test('should handle array with one hero', () => {
  const heroes = [{ name: 'мечник', health: 10 }];
  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual([{ name: 'мечник', health: 10 }]);
});

test('should handle heroes with same health', () => {
  const heroes = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ];

  const result = sortHeroesByHealth(heroes);
   expect(result).toEqual([
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 50 },
  ]);
});

test('should handle heroes with zero health', () => {
  const heroes = [
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 0 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 0 },
    { name: 'лучник', health: 0 },
  ];

  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual(expected);
});

test('should handle heroes with negative health (if possible)', () => {
  const heroes = [
    { name: 'мечник', health: -10 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: -5 },
  ];

  const expected = [
    { name: 'маг', health: 50 },
    { name: 'лучник', health: -5 },
    { name: 'мечник', health: -10 },
  ];

  const result = sortHeroesByHealth(heroes);
  expect(result).toEqual(expected);
});