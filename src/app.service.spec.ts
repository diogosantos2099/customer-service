import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { Customer } from './customer/entities/customer.entity';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('get', () => {
    it('should resolve successfully', async () => {
      const id = 1;
      const expected: Customer = { id, name: 'customer name' };
      const result = await appService.get(id);

      expect(result).toEqual(expected);
    });
  });
});
