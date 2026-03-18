import { httpGet } from './http';

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

export function saveUser(user) {
  throw new Error('Unimplemented');
}
