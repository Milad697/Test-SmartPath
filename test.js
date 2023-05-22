const assert = require('assert');
const request = require('supertest');
const app = require('./app');

describe('Blog App', function () {
  describe('GET /', function () {
    it('should return 200 OK', function (done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });

  describe('GET /about', function () {
    it('should return 200 OK', function (done) {
      request(app)
        .get('/about')
        .expect(200, done);
    });
  });

  // Add more test cases as needed

  after(function () {
    // Additional cleanup or teardown logic if necessary
  });
});

