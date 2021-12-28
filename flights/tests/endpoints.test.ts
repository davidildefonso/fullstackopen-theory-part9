import { sum } from './sum';
import app from '../src/app';
import supertest from 'supertest';
import { initialDiaries } from './tests_helper';

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


test('a valid flight diary  can be added ', async () => {
	const newdiary = {
		date: "2021-12-28" ,
		weather: "rainy",
		visibility: "poor",
		comment: "test flight",
	};

	const response = await api
						.post('/api/diaries')	
						.send(newdiary)
						.expect(200)
						.expect('Content-Type', /application\/json/);

	
	expect(response.body).toHaveProperty("id") 
	expect(response.body.id).toBe(initialDiaries.length + 1);
	expect(response.body.comment).toBe("test flight");
	
});



afterAll(done => { 	
 	done()
})

