import getHealthStatus from '../health';

test('should return "healthy" for health > 50', () => {
  const character = { name: 'Маг', health: 90 };
  const result = getHealthStatus(character);
  expect(result).toBe('healthy');
});

test('should return "healthy" for health = 51', () => {
  const character = { name: 'Маг', health: 51 };
  const result = getHealthStatus(character);
  expect(result).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
  const character = { name: 'Маг', health: 50 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return "wounded" for health = 30', () => {
  const character = { name: 'Маг', health: 30 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return "wounded" for health = 15', () => {
  const character = { name: 'Маг', health: 15 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('should return "critical" for health < 15', () => {
  const character = { name: 'Маг', health: 14 };
  const result = getHealthStatus(character);
  expect(result).toBe('critical');
});

test('should return "critical" for health = 0', () => {
  const character = { name: 'Маг', health: 0 };
  const result = getHealthStatus(character);
  expect(result).toBe('critical');
});