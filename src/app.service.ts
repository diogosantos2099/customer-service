import { Injectable } from '@nestjs/common';
import { CustomerEntity } from './entities/customer.entity';

@Injectable()
export class AppService {
  /**
   * Get Customer by id.
   * @param id The id of the Customer
   * @returns Customer model
   */
  get(id: number): Promise<CustomerEntity> {
    const exampleEntity: CustomerEntity = { id, name: 'customer name' };
    return Promise.resolve(exampleEntity);
  }
}
