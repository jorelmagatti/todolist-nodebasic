const request = require('supertest');

const app = require('../../src/app');

describe('GET /', () => {
  it('GET / => array of items', () => {
    return request(app)
      .get('/tasks')

      .expect('Content-Type', /json/)

      .expect(200)

      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),

              title: expect.any(String),
              status: expect.any(String),
              createat: expect.any(String)

            }),
          ])
        );
      });
  });
});