import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CustomerEntity {
  /**
   * The id of the Customer
   * @example 1
   */
  @ApiProperty({ example: 1 })
  readonly id: number;

  /**
   * The value of ExampleEntity
   * @example some value
   */
  @ApiPropertyOptional({ example: 'some value' })
  readonly value?: string;
}
