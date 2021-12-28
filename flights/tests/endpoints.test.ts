import { sum } from './sum';
import app from '../app';
import supertest from 'supertest';

const api = supertest(app);

beforeAll(done => {
  done()
})


test('ping endpoint return pong', async () => {
	const response = await api.get('/ping');
	expect(response.body).toHaveProperty("data");
	expect(response.body.data).toBe("pong");
});


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


afterAll(done => { 	
 	done()
})

