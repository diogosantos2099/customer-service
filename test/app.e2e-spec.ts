import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Customer } from '../src/customer/entities/customer.entity';

describe('AppController (e2e)', () => {
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

  it('/customer/{id} (GET)', () => {
    const id = 1;
    const response: Customer = { id, name: 'customer name' };
    return request(app.getHttpServer())
      .get(`/customer/${id}`)
      .expect(200)
      .expect(response);
  });
});
