import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

const MockPrismaService = jest.fn<Partial<PrismaService>, []>(() => ({
  customer: {
    aggregate: jest.fn(),
    count: jest.fn(),
    create: jest.fn(),
    createMany: jest.fn(),
    delete: jest.fn(),
    deleteMany: jest.fn(),
    findFirst: jest.fn(),
    findFirstOrThrow: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    findUniqueOrThrow: jest.fn(),
    groupBy: jest.fn(),
    update: jest.fn(),
    updateMany: jest.fn(),
    upsert: jest.fn(),
  },
}));

const defaultCustomer: Customer = {
  id: 1,
  name: 'customer name',
  address: 'customer address',
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('CustomerService', () => {
  let service: CustomerService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = MockPrismaService() as PrismaService;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        { provide: PrismaService, useValue: prismaService },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
      prismaService.customer.create = jest.fn().mockResolvedValue(expected);

      expect(await service.create(createCustomerDto)).toBe(expected);
    });
  });

  describe('findAll', () => {
    it('should return successful response', async () => {
      const expected: Customer[] = [defaultCustomer];
      prismaService.customer.findMany = jest.fn().mockResolvedValue(expected);

      expect(await service.findAll()).toBe(expected);
    });
  });

  describe('findOne', () => {
    it('should return successful response', async () => {
      const expected: Customer = defaultCustomer;
      prismaService.customer.findUnique = jest.fn().mockResolvedValue(expected);

      expect(await service.findOne(defaultCustomer.id)).toBe(expected);
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
      prismaService.customer.update = jest.fn().mockResolvedValue(expected);

      expect(await service.update(expected.id, expected)).toBe(expected);
    });
  });

  describe('remove', () => {
    it('should return successful response', async () => {
      const expected: Customer = defaultCustomer;
      prismaService.customer.delete = jest.fn().mockResolvedValue(expected);

      expect(await service.remove(expected.id)).toBe(expected);
    });
  });
});
