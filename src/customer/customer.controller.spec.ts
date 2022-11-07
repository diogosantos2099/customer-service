import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

const MockCustomerService = jest.fn<Partial<CustomerService>, []>(() => ({
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
}));

const defaultCustomer: Customer = {
  id: 1,
  name: 'customer name',
  address: 'customer address',
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('CustomerController', () => {
  let controller: CustomerController;
  let customerService: CustomerService;

  beforeEach(async () => {
    customerService = MockCustomerService() as CustomerService;
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [{ provide: CustomerService, useValue: customerService }],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should return successful response', async () => {
      const createCustomerDto: CreateCustomerDto = {
        name: 'customer name',
        address: 'customer address',
      };
      const expected: Customer = {
        id: 1,
        ...createCustomerDto,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      customerService.create = jest.fn().mockResolvedValue(expected);

      expect(await controller.create(createCustomerDto)).toBe(expected);
    });
  });

  describe('findAll', () => {
    it('should return successful response', async () => {
      const expected: Customer[] = [defaultCustomer];
      customerService.findAll = jest.fn().mockResolvedValue(expected);

      expect(await controller.findAll()).toBe(expected);
    });
  });

  describe('findOne', () => {
    it('should return successful response', async () => {
      const expected: Customer = defaultCustomer;
      customerService.findOne = jest.fn().mockResolvedValue(expected);

      expect(await controller.findOne(defaultCustomer.id.toString())).toBe(
        expected,
      );
    });
  });

  describe('update', () => {
    it('should return successful response', async () => {
      const expected: Customer = {
        id: 1,
        name: 'updated customer name',
        address: 'updated customer address',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      customerService.update = jest.fn().mockResolvedValue(expected);

      expect(await controller.update(expected.id.toString(), expected)).toBe(
        expected,
      );
    });
  });

  describe('remove', () => {
    it('should return successful response', async () => {
      const expected: Customer = defaultCustomer;
      customerService.remove = jest.fn().mockResolvedValue(expected);

      expect(await controller.remove(expected.id.toString())).toBe(expected);
    });
  });
});
