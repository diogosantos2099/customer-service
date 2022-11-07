import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prismaService: PrismaService) {}

  /**
   * Creates a new Customer
   * @param createCustomerDto
   * @returns
   */
  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.customer.create({ data: createCustomerDto });
  }

  /**
   * Get all customers
   * @returns All customers
   */
  findAll() {
    return this.prismaService.customer.findMany();
  }

  /**
   * Get customer by id
   * @param id
   * @returns The customer
   */
  findOne(id: number) {
    return this.prismaService.customer.findUnique({ where: { id } });
  }

  /**
   * Update a customer by id
   * @param id the customer id
   * @param updateCustomerDto customer to update
   * @returns updated customer
   */
  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prismaService.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  /**
   * Delete customer by id
   * @param id customer id
   * @param updateCustomerDto customer to delete
   * @returns The deleted customer
   */
  remove(id: number) {
    return this.prismaService.customer.delete({ where: { id } });
  }
}
