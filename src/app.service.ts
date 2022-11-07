import { Injectable } from '@nestjs/common';
import { Customer } from './customer/entities/customer.entity';

@Injectable()
export class AppService {
  /**
   * Get Customer by id.
   * @param id The id of the Customer
   * @returns Customer model
   */
  get(id: number): Promise<Customer> {
    const exampleEntity: Customer = { id, name: 'customer name' };
    return Promise.resolve(exampleEntity);
  }
}
