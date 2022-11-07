import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';

/**
 * These e2e tests use the real DB.
 * In order for them to pass, the DB needs to have data.
 * See README.md, section 'Database Setup' for details.
 */
describe('CustomerController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  }, 20000);

  afterAll(async () => {
    await app.close();
  });

  it('/customer (GET) should return 200', () => {
    return request(app.getHttpServer()).get('/customer').expect(200);
  });

  it('/customer/{id} (GET) should return 200', () => {
    const id = 1;

    return request(app.getHttpServer()).get(`/customer/${id}`).expect(200);
  });
});
