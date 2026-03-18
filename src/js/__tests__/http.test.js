import fetchData, { httpGet, httpPost } from '../http';

const originalHttpGet = httpGet;
const originalHttpPost = httpPost;

describe('http module', () => {
  test('httpGet should throw error with url', () => {
    expect(() => {
      httpGet('test-url');
    }).toThrow('test-url');
  });

  test('httpPost should throw error with url', () => {
    expect(() => {
      httpPost('test-url');
    }).toThrow('test-url');
  });

  test('fetchData should throw error with url', () => {
    expect(() => {
      fetchData('test-url');
    }).toThrow('test-url');
  });
});