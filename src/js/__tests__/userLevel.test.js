import { getLevel } from '../userLevel';

jest.mock('../http', () => ({
  __esModule: true,
  default: jest.fn()
}));

import fetchData from '../http';

beforeEach(() => {
  jest.clearAllMocks();
});

test('should return level message when response status is ok', () => {
  const mockResponse = {
    status: 'ok',
    level: 42
  };
  
  fetchData.mockReturnValue(mockResponse);
  
  const result = getLevel(1);
  
  expect(result).toBe('Ваш текущий уровень: 42');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
  expect(fetchData).toHaveBeenCalledTimes(1);
});

test('should return error message when response status is not ok', () => {
  const errorResponses = [
    { status: 'error' },
    { status: 'failed' },
    { status: 'invalid' }
  ];
  
  errorResponses.forEach((mockResponse, index) => {
    fetchData.mockReturnValue(mockResponse);
    
    const result = getLevel(999);
    
    expect(result).toBe('Информация об уровне временно недоступна');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/999');
  });
  
  expect(fetchData).toHaveBeenCalledTimes(errorResponses.length);
});

test('should handle response with missing level field', () => {
  const mockResponse = {
    status: 'ok'
  };
  
  fetchData.mockReturnValue(mockResponse);
  
  const result = getLevel(1);
  
  expect(result).toBe('Ваш текущий уровень: undefined');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('should handle response with additional fields', () => {
  const mockResponse = {
    status: 'ok',
    level: 100,
    name: 'Hero',
    experience: 5000
  };
  
  fetchData.mockReturnValue(mockResponse);
  
  const result = getLevel(1);
  
  expect(result).toBe('Ваш текущий уровень: 100');
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});